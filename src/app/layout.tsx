import type { Metadata } from "next";
import { Rethink_Sans, Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/MusicPlayer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  display: "swap",
});

const hedvigLettersSerif = Hedvig_Letters_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hedvig",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavel Alekseev",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} ${hedvigLettersSerif.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          {children}
          <MusicPlayer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
