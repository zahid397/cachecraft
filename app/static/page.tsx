export const dynamic = "force-static"; // explicitly force static rendering

export default function StaticPage() {
  const timestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Static Rendering</h1>

      <p>This page is statically generated at build time.</p>

      <p>
        <strong>Build Timestamp:</strong> {timestamp}
      </p>

      <p>
        Refresh the page — the time will NOT change until you rebuild the app.
      </p>

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
