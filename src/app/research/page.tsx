"use client";

import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400","700"]});

export default function Research() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />
      <RippleEffect />
      <InteractiveCursor />
      <Navigation />
      <div className="relative z-10 pt-32 pb-20 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Research Hub</h1>
        <p className={`text-xl md:text-2xl text-gray-300 mb-10 ${jetbrainsMono.className}`}>
          We’re actively experimenting and writing docs. Everything is in progress.
        </p>
        <p className={`text-lg text-gray-400 mb-6 ${jetbrainsMono.className}`}>
          Want to join the journey? Hop into our Telegram group and dive into experiments together!
        </p>
        <a
          href="https://t.me/attnsigns"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-medium no-underline ${jetbrainsMono.className}`}
        >
          Join Telegram →
        </a>
      </div>
    </div>
  );
}
