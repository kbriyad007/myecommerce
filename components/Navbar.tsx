"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          🛍️ MyShop
        </Link>

        <ul className="flex gap-6 items-center text-sm font-medium text-gray-600">
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
    </header>
  );
}
