"use client";

import ContactPage from "@/components/pages/ContactPage";
import BackgroundAnimation from "@/components/effects/BackgroundAnimation";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import Navigation from "@/components/ui/Navigation";
import { useMouseEffects } from "@/hooks/useMouseEffects";

export default function Contact() {
  const { mousePosition, isHovering, setIsHovering, getMagneticPosition } = useMouseEffects();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      <BackgroundAnimation mousePosition={mousePosition} />
      <InteractiveCursor 
        mousePosition={mousePosition} 
        isHovering={isHovering} 
        magneticPosition={getMagneticPosition()}
      />
      <Navigation />
      <ContactPage />
    </div>
  );
} 