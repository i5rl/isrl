import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { CustomCursor } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ian Rosales - Senior Full Stack Developer",
  description:
    "Portfolio of Ian Rosales, a passionate full stack developer specializing in modern web technologies like React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Ian Rosales" }],
  openGraph: {
    title: "Ian Rosales - Senior Full Stack Developer",
    description:
      "Portfolio showcasing modern web development projects and expertise",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
