import { unstable_cacheLife as cacheLife } from "next/cache";

/**
 * Returns a cached timestamp.
 * The result is cached for 15 seconds
 * or until the tag "time" is revalidated.
 */
export async function getCachedTime() {
  "use cache";

  // Cache lifetime: 15 seconds
  cacheLife({ revalidate: 15 });

  console.log("⏱ Generating cached time...");
  return new Date().toISOString();
}
