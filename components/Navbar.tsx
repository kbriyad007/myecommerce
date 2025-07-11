"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
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
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-gray-900 select-none">
          🛍️ MyShop
        </Link>

        {/* Navigation Links + Search (desktop only) */}
        <div className="hidden md:flex items-center gap-8 flex-1 mx-8">
          {/* Nav Links */}
          <ul className="flex gap-8 text-gray-700 font-medium text-sm tracking-wide">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-blue-600 transition duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="ml-auto w-48 min-w-[180px]">
            <SearchBar onSearch={onSearch} suggestions={suggestions} />
          </div>
        </div>

        {/* Cart Icon */}
        <Link
          href="/checkout"
          className="relative hover:text-blue-600 transition duration-200 ml-4"
          aria-label="Go to checkout"
        >
          <ShoppingCart className="w-6 h-6 text-gray-700" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs rounded-full px-1.5 font-semibold select-none">
              {totalItems}
            </span>
          )}
        </Link>

        {/* TODO: Hamburger menu button for mobile */}
      </nav>
    </header>
  );
}
