
"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductContent {
  name?: string;
  Price?: number | string;
  image?: string | { filename?: string };
}

interface StoryblokStory {
  uuid: string;
  full_slug: string;
  content: ProductContent;
}

interface Props {
  products: StoryblokStory[];
}

export default function SimilarProducts({ products }: Props) {
  if (!products || products.length === 0) {
    return <p className="text-gray-400 text-sm">No similar products found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => {
          const { content } = p;
          const img =
            typeof content.image === "string"
              ? content.image
              : content.image?.filename || "";

          return (
            <Link key={p.uuid} href={`/${p.full_slug}`} className="block border rounded-lg p-4 hover:shadow transition">
              <Image
                src={`https:${img}`}
                alt={content.name || "Product"}
                width={300}
                height={200}
                className="object-cover w-full h-40 mb-2 rounded"
              />
              <div className="font-medium truncate">{content.name}</div>
              <div className="text-gray-600 text-sm">${content.Price}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
