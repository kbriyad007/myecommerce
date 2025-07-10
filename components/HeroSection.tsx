"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-32 flex items-center justify-center overflow-hidden">
      {/* Animated glow blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-30 blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 rounded-full opacity-20 blur-[160px] animate-pulse -z-10" />

      <div className="w-full max-w-5xl mx-auto text-center md:text-left">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_#7c3aed50]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-4">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300">
              Raining Offers For
            </span>
            <span className="block mt-1">Hot Summer!</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl font-medium">
            Enjoy <span className="text-white font-bold">25% OFF</span> on all products this season — exclusive limited time deals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-indigo-900 bg-white rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span className="z-10">🛒 Shop Now</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-indigo-100" />
            </Link>

            <Link
              href="#"
              className="group relative inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="z-10">🔎 Discover More</span>
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
