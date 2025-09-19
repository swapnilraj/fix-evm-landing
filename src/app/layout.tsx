import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ERC-FIX — FIX-Legible Ethereum Securities",
  description: "ERC-FIX standard adds canonical FIX instrument data to ERC-20 tokens, enabling native parsing by FIX systems.",
  keywords: ["ERC-FIX", "FIX", "Ethereum", "ERC-20", "securities", "tokenized bonds", "financial instruments", "interoperability"],
  authors: [{ name: "ERC-FIX Team" }],
  openGraph: {
    title: "ERC-FIX — FIX-Legible Ethereum Securities",
    description: "ERC-FIX standard adds canonical FIX instrument data to ERC-20 tokens, enabling native parsing by FIX systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
