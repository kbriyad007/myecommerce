"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white px-6 py-28 flex items-center justify-center overflow-hidden">
      {/* Optional animated blurred blobs for ambient style */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-400 opacity-20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-[140px] -z-10 animate-pulse" />

      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center md:text-left">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-10 md:p-16 shadow-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            Raining Offers For <br />
            <span className="text-yellow-300">Hot Summer!</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 font-medium">
            Get <span className="font-semibold text-white">25% Off</span> on all products today only. Don't miss out!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
            >
              SHOP NOW
            </Link>
            <Link
              href="#"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
            >
              FIND MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
