"use client";

import Image from "next/image";
import ProductDetailsClient from "./ProductDetailsClient";
import CartWrapper from "./CartWrapper";
import SimilarProducts from "@/components/SimilarProducts";

interface StoryblokProduct {
  uuid: string;
  full_slug: string;
  content: {
    name?: string;
    Price?: number | string;
    image?: string | { filename?: string };
    Category?: string | object | null;
  };
}

interface MyProduct {
  name: string;
  description: string;
  Price?: number | string;
  image?: { filename: string } | string;
}

interface Props {
  product: MyProduct;
  imageUrl: string | null;
  similarProducts: StoryblokProduct[];
}

export default function ProductPageLayout({ product, imageUrl, similarProducts }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e8edf3] py-16 px-8 sm:px-16 lg:px-28 xl:px-36">
      <div className="max-w-screen-lg mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Product Image */}
        <div className="relative rounded-3xl bg-white shadow-2xl ring-1 ring-gray-300 overflow-hidden hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-shadow duration-600 ease-in-out">
          <div className="aspect-[4/3] relative overflow-hidden rounded-3xl">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={product.name || "Product"}
                fill
                className="object-cover transform transition-transform duration-700 ease-in-out hover:scale-110"
                unoptimized
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xl font-semibold select-none">
                No image available
              </div>
            )}
          </div>
          {/* subtle shadow bottom highlight */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-b-3xl"></div>
        </div>

        {/* Product Info */}
        <section className="flex flex-col justify-between h-full space-y-8">
          <ProductDetailsClient
            name={product.name}
            description={product.description}
            price={product.Price}
          />
        </section>
      </div>

      {/* Cart */}
      <div className="mt-20 max-w-screen-lg mx-auto bg-white rounded-2xl shadow-xl ring-1 ring-gray-300 p-8">
        <CartWrapper />
      </div>

      {/* Similar Products */}
      <div className="mt-24 max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight drop-shadow-sm">
          Explore Similar Items
        </h2>
        <SimilarProducts products={similarProducts} />
      </div>
    </main>
  );
}
