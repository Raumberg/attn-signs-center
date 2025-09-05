"use client";

import { useState, useEffect, useMemo } from "react";
import DocsPageClient from "@/components/pages/DocsPageClient";
import VideoBackground from "@/components/effects/VideoBackground";
import InteractiveCursor from "@/components/effects/InteractiveCursor";
import RippleEffect from "@/components/effects/RippleEffect";
import Navigation from "@/components/ui/Navigation";
import { useMouse } from "@/contexts/MouseContext";

export default function Docs() {
  const [markdown, setMarkdown] = useState("");
  const [currentSection, setCurrentSection] = useState("quickstart");
  
  useMouse();

  useEffect(() => {
    // Load markdown content based on current section
    fetch(`/content/docs/${currentSection}.md`)
      .then(res => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown(`# Loading error\nFailed to load ${currentSection} documentation.`));
  }, [currentSection]);

  const navItems = useMemo(() => [
    { id: "quickstart", label: "Quickstart" },
    { id: "structure", label: "Structure" },
    { id: "config", label: "YAML Config" },
    { id: "algorithms", label: "Algorithms" },
    { id: "engines", label: "Engines" },
    { id: "peft", label: "PEFT & Quant" },
    { id: "cli", label: "CLI" },
  ], []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VideoBackground />
      <RippleEffect />
      <InteractiveCursor />
      <Navigation />
      <DocsPageClient 
        markdown={markdown} 
        navItems={navItems} 
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
    </div>
  );
}
