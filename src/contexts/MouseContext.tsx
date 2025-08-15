"use client";

import React, { createContext, useContext } from "react";
import { useMouseEffects } from "@/hooks/useMouseEffects";

interface MouseContextValue {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
  ripples: { id: number; x: number; y: number; timestamp: number }[];
  setMagneticTargetForElement: (el: HTMLElement) => void;
  clearMagneticTarget: () => void;
  getMagneticPosition: () => { x: number; y: number };
}

const MouseContext = createContext<MouseContextValue | null>(null);

export const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const value = useMouseEffects();

  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
};

export const useMouse = () => {
  const ctx = useContext(MouseContext);
  if (!ctx) {
    throw new Error("useMouse must be used within MouseProvider");
  }
  return ctx;
};
