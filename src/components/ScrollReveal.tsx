"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

const directionMap: Record<Direction, string> = {
  up: "translateY(28px)",
  down: "translateY(-28px)",
  left: "translateX(28px)",
  right: "translateX(-28px)",
};

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay in ms before animation starts (for stagger) */
  delay?: number;
  /** Slide direction */
  direction?: Direction;
  /** Root margin for Intersection Observer */
  rootMargin?: string;
  /** Threshold 0–1 */
  threshold?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  rootMargin = "0px 0px -50px 0px",
  threshold = 0.08,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const initialTransform = directionMap[direction];
  const transitionDelay = delay > 0 ? `${delay}ms` : undefined;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : initialTransform,
        transition: "opacity 0.65s ease-out, transform 0.65s ease-out",
        transitionDelay,
      }}
    >
      {children}
    </div>
  );
}
