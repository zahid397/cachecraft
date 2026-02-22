import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = db.getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const newPost = db.addPost(title, content);
  return NextResponse.json(newPost, { status: 201 });
}
