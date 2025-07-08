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
}
