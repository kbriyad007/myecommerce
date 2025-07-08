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
    <main className="min-h-screen bg-gradient-to-b from-[#eef2f7] via-[#d7e1ec] to-[#cfd8e8] py-16 px-6 sm:px-12 lg:px-24 xl:px-40">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Product Image */}
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            bg-white/10
            backdrop-blur-md
            shadow-lg
            ring-1 ring-white/30
            hover:shadow-2xl
            transition-shadow duration-500 ease-in-out
          "
          style={{ boxShadow: "0 10px 40px rgb(0 0 0 / 0.15)" }}
        >
          <div className="aspect-[4/3] relative overflow-hidden rounded-3xl">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={product.name || "Product"}
                fill
                className="object-cover transform transition-transform duration-700 ease-in-out hover:scale-105"
                unoptimized
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white/70 text-xl font-semibold select-none">
                No image available
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/25 to-transparent rounded-b-3xl pointer-events-none" />
        </div>

        {/* Product Info */}
        <section
          className="
            flex flex-col justify-between h-full
            bg-white/10
            backdrop-blur-md
            rounded-3xl
            p-8
            text-white
            shadow-lg
            ring-1 ring-white/30
            transition-shadow duration-500 ease-in-out
            hover:shadow-2xl
            space-y-8
          "
        >
          <ProductDetailsClient
            name={product.name}
            description={product.description}
            price={product.Price}
          />
        </section>
      </div>

      {/* Cart */}
      <div
        className="
          mt-20 max-w-screen-xl mx-auto
          bg-white/10
          backdrop-blur-md
          rounded-3xl
          p-10
          shadow-lg
          ring-1 ring-white/30
          transition-shadow duration-500 ease-in-out
          hover:shadow-2xl
          text-white
        "
      >
        <CartWrapper />
      </div>

      {/* Similar Products */}
      <div className="mt-24 max-w-screen-xl mx-auto">
        <h2
          className="
            text-4xl font-extrabold text-gray-900 dark:text-white
            tracking-tight drop-shadow-lg mb-12
          "
          style={{ textShadow: "0 2px 8px rgb(0 0 0 / 0.25)" }}
        >
          Explore Similar Items
        </h2>
        <SimilarProducts products={similarProducts} />
      </div>
    </main>
  );
}
