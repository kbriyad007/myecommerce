"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
          Shop Smarter with <span className="text-blue-400">ShopVerse</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-8">
          Discover unbeatable deals on quality products. Fast shipping, easy returns, and world-class support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow"
          >
            🛒 Shop Now
          </Link>
          <Link
            href="#"
            className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            🔍 Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
