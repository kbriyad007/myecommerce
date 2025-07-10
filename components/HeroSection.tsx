"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#f9fafb] via-[#e2e8f0] to-[#f8fafc] text-gray-800 px-6 py-28 flex items-center justify-center overflow-hidden">
      {/* Soft blurred light blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-blue-300 rounded-full opacity-20 blur-[100px] -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 rounded-full opacity-20 blur-[120px] -z-10" />

      <div className="w-full max-w-5xl mx-auto text-center md:text-left">
        <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl p-10 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-300">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
            Raining Offers For <br />
            <span className="text-blue-600">Hot Summer!</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 font-medium">
            Enjoy <span className="font-bold text-gray-900">25% OFF</span> on all products — limited time only!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/products"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              🛒 Shop Now
            </Link>

            <Link
              href="#"
              className="px-8 py-3 border border-gray-300 text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              🔍 Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
