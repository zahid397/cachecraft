import type { Metadata } from "next";
import "./globals.css"; // যদি CSS থাকে

export const metadata: Metadata = {
  title: "CacheCraft – Next.js 16 Caching Demos",
  description: "Demonstration of Static, Dynamic, Data Cache, and use cache in Next.js 16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "20px" }}>
        {children}
      </body>
    </html>
  );
}
