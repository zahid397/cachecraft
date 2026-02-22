// Dynamic Rendering – page is rendered on every request
export const dynamic = "force-dynamic";

export default function DynamicPage() {
  const timestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dynamic Rendering</h1>

      <p>
        This page uses <code>dynamic = "force-dynamic"</code>, 
        so it is rendered on every request.
      </p>

      <p>
        <strong>Request Timestamp:</strong> {timestamp}
      </p>

      <p>
        Refresh the page — the timestamp updates every time.
      </p>

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
