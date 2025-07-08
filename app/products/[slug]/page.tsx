import StoryblokClient from "storyblok-js-client";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./ProductDetailsClient";
import CartWrapper from "./CartWrapper";
import SimilarProducts from "@/components/SimilarProducts";

const Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN!,
  cache: { clear: "auto", type: "memory" },
});

interface RelatedRef {
  uuid: string;
  full_slug: string;
}

interface MyProduct {
  name: string;
  description: string;
  Price?: number | string;
  image?: { filename: string } | string;
  Category?: string;
  relatedproducts?: RelatedRef[];
}

interface StoryblokProduct {
  uuid: string;
  full_slug: string;
  content: {
    name?: string;
    Price?: number | string;
    image?: string | { filename?: string };
    Category?: string;
  };
}

function getImageUrl(image: MyProduct["image"]): string | null {
  if (typeof image === "string") {
    return image.startsWith("//") ? `https:${image}` : image;
  } else if (image?.filename) {
    return `https:${image.filename}`;
  }
  return null;
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;

  console.log("[DEBUG] Requested slug:", slug);

  try {
    // 1. Fetch current product
    const response = await Storyblok.get(`cdn/stories/products/${slug}`, {
      version: "draft",
    });
    console.log("[DEBUG] Storyblok product response:", response);

    const story = response.data.story;
    if (!story?.content) {
      console.error("[ERROR] Story content not found for slug:", slug);
      return notFound();
    }

    const product: MyProduct = story.content;
    const currentUUID = story.uuid;
    const currentCategory = product.Category;
    const imageUrl = getImageUrl(product.image);

    console.log("[DEBUG] Current product UUID:", currentUUID);
    console.log("[DEBUG] Current product category:", currentCategory);
    console.log("[DEBUG] Current product imageUrl:", imageUrl);

    // 2. Fetch similar products (same category)
    let similarProducts: StoryblokProduct[] = [];
    if (currentCategory) {
      const all = await Storyblok.get("cdn/stories", {
        starts_with: "products/",
        version: "draft",
        per_page: 100,
        is_startpage: false,
      });

      console.log("[DEBUG] All products fetched:", all.data.stories.length);

      similarProducts = (all.data.stories as StoryblokProduct[]).filter((item) => {
        const cat = item.content?.Category?.trim().toLowerCase();
        const currentCat = currentCategory?.trim().toLowerCase();
        const isSameCategory = cat === currentCat;
        const isDifferentProduct = item.uuid !== currentUUID;
        const result = isSameCategory && isDifferentProduct;

        console.log(`[DEBUG] Checking product ${item.uuid} - Category: ${cat}, SameCategory: ${isSameCategory}, DifferentProduct: ${isDifferentProduct}, Include: ${result}`);

        return result;
      });

      console.log("[DEBUG] Similar products found:", similarProducts.length);
    } else {
      console.warn("[WARN] Current product has no category defined.");
    }

    return (
      <main className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200">
            <div className="aspect-[4/3] relative">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={product.name || "Product"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-base font-semibold">
                  No image available
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <section className="flex flex-col justify-between h-full space-y-5">
            <ProductDetailsClient
              name={product.name}
              description={product.description}
              price={product.Price}
            />
          </section>
        </div>

        {/* Cart */}
        <div className="mt-12 max-w-screen-xl mx-auto">
          <CartWrapper />
        </div>

        {/* Similar Products */}
        <div className="mt-16 max-w-screen-xl mx-auto">
          <SimilarProducts products={similarProducts} />
        </div>
      </main>
    );
  } catch (error) {
    console.error("[ERROR] Loading product page failed:", error);
    return notFound();
  }
}
