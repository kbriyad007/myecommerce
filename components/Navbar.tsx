"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          🛍️ MyShop
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav Links & Search */}
        <div className={`flex-col md:flex md:flex-row md:items-center md:gap-6 text-sm font-medium text-gray-600 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent border-t md:border-none z-40 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-0">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </li>
            <li>
              <Link href="/checkout" className="relative hover:text-blue-600 transition">
                <ShoppingCart className="w-5 h-5 inline" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Search bar (visible on md+ screens) */}
          <div className="px-4 md:px-0 md:ml-4 mt-2 md:mt-0">
            <SearchBar
              onSearch={() => {}}
              suggestions={[]} // Optional: You can pass product names here
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
