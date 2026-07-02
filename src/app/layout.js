import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Pastikan baris ini ada jika Anda pakai css bawaan Next.js

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rendra | Portofolio",
  description:
    "Sebuah project website portofolio pribadi yang terintegrasi otomatis dengan Make.com",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* 🛑 SCRIPT CLOUDFLARE TURNSTILE SUDAH DIHAPUS DARI SINI */}
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
