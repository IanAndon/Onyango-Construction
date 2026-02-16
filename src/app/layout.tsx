import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecialDayBanner from "@/components/SpecialDayBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Onyango Construction Company Limited | Building Reliable Infrastructure",
    template: "%s | Onyango Construction",
  },
  description:
    "Onyango Construction Company Limited delivers professional construction, civil works, road & infrastructure, and renovation services. Trusted for quality, safety, and reliability.",
  keywords: ["construction", "civil works", "infrastructure", "renovation", "building", "engineering"],
  openGraph: {
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans min-w-0">
        <SpecialDayBanner />
        <Navbar />
        <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
