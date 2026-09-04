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
  metadataBase: new URL("https://outrank.agency"),

  title: {
    default: "OUTRANK — Digital Growth Agency",
    template: "%s | OUTRANK",
  },

  description:
    "OUTRANK is a digital growth agency helping ambitious businesses get discovered, generate leads, and turn attention into customers through websites, SEO, social media, paid advertising, and automation.",

  keywords: [
    "digital marketing agency",
    "digital growth agency",
    "SEO agency",
    "web design agency",
    "social media marketing",
    "paid advertising",
    "marketing automation",
    "OUTRANK",
  ],

  authors: [{ name: "OUTRANK" }],
  creator: "OUTRANK",
  publisher: "OUTRANK",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://outrank.agency",
    siteName: "OUTRANK",
    title: "OUTRANK — Digital Growth Agency",
    description:
      "We build digital growth systems that help ambitious businesses get discovered, generate leads, and turn attention into customers.",
  },

  twitter: {
    card: "summary_large_image",
    title: "OUTRANK — Digital Growth Agency",
    description:
      "Digital growth systems built to help ambitious businesses get discovered, generate leads, and grow.",
  },

  alternates: {
    canonical: "https://outrank.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}