"use server";

import { db } from "@/lib/db";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Server Action to add a new blog post
 * and invalidate the cached blog list.
 */
export async function addPost(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const content = formData.get("content")?.toString().trim();

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  // Insert into in-memory DB
  db.addPost(title, content);

  // Invalidate blog list cache
  revalidateTag("posts");

  // Redirect back to blog page
  redirect("/blog");
}
