
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "René Magritte Web App",
  description: "A surreal portfolio site for René Magritte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
