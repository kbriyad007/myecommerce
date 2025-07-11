"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search } from "lucide-react";
import SearchBar from "./SearchBar";

interface NavbarProps {
  onSearch: (val: string) => void;
  suggestions: string[];
}

export default function Navbar({ onSearch, suggestions }: NavbarProps) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Left: Modern Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:opacity-90 transition-opacity duration-300 select-none"
          aria-label="Go to homepage"
        >
          {/* Shopping bag SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 8h14l-1.5 9h-11L5 8zM7 8V6a5 5 0 0110 0v2"
            />
          </svg>
          <span>MyShop</span>
        </Link>

        {/* Right: Menu + Search + Cart */}
        <div className="flex items-center space-x-8">
          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            <li>
              <Link href="/" className="relative pb-1 hover:text-blue-600 transition-colors duration-200">
                <span className="hover:underline underline-offset-4 decoration-2 decoration-blue-500">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="relative pb-1 hover:text-blue-600 transition-colors duration-200">
                <span className="hover:underline underline-offset-4 decoration-2 decoration-blue-500">
                  Products
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="relative pb-1 hover:text-blue-600 transition-colors duration-200">
                <span className="hover:underline underline-offset-4 decoration-2 decoration-blue-500">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative pb-1 hover:text-blue-600 transition-colors duration-200">
                <span className="hover:underline underline-offset-4 decoration-2 decoration-blue-500">
                  Contact
                </span>
              </Link>
            </li>
          </ul>

          {/* Search bar with separate icon */}
          <div className="relative flex items-center w-64">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <SearchBar onSearch={onSearch} suggestions={suggestions} />
          </div>

          {/* Cart Icon */}
          <Link
            href="/checkout"
            className="relative flex items-center hover:text-blue-600 transition"
            aria-label="View Cart"
          >
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5 font-semibold select-none">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
