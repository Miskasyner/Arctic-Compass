import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arctic Compass — Smart Relocation Companion",
  description:
    "Your personal relocation companion for moving to Finnish Lapland. AI-powered guidance for employment, housing, integration, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
