// components/AddToCartButton.tsx
"use client";

import { useCart } from "@/context/CartContext"; // or your hook path
import { Button } from "@/components/ui/button"; // shadcn button (optional)

interface AddToCartButtonProps {
  product: {
    name: string;
    Price?: number | string;
    image?: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => addToCart({ ...product, quantity: 1 })}
      variant="default"
      className="mt-2"
    >
      Add to Cart
    </Button>
  );
}
