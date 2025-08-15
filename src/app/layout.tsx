import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { MouseProvider } from "@/contexts/MouseContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Attention Signs - LLM Research & Blog",
  description: "Personal website and blog about deep learning and LLM research by Attention Signs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased text-white`}>
        <MouseProvider>
          {children}
        </MouseProvider>
      </body>
    </html>
  );
}
