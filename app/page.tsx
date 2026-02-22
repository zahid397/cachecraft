import Link from "next/link";

export const dynamic = "force-static"; // ensure static rendering

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>🧪 CacheCraft – Next.js 16 Caching Demos</h1>

      <p>
        This home page is statically rendered.
        Rendered at: <strong>{new Date().toISOString()}</strong>
      </p>

      <hr />

      <h2>Core Demos</h2>
      <ul>
        <li><Link href="/static">Static Rendering</Link></li>
        <li><Link href="/dynamic">Dynamic Rendering</Link></li>
        <li><Link href="/fetch-default">fetch() default cache</Link></li>
        <li><Link href="/fetch-no-store">fetch() cache: 'no-store'</Link></li>
        <li><Link href="/fetch-revalidate">fetch() with revalidate</Link></li>
        <li><Link href="/use-cache">"use cache" directive</Link></li>
        <li><Link href="/blog">Blog Demo (cached list + revalidateTag)</Link></li>
      </ul>

      <hr />

      <h2>API Helpers</h2>
      <ul>
        <li><Link href="/api/time">/api/time (returns current time)</Link></li>
        <li><Link href="/api/posts">/api/posts (GET all posts)</Link></li>
      </ul>
    </main>
  );
}
