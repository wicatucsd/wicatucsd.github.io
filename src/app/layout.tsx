import type { Metadata } from "next";
import { onest } from "@/assets/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIC at UCSD",
  description: "Women in Computing at UC San Diego",
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'kQIYxJzTjyToGPQd8qupgX9N8vg5K7gGSISNVT_blig',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${onest.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
