"use client";

export function RevalidateTimeButton() {
  const handleClick = async () => {
    await fetch("/api/revalidate-time", { method: "POST" });
    alert("Revalidation triggered. Refresh the page to see the new cached time.");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "0.5rem 1rem",
        background: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Revalidate “time” tag
    </button>
  );
}
