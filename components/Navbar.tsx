"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          🛍️ MyShop
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav Links (Desktop) */}
        <ul className="hidden lg:flex gap-6 items-center text-sm font-medium text-gray-600">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/products" className="hover:text-blue-600 transition">Products</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          <li><Link href="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
          <li><Link href="/blog" className="hover:text-blue-600 transition">Blog</Link></li>
          <li className="relative">
            <Link href="/checkout" className="hover:text-blue-600 transition">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="space-y-3 text-sm font-medium text-gray-700">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li><Link href="/faq" onClick={toggleMenu}>FAQ</Link></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <Link href="/checkout" onClick={toggleMenu}>Cart ({totalItems})</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
