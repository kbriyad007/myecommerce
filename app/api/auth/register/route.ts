// /app/api/auth/register/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // TODO: Add your user creation logic here
    // e.g. validate input, hash password, save user to database

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

// Optional: block other methods
export function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
