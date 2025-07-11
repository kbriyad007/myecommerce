"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          {authMode === "login" ? "Login to Your Account" : "Create an Account"}
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {authMode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-4">
          or continue with
        </div>

        <button
          onClick={() => alert("🔐 Google login logic goes here")}
          className="w-full mt-3 flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-50"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span>Continue with Google</span>
        </button>

        <div className="mt-4 text-sm text-center text-gray-600">
          {authMode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setAuthMode("register")}
                className="text-blue-600 font-medium hover:underline"
              >
                Register now
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setAuthMode("login")}
                className="text-blue-600 font-medium hover:underline"
              >
                Login here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
