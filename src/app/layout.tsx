import type { Metadata } from "next";
import { Montserrat, Outfit, Alumni_Sans } from "next/font/google"; // Import Alumni Sans
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const alumniSans = Alumni_Sans({
  variable: "--font-alumni-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JoeHart Empire Fragrance",
  description: "Perfume Online Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${outfit.variable} ${alumniSans.variable}`}>{children}</body>
    </html>
  );
}
