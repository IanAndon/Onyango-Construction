"use client";

import { useState, useEffect, useRef } from "react";

// Parses "5+", "98%", "200+" into { number: 5, suffix: "+" }
function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: value };
  return { number: parseInt(match[1], 10), suffix: match[2] || "" };
}

const DURATION_MS = 1800;
const TICK_MS = 16; // ~60fps

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

type AnimatedCounterProps = {
  value: string;
  label: string;
  className?: string;
  numberClassName?: string;
};

export default function AnimatedCounter({
  value,
  label,
  className = "",
  numberClassName = "",
}: AnimatedCounterProps) {
  const { number: target, suffix } = parseStatValue(value);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (target === 0 || hasAnimated) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        setHasAnimated(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || target === 0) return;

    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(target);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [hasAnimated, target]);

  return (
    <div ref={ref} className={className}>
      <p className={`font-bold text-accent ${numberClassName}`}>
        {displayValue}
        {suffix}
      </p>
      <p className="text-gray-400 text-sm font-medium mt-1">{label}</p>
    </div>
  );
}
