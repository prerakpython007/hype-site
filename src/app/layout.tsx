import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import AppProvider from "@/components/AppProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYPE! - Build Better Habits",
  description:
    "The habit tracker that actually keeps you going. Set goals, track streaks, and stay motivated with a community that hypes you up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <AppProvider>
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
