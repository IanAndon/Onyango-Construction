"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/appointment", label: "Appointment" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isSticky ? "bg-primary-dark/95 shadow-lg backdrop-blur-sm" : "bg-primary-dark"
      }`}
      style={{ paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}
    >
      <nav className="container-wide px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-3 min-w-0">
          {/* Logo / Company name, truncated on very small screens */}
          <Link
            href="/"
            className="text-base sm:text-xl font-semibold text-white hover:text-accent transition-colors duration-200 truncate min-w-0"
          >
            Onyango Construction
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 shrink-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/appointment"
                className="inline-flex items-center px-3.5 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-primary-dark"
              >
                Request Appointment
              </Link>
            </li>
          </ul>

          {/* Mobile menu button with 44px minimum touch target */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 -mr-2 text-white hover:bg-primary-light rounded-lg transition-colors touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav dropdown as a full-height overlay on small screens, with touch-friendly links */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in border-t border-primary-light pt-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-1 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-accent rounded-full min-h-[44px] w-full sm:w-auto"
                >
                  Request Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
