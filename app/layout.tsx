import type { Metadata } from "next";
import Navbar from "@/components/main/Navbar";
import "./globals.css";
import Copyright from "@/components/main/Copyright";

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
        className={`overflow-y-scrool overflow-x-hidden`}
      > 
      <Navbar/>
        {children}
        <Copyright/>
      </body>
    </html>
  );
}
