"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
        alt="Hero Background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg tracking-wide font-sans">
          Shop Smarter with{" "}
          <span className="text-blue-400 drop-shadow-lg">ShopVerse</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/95 font-semibold max-w-3xl mx-auto mb-10 tracking-wide drop-shadow-md">
          Discover unbeatable deals on quality products. Fast shipping, easy returns, and world-class support.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/products"
            className="bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg shadow-black/30"
          >
            🛒 Shop Now
          </Link>
          <Link
            href="#"
            className="border-2 border-white text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-black transition shadow-lg"
          >
            🔍 Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
