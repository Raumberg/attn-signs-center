import { useState, useEffect } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export function useMouseEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [trail, setTrail] = useState<Ripple[]>([]);
  const [magneticTarget, setMagneticTarget] = useState<{ x: number; y: number; radius: number } | null>(null);

  useEffect(() => {
    let frame: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (frame) return;
      // Throttle updates to one per animation frame (~60fps) to avoid jitter, especially noticeable on Windows
      frame = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        frame = null;
      });
      
      const newPoint = {
        id: Date.now(),
        x: e.pageX,
        y: e.pageY,
        timestamp: Date.now()
      } as Ripple;
      setTrail(prev => [...prev, newPoint]);

      // Remove point after 400ms to create fading trail
      setTimeout(() => {
        setTrail(prev => prev.filter(p => p.id !== newPoint.id));
      }, 400);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple = {
        id: Date.now(),
        x: e.pageX,
        y: e.pageY,
        timestamp: Date.now()
      };
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const setMagneticTargetForElement = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const radius = Math.max(rect.width, rect.height) / 2 + 70; // 50px buffer for stronger effect
    
    setMagneticTarget({ x: centerX, y: centerY, radius });
  };

  const clearMagneticTarget = () => {
    setMagneticTarget(null);
  };

  // Calculate magnetic position
  const getMagneticPosition = () => {
    if (!magneticTarget) return mousePosition;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - magneticTarget.x, 2) + 
      Math.pow(mousePosition.y - magneticTarget.y, 2)
    );
    
    if (distance <= magneticTarget.radius) {
      const strength = 1 - (distance / magneticTarget.radius);
      const magneticX = mousePosition.x + (magneticTarget.x - mousePosition.x) * strength * 0.95;
      const magneticY = mousePosition.y + (magneticTarget.y - mousePosition.y) * strength * 0.95;
      return { x: magneticX, y: magneticY };
    }
    
    return mousePosition;
  };

  return {
    mousePosition,
    isHovering,
    setIsHovering,
    ripples,
    trail,
    setMagneticTargetForElement,
    clearMagneticTarget,
    getMagneticPosition
  };
} 