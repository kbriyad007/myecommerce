// components/HeroSection.tsx
"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Welcome to <span className="text-white drop-shadow-lg">ShopVerse</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Your ultimate destination for curated quality products. Discover, shop, and elevate your lifestyle.
        </p>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
