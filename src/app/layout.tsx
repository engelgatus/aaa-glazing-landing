import type { Metadata } from "next";
import { DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/layout/LenisProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AAA Glazing Services | Glass Repairs Melbourne & Victoria",
  description:
    "Fast, reliable glass repairs and replacements across Melbourne and Victoria. AGGA accredited, $20M insured, 24/7 emergency service. Get a free quote today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistSans.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
