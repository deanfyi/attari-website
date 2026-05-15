import type { Metadata } from "next";
import { DM_Serif_Display, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** DM Serif Display — Google Fonts ships Regular (400) only; use true 400 for headings (no faux-bold). */
const heroDmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "attari — design studio",
  description:
    "A small design studio that designs world-class experiences and builds beautiful products in the age of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${heroDmSerif.variable} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
