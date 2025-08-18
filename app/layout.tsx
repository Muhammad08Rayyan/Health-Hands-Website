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
  title: "Health Hands Pharmacy - Your Trusted Digital Healthcare Partner in Pakistan",
  description: "Professional licensed pharmacy in Karachi offering genuine prescription medications, AI health assistant, medicine delivery, and expert pharmaceutical care. Download our free app for 24/7 healthcare access.",
  keywords: "pharmacy Karachi, digital pharmacy Pakistan, prescription delivery, genuine medicines, Health Hands Pharmacy, pharmaceutical care, medicine delivery, AI health assistant, prescription upload, health records, licensed pharmacy Pakistan, online pharmacy, medication consultation, healthcare app",
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
