// components/AddToCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext"; // update path if needed
import { Button } from "@/components/ui/button"; // or replace with <button>

interface Props {
  product: {
    name: string;
    Price?: number | string;
    image?: string;
  };
}

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() =>
        addToCart({
          name: product.name,
          price: product.Price || 0,
          image: product.image,
          quantity: 1,
        })
      }
      className="mt-2"
    >
      Add to Cart
    </Button>
  );
}
