"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const INTERVAL_MS = 5000;

type Slide = { src: string; alt: string };

type Props = { slides: readonly Slide[]; variant?: "card" | "background" };

export default function HeroSlideshow({ slides, variant = "card" }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  if (slides.length === 0) return null;

  const isBackground = variant === "background";

  return (
    <div
      className={
        isBackground
          ? "absolute inset-0 w-full h-full overflow-hidden"
          : "relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
      }
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === activeIndex ? 1 : 0,
            zIndex: i === activeIndex ? 1 : 0,
          }}
          aria-hidden={i !== activeIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes={isBackground ? "100vw" : "(max-width: 1024px) 100vw, 50vw"}
            priority={i === 0}
          />
        </div>
      ))}
      {/* Increased left gradient: wider and stronger so text sits in dark area */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: "linear-gradient(to right, rgb(15,23,42) 0%, rgba(15,23,42,0.95) 25%, rgba(15,23,42,0.75) 45%, rgba(15,23,42,0.35) 65%, transparent 85%)",
        }}
      />
      {/* Subtle accent tint on left edge */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 50%)",
        }}
      />
      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[3]" aria-label="Slide indicators">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 touch-manipulation ${
                i === activeIndex ? "bg-accent scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}
