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

export const metadata = {
  title: "Zohre Zamani | Full-Stack Developer",
  description:
    "Portfolio of Zohre Zamani, Full-Stack Developer specializing in React, Next.js, Laravel and modern web applications.",
  authors: [
    {
      name: "Zohre Zamani",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
