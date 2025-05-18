import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const manRope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Opal - Share Videos Easily",
  description:
    "Record and share video messages with your team, friends and family. Create quick tutorials, give feedback, or share moments that matter with Loom's easy-to-use video sharing platform.",
  keywords: [
    "video sharing",
    "screen recording",
    "video messages",
    "tutorials",
    "team collaboration",
  ],
  openGraph: {
    title: "Loom - Share Videos Easily",
    description: "Record and share video messages instantly with Loom",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Loom Video Sharing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loom - Share Videos Easily",
    description: "Record and share video messages instantly with Loom",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manRope.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
