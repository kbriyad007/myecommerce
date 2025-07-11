"use client";

import { X, Mail, Lock, UserPlus } from "lucide-react";
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
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[42rem] p-10 rounded-3xl shadow-2xl relative animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          {authMode === "login" ? (
            <>
              <Lock className="w-6 h-6 text-blue-600" />
              <span>Welcome Back</span>
            </>
          ) : (
            <>
              <UserPlus className="w-6 h-6 text-blue-600" />
              <span>Join MyShop</span>
            </>
          )}
        </h2>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow"
          >
            {authMode === "login" ? "Login" : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-400">or continue with</span>
          </div>
        </div>

        {/* Google Button */}
        <button
          onClick={() => alert("🔐 Google login logic goes here")}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition text-sm font-medium text-gray-700"
        >
          <Image
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            width={20}
            height={20}
          />
          <span>Continue with Google</span>
        </button>

        {/* Switch Mode */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {authMode === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setAuthMode("register")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Register now
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setAuthMode("login")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Login here
              </button>
            </>
          )}
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.35s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
