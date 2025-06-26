import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Capital estate agents",
  description: "Created with typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
