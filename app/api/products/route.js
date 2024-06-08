import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
