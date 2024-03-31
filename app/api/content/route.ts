import { NextResponse } from "next/server";

// Dummy data
const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content: "adasdsadsadsadsadsadsad",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
