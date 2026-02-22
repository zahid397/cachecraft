// Default fetch() caching – uses the Data Cache (force-cache)
export default async function FetchDefaultPage() {
  // No cache option → default is force-cache in App Router
  const res = await fetch("/api/time");
  const data = await res.json();

  const pageTimestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>fetch() default cache</h1>

      <p>Data from API (cached):</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p>
        <strong>Page render timestamp:</strong> {pageTimestamp}
      </p>

      <p>
        The API timestamp stays the same across refreshes because
        the fetch result is stored in the Data Cache.
      </p>

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
