"use client";

import { addPost } from "@/app/actions/blogActions";

export default function AddPostForm() {
  return (
    <form
      action={addPost}
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <h3>Add a new post</h3>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Content:
          <input
            type="text"
            name="content"
            required
            style={{ marginLeft: "0.5rem" }}
          />
        </label>
      </div>

      <button
        type="submit"
        style={{
          padding: "0.3rem 0.8rem",
          background: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Post
      </button>
    </form>
  );
}
