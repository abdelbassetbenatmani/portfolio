import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";

const Space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelbasset Benatmani - Full Stack Developer",
  description: "Full Stack Developer based in Algeria, specializing in React, Node.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Space.className}>
        <Navbar />
        {children}
        <Footer />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
