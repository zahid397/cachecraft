// fetch with { next: { revalidate: 5 } } – time-based revalidation

export default async function FetchRevalidatePage() {
  const res = await fetch("/api/time", {
    next: { revalidate: 5 }, // revalidate every 5 seconds
  });

  const data = await res.json();
  const pageTimestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>fetch() with revalidate: 5s</h1>

      <p>Data from API (revalidates every 5 seconds):</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p>
        <strong>Page render timestamp:</strong> {pageTimestamp}
      </p>

      <p>
        Refresh quickly — the API timestamp stays the same for 5 seconds,
        then updates after the revalidation window.
      </p>

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
