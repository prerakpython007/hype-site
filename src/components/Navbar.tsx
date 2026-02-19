"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Get Started", href: "#cta" },
];

type Stage = "closed" | "black" | "lime" | "items" | "closing-items" | "closing-lime" | "closing-black";

interface NavbarProps {
  audio: HTMLAudioElement | null;
}

export default function Navbar({ audio }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("closed");
  const [muted, setMuted] = useState(false);

  const toggleMute = useCallback(() => {
    if (!audio) return;
    if (muted) {
      audio.volume = 0.6;
      setMuted(false);
    } else {
      audio.volume = 0;
      setMuted(true);
    }
  }, [audio, muted]);

  const handleClose = useCallback(() => {
    // Stage 1: items fade out
    setStage("closing-items");
    // Stage 2: lime slides up
    setTimeout(() => setStage("closing-lime"), 300);
    // Stage 3: black slides up
    setTimeout(() => setStage("closing-black"), 700);
    // Done
    setTimeout(() => setStage("closed"), 1200);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (stage !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [stage]);

  useEffect(() => {
    if (open) {
      // Opening: black -> lime -> items
      setStage("black");
      const t1 = setTimeout(() => setStage("lime"), 400);
      const t2 = setTimeout(() => setStage("items"), 800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [open]);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      handleClose();
    } else {
      setOpen(true);
    }
  };

  const handleLinkClick = () => {
    setOpen(false);
    handleClose();
  };

  const isBlackVisible =
    stage === "black" ||
    stage === "lime" ||
    stage === "items" ||
    stage === "closing-items" ||
    stage === "closing-lime" ||
    stage === "closing-black";

  const isLimeVisible =
    stage === "lime" ||
    stage === "items" ||
    stage === "closing-items" ||
    stage === "closing-lime";

  const areItemsVisible = stage === "items" || stage === "closing-items";

  const isOpen = stage !== "closed";

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <Image src="/hype-logo.png" alt="Hype logo" width={72} height={72} />
          </a>

          <div className="relative z-50 flex items-center gap-4">
            {/* Mute button */}
            {audio && (
              <button
                onClick={toggleMute}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                  isOpen ? "text-black hover:bg-black/10" : "text-white hover:bg-white/10"
                }`}
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            )}

            {/* Hamburger */}
            <button
              onClick={handleToggle}
              className="flex h-14 w-14 flex-col items-center justify-center gap-2"
              aria-label="Toggle menu"
            >
            <span
              className={`h-[3px] w-9 rounded-full transition-all duration-500 ease-in-out ${
                isOpen ? "translate-y-[11px] rotate-45 bg-black" : "bg-white"
              }`}
            />
            <span
              className={`h-[3px] w-9 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "scale-x-0 opacity-0 bg-black" : "bg-white"
              }`}
            />
            <span
              className={`h-[3px] w-9 rounded-full transition-all duration-500 ease-in-out ${
                isOpen ? "-translate-y-[11px] -rotate-45 bg-black" : "bg-white"
              }`}
            />
          </button>
          </div>
        </div>
      </nav>

      {/* Layer 1: Black */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out ${
          isBlackVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      {/* Layer 2: Lime */}
      <div
        className={`fixed inset-0 z-41 bg-lime transition-transform duration-500 ease-in-out ${
          isLimeVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      {/* Layer 3: Nav items */}
      <div
        className={`fixed inset-0 z-42 flex flex-col items-center justify-center gap-2 ${
          isLimeVisible ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={handleLinkClick}
            className="group relative overflow-hidden px-6 py-4"
          >
            <span
              className={`block text-5xl font-bold uppercase tracking-tight transition-all duration-500 ease-out sm:text-6xl lg:text-7xl ${
                areItemsVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-16 opacity-0"
              } text-black group-hover:text-white`}
              style={{
                transitionDelay: areItemsVisible
                  ? `${i * 100}ms`
                  : `${(navLinks.length - 1 - i) * 60}ms`,
              }}
            >
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
