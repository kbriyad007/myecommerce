"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import CartMenu from "@/app/components/CartMenu";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

interface MyProduct {
  component: string;
  name: string;
  description: string;
  image?: { filename: string } | string;
  price?: number | string;
  Price?: number | string;
  slug?: string;
  _version?: number;
}

interface StoryblokStory {
  slug: string;
  content: MyProduct;
  _version?: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export default function Page() {
  const [products, setProducts] = useState<MyProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<MyProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [addedToCartIndex, setAddedToCartIndex] = useState<number | null>(null);

  const { addToCart } = useCart();

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_STORYBLOK_TOKEN;
    if (!token) {
      setErrorMsg("❌ Storyblok token not found.");
      setLoading(false);
      return;
    }

    const url = `https://api.storyblok.com/v2/cdn/stories?starts_with=product&version=draft&token=${token}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const stories: StoryblokStory[] = data.stories || [];
        const productList: MyProduct[] = stories.map((story) => ({
          ...story.content,
          price: story.content.Price,
          slug: story.slug,
          _version: story._version,
        }));
        setProducts(productList);
        setFilteredProducts(productList);
      })
      .catch((err) => setErrorMsg(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name?.toLowerCase().includes(term) ||
        p.description?.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleAddToCart = (product: MyProduct, index: number) => {
    const price =
      typeof product.Price === "string"
        ? parseFloat(product.Price)
        : product.Price;

    if (price === undefined || isNaN(price)) {
      alert("Invalid price");
      return;
    }

    addToCart({
      name: product.name || "Unnamed Product",
      price,
      quantity: 1,
    });

    setAddedToCartIndex(index);
    setTimeout(() => setAddedToCartIndex(null), 1500);
  };

  const getImageUrl = (
    image: MyProduct["image"],
    version?: number
  ): string | null => {
    if (typeof image === "string") {
      return image.startsWith("//") ? `https:${image}` : image;
    } else if (image?.filename) {
      return `https://a.storyblok.com${image.filename}?v=${version || "1"}`;
    }
    return null;
  };

  if (loading || errorMsg || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg font-medium px-6">
        {errorMsg ? `❌ ${errorMsg}` : "Loading products..."}
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen font-sans text-gray-900">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* Hero with search props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <HeroSection searchValue={searchTerm} onSearchChange={setSearchTerm} />
      </section>

      {/* Fixed search bar top-right */}
      <div className="fixed top-20 right-6 z-50 w-72 sm:w-96 shadow-lg rounded-full bg-white">
        <SearchBar
          onSearch={(val) => setSearchTerm(val)}
          suggestions={products.map((p) => p.name || "")}
        />
      </div>

      {/* Product listing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28 mb-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Our Products
        </h1>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, i) => {
              const slug =
                product.slug || slugify(product.name || `product-${i}`);
              const imageUrl = getImageUrl(product.image, product._version);

              return (
                <Link key={slug} href={`/products/${slug}`}>
                  <a
                    className="block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col"
                    aria-label={`View details for ${product.name}`}
                  >
                    <div className="relative w-full pt-[61.8%] bg-gray-100">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={product.name || "Product image"}
                          fill
                          className="object-cover"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                          No image available
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="font-semibold text-gray-900 text-lg truncate">
                          {product.name || "Unnamed Product"}
                        </h2>
                        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-green-700 font-semibold text-lg">
                          ${product.price ?? "N/A"}
                        </p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product, i);
                          }}
                          className={`text-sm font-semibold px-4 py-2 rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-green-500 ${
                            addedToCartIndex === i
                              ? "bg-green-600"
                              : "bg-blue-600 hover:bg-blue-700"
                          }`}
                          aria-pressed={addedToCartIndex === i}
                          aria-label={
                            addedToCartIndex === i
                              ? `Added ${product.name} to cart`
                              : `Add ${product.name} to cart`
                          }
                        >
                          {addedToCartIndex === i ? "✔ Added" : "🛒 Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        )}

        {/* Cart menu */}
        <div className="mt-16 max-w-4xl mx-auto">
          <CartMenu />
        </div>
      </section>
    </main>
  );
}
