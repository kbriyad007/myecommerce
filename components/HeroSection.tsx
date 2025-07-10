"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#4f46e5] via-purple-600 to-pink-500 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          Welcome to <span className="text-white">ShopVerse</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Elevate your lifestyle with handpicked, quality products. Fast. Beautiful. Trusted.
        </p>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
