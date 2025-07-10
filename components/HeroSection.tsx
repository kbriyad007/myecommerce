"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] bg-gradient-to-br from-[#4f46e5] via-purple-600 to-pink-500 text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl ring-1 ring-white/10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
          Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">ShopVerse</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Elevate your lifestyle with handpicked, quality products. Fast. Beautiful. Trusted. Delivered to your doorstep.
        </p>

        <div className="mt-10">
          <Link href="/products">
            <span className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition hover:scale-105 transform duration-300 relative overflow-hidden">
              <span className="relative z-10">Explore Products</span>
              <span className="absolute inset-0 rounded-full bg-indigo-100 opacity-0 group-hover:opacity-100 transition duration-300" />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[150px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse -z-10" />
    </section>
  );
}
