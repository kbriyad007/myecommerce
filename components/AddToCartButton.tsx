"use client";

import { useCart } from "@/context/CartContext"; // update path if needed

interface Props {
  product: {
    name: string;
    Price?: number | string;
    image?: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleClick = () => {
    const price =
      typeof product.Price === "string"
        ? parseFloat(product.Price)
        : product.Price || 0;

    addToCart({
      name: product.name,
      price,
      image: product.image || "",
      quantity: 1,
    });
  };

  return (
    <button
      onClick={handleClick}
      className="w-full text-sm bg-black text-white py-2 rounded hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
