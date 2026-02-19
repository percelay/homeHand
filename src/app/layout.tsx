import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Home & Handy | Expert Craftsmanship. Reliable Service.",
  description:
    "Home & Handy delivers trusted home maintenance, remodeling, and landscaping services in Bethany, Oklahoma."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
