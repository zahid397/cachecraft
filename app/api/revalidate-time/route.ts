import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST() {
  revalidateTag("time");
  return NextResponse.json({
    revalidated: true,
    now: new Date().toISOString(),
  });
}
