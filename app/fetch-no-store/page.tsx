// fetch with cache: 'no-store' – bypasses the Data Cache
export const dynamic = "force-dynamic"; // ensures dynamic rendering

export default async function FetchNoStorePage() {
  const res = await fetch("/api/time", {
    cache: "no-store",
  });

  const data = await res.json();
  const pageTimestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>fetch() with cache: 'no-store'</h1>

      <p>Data from API (no cache):</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p>
        <strong>Page render timestamp:</strong> {pageTimestamp}
      </p>

      <p>
        Both timestamps change on every refresh because
        the Data Cache is bypassed.
      </p>

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
