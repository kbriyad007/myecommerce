// components/SearchBar.tsx
"use client";

import { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); // Send to parent
  };

  return (
    <input
      type="text"
      value={term}
      onChange={handleInputChange}
      placeholder="🔍 Search products..."
      className="w-full sm:w-96 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
    />
  );
}
