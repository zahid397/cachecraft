export type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};

declare global {
  var __posts: Post[] | undefined;
}

if (!global.__posts) {
  global.__posts = [
    {
      id: 1,
      title: "Hello World",
      content: "This is the first post.",
      createdAt: new Date().toISOString(),
    },
  ];
}

export const db = {
  getPosts: () => global.__posts || [],

  addPost: (title: string, content: string) => {
    const newPost: Post = {
      id: (global.__posts?.length || 0) + 1,
      title,
      content,
      createdAt: new Date().toISOString(),
    };

    global.__posts = [...(global.__posts || []), newPost];
    return newPost;
  },

  clearPosts: () => {
    global.__posts = [];
  },
};
