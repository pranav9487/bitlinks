import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import Navbar from "@/components/Navbar";
 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "bitlinks-your url shortener",
  description: "bitlinks shortens your urls easily and quickly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <Navbar />
        {children}
      </body>
    </html>
  );
}
