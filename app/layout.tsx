import type { Metadata } from "next";
import Navbar from "@/components/main/Navbar";
import "./globals.css";
import Copyright from "@/components/main/Copyright";
import { createClient } from "@/prismicio";


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient(); 
  const settings = await client.getSingle("settings");
  
  return{
    title: settings.data.site_title || "Fallback",
    description: settings.data.meta_description || "Fallback for Description",
    icons: {
      icon: settings.data.site_icon.url || "",  // URL untuk site icon
      shortcut: settings.data.site_icon.url || "",  // URL untuk shortcut icon (favicon)
    },
    openGraph:{
      images: [settings.data.og_image.url || ""]
    }
  }
}


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
