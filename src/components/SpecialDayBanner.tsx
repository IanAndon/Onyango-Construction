"use client";

import { useState, useEffect } from "react";
import { getSpecialDayForDate } from "@/lib/specialDays";

const BANNER_STORAGE_KEY = "onyango-special-day-banner-dismissed";

export default function SpecialDayBanner() {
  const [mounted, setMounted] = useState(false);
  const [specialDay, setSpecialDay] = useState<{ name: string; message: string } | null>(null);
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid flash

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const today = new Date();
    const day = getSpecialDayForDate(today);
    if (day) {
      const dismissedAt = sessionStorage.getItem(BANNER_STORAGE_KEY);
      const todayKey = today.toDateString();
      if (dismissedAt !== todayKey) {
        setSpecialDay({ name: day.name, message: day.message });
        setDismissed(false);
      }
    } else {
      setDismissed(true);
    }
  }, [mounted]);

  const handleDismiss = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(BANNER_STORAGE_KEY, new Date().toDateString());
    }
    setDismissed(true);
  };

  if (dismissed || !specialDay) return null;

  return (
    <div
      role="banner"
      className="relative w-full bg-primary-dark text-white py-3 px-4 sm:py-2.5 pr-12 sm:pr-14 pl-4 text-center text-xs sm:text-sm font-medium min-w-0 overflow-hidden"
      aria-label={`Special day: ${specialDay.name}`}
    >
      <span className="inline-flex flex-wrap items-center justify-center gap-2">
        <span aria-hidden className="text-accent">✦</span>
        <span className="break-words">{specialDay.message}</span>
        <span aria-hidden className="text-accent">✦</span>
      </span>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/15 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
