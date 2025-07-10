"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-sky-700 to-indigo-900 text-white py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Raining Offers For <br /> Hot Summer!
          </h1>
          <p className="text-xl font-medium mb-8">
            25% Off On All Products
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-100 transition"
            >
              SHOP NOW
            </Link>
            <Link
              href="#"
              className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition"
            >
              FIND MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
