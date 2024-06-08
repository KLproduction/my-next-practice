import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const postId = params.id;
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json({ data });
}
