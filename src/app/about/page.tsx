"use client";

import AboutPage from "@/components/pages/AboutPage";
import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import { useMouse } from "@/contexts/MouseContext";

export default function About() {
  useMouse();

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />

      <RippleEffect />

      <InteractiveCursor />

      <Navigation />

      <AboutPage />
    </div>
  );
} 