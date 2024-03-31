import { getServerSession } from "next-auth";
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
  const session = await getServerSession();
  return NextResponse.json(posts);
}
