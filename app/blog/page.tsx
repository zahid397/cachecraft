import { db } from "@/lib/db";
import { cacheTag } from "next/cache";
import AddPostForm from "./AddPostForm";

async function getPosts() {
  "use cache";
  cacheTag("posts");

  console.log("📦 Generating cached blog list...");
  return db.getPosts();
}

export default async function BlogPage() {
  const posts = await getPosts();
  const pageTimestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Blog Demo – Cached List with revalidateTag</h1>

      <p>
        The blog list uses <code>"use cache"</code> with{" "}
        <code>cacheTag("posts")</code>.  
        When a new post is added,{" "}
        <code>revalidateTag("posts")</code> clears the cache.
      </p>

      <p>
        <strong>Page render timestamp:</strong> {pageTimestamp}
      </p>

      <AddPostForm />

      <h2>Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> – {post.content}  
              <br />
              <small>Created at: {post.createdAt}</small>
            </li>
          ))}
        </ul>
      )}

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
