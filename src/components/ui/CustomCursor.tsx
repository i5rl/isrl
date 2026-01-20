"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [previousPosition, setPreviousPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isExpandMode, setIsExpandMode] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPreviousPosition(mousePosition);
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calculate velocity for wobble effect
      const deltaX = e.clientX - mousePosition.x;
      const deltaY = e.clientY - mousePosition.y;
      const velocity = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Apply subtle rotation based on movement direction and velocity
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const wobbleIntensity = Math.min(velocity * 0.15, 8); // Reduced intensity and max rotation
      setRotation(
        angle * 0.05 + wobbleIntensity * Math.sin(Date.now() * 0.005),
      ); // Slower wobble frequency
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      const isExpandTarget =
        target.classList.contains("cursor-expand") ||
        target.closest(".cursor-expand");

      setIsHovering(isClickable);
      setIsExpandMode(!!isExpandTarget);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-5 h-5 bg-white pointer-events-none z-[10000] transition-transform duration-700 ease-out"
      style={{
        transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px) rotate(${45 + rotation}deg) ${
          isExpandMode ? "scale(8)" : isHovering ? "scale(2.5)" : "scale(1)"
        }`,
        mixBlendMode: "difference",
      }}
    />
  );
}
