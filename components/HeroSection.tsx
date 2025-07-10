// components/HeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Discover Premium Products
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Explore our exclusive selection of high-quality items tailored to your needs. Shop the latest arrivals now.
          </p>
          <div className="mt-8 flex">
            <Link
              href="/products"
              className="inline-block rounded-full bg-black px-8 py-3 text-white text-sm font-medium transition hover:bg-gray-800"
            >
              Browse Products
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 lg:mt-0 lg:ml-12"
        >
          <Image
            src="/hero-product.jpg" // Add your hero image here (store it in /public)
            alt="Product display"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
