"use client";

import { useState, useEffect } from "react";
import { attentionPhrases } from "@/constants/phrases";
import { useMouseEffects } from "@/hooks/useMouseEffects";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import InteractiveCursor from "@/components/InteractiveCursor";
import RippleEffect from "@/components/RippleEffect";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [randomPhrase, setRandomPhrase] = useState("");
  const { mousePosition, isHovering, setIsHovering, ripples } = useMouseEffects();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * attentionPhrases.length);
    setRandomPhrase(attentionPhrases[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <BackgroundAnimation mousePosition={mousePosition} />
      
      <RippleEffect ripples={ripples} />

      <InteractiveCursor mousePosition={mousePosition} isHovering={isHovering} />

      <HeroSection 
        randomPhrase={randomPhrase}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />

      <Navigation />

      <ScrollIndicator />
    </div>
  );
}
