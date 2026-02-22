import { getCachedTime } from "@/lib/cache";
import RevalidateTimeButton from "./RevalidateTimeButton";

export default async function UseCachePage() {
  const cachedTime = await getCachedTime();
  const pageTimestamp = new Date().toISOString();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>"use cache" directive example</h1>

      <p>
        The function <code>getCachedTime()</code> uses{" "}
        <code>"use cache"</code> with <code>cacheTag("time")</code>.
      </p>

      <p>
        <strong>Cached time from function:</strong> {cachedTime}
      </p>

      <p>
        <strong>Page render timestamp:</strong> {pageTimestamp}
      </p>

      <p>
        Click the button below to call{" "}
        <code>revalidateTag("time")</code>.
      </p>

      <RevalidateTimeButton />

      <p>
        <a href="/">← Back</a>
      </p>
    </main>
  );
}
