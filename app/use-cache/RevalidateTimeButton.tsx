"use client";

export default function RevalidateTimeButton() {
  async function handleClick() {
    await fetch("/api/revalidate-time", {
      method: "POST",
    });
    window.location.reload();
  }

  return (
    <button onClick={handleClick}>
      Revalidate "time" Tag
    </button>
  );
}
