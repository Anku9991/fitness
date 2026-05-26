import type { Metadata, Viewport } from "next";
import { Geist, Outfit, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FlexiBack — Premium AI-Powered Low Back Care & Rehab",
  description: "A premium physical therapy and rehabilitation companion. Customize workouts, play voice-guided Hindi instructions, and ask our AI Physio for instant form adjustments.",
  keywords: ["low back care", "back exercises", "rehabilitation", "AI physical therapist", "lower back pain", "spine health"],
  authors: [{ name: "Anku" }],
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} ${notoDevanagari.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-[#f8fafc] selection:bg-teal-500/30 selection:text-teal-200">
        {children}
      </body>
    </html>
  );
}
