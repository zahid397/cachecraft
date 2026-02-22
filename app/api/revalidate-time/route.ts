import { revalidateTag } from "next/cache";

export async function POST() {
  revalidateTag("time");
  return Response.json({ success: true });
}
