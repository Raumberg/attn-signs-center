"use client";

import { useState, useEffect } from "react";
import { attentionPhrases } from "@/constants/phrases";
import { useMouse } from "@/contexts/MouseContext";
import { useRouter } from "next/navigation";
import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/pages/HeroSection";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  const [randomPhrase, setRandomPhrase] = useState("");
  const router = useRouter();
  const { 
    setIsHovering,
    setMagneticTargetForElement,
    clearMagneticTarget
  } = useMouse();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * attentionPhrases.length);
    setRandomPhrase(attentionPhrases[randomIndex]);
  }, []);

  // Navigate to /about on wheel down gesture
  useEffect(() => {
    let throttled = false;

    const handleWheel = (e: WheelEvent) => {
      if (throttled) return;
      if (e.deltaY > 40) {
        throttled = true;
        router.push("/about");
        setTimeout(() => { throttled = false; }, 1000);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [router]);

  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
      <VideoBackground />
      
      <RippleEffect />

      <InteractiveCursor />

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
