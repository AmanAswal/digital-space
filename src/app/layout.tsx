import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Aman Aswal",
  description: "Digital Space of Aman Aswal",
  keywords: ["Next.js", "React", "JavaScript", "Web Development"],
  authors: [{ name: "Aman Aswal" }],
  creator: "Aman Aswal",
  publisher: "Aman Aswal",
};

export const viewport: Viewport = {
  themeColor: "#171717",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[#171717] text-white">
        <div className="mx-auto w-full md:w-[80%] lg:w-1/2">
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
