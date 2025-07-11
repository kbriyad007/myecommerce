"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar"; // ✅ Ensure this path is correct

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          🛍️ MyShop
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav Links & Search */}
        <div className="hidden md:flex gap-6 items-center ml-auto">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>

          <div className="w-64">
            <SearchBar
              onSearch={(val) => setSearchTerm(val)}
              suggestions={[]} // optional: pass real product names if needed
            />
          </div>

          <Link href="/checkout" className="relative hover:text-blue-600 transition">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="w-full mt-4 flex flex-col gap-4 md:hidden">
            <SearchBar
              onSearch={(val) => setSearchTerm(val)}
              suggestions={[]}
            />
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link href="/checkout" className="flex items-center gap-1 hover:text-blue-600 transition">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-1.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
