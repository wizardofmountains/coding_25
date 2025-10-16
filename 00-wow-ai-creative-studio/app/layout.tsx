import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Creative Studio",
  description: "Generate stunning images with AI using DALL-E 3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
