import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TeemoDinero",
  description: "TeemoDinero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
