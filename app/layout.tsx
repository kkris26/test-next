import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/main/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This i My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#030014] overflow-y-scrool overflow-x-hidden`}
      > 
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
