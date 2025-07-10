"use client";

import SearchBar from "@/components/SearchBar";

interface HeroSectionProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSection({ searchValue, onSearchChange }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* ✅ Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ✅ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ✅ Search bar top-right */}
      <div className="absolute top-6 right-6 z-20">
        <SearchBar value={searchValue} onChange={onSearchChange} />
      </div>

      {/* ✅ Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
          Shop Smarter with <span className="text-blue-400">ShopVerse</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-8">
          Discover unbeatable deals on quality products. Fast shipping, easy returns, and world-class support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="bg-white text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition shadow"
          >
            🛒 Shop Now
          </a>
          <a
            href="#"
            className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            🔍 Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
