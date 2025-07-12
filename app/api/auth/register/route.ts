// /app/api/auth/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "@/prisma"; // Adjust path if needed

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (
      !email || typeof email !== "string" ||
      !password || typeof password !== "string" || password.length < 6
    ) {
      return NextResponse.json(
        { error: "Invalid email or password (min 6 chars)" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Optional: block GET requests
export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
