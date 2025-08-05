"use client";

import { useState, useEffect } from "react";
import { attentionPhrases } from "@/constants/phrases";
import { useMouseEffects } from "@/hooks/useMouseEffects";
import BackgroundAnimation from "@/components/effects/BackgroundAnimation";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/pages/HeroSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  const [randomPhrase, setRandomPhrase] = useState("");
  const { 
    mousePosition, 
    isHovering, 
    setIsHovering, 
    ripples, 
    setMagneticTargetForElement, 
    clearMagneticTarget, 
    getMagneticPosition 
  } = useMouseEffects();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * attentionPhrases.length);
    setRandomPhrase(attentionPhrases[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <BackgroundAnimation mousePosition={mousePosition} />
      
      <RippleEffect ripples={ripples} />

      <InteractiveCursor 
        mousePosition={mousePosition} 
        isHovering={isHovering} 
        magneticPosition={getMagneticPosition()}
      />

      <HeroSection 
        randomPhrase={randomPhrase}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onButtonHover={setMagneticTargetForElement}
        onButtonLeave={clearMagneticTarget}
      />

      <Navigation />

      <ScrollIndicator />
    </div>
  );
}
