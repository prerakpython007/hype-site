"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "./AppProvider";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Get Started", href: "/#cta" },
];

type Stage = "closed" | "black" | "lime" | "items" | "closing-items" | "closing-lime" | "closing-black";

export default function Navbar() {
  const { audio, introDone, revealPage } = useApp();
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("closed");
  const [muted, setMuted] = useState(false);

  const showNavbar = introDone || revealPage;

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
    setStage("closing-items");
    setTimeout(() => setStage("closing-lime"), 300);
    setTimeout(() => setStage("closing-black"), 700);
    setTimeout(() => setStage("closed"), 1200);
  }, []);

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
      <nav className={`fixed top-0 z-300 w-full bg-transparent transition-opacity duration-500 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image src="/hype-logo.png" alt="Hype logo" width={72} height={72} />
          </Link>

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
        className={`fixed inset-0 z-250 bg-black transition-transform duration-500 ease-in-out ${
          isBlackVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      {/* Layer 2: Lime */}
      <div
        className={`fixed inset-0 z-251 bg-lime transition-transform duration-500 ease-in-out ${
          isLimeVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      {/* Ticker keyframes */}
      <style>{`
        @keyframes ticker-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Layer 3: Nav items */}
      <div
        className={`fixed inset-0 z-252 flex flex-col justify-center gap-3 overflow-hidden px-0 py-16 sm:gap-4 sm:py-16 md:gap-0 md:py-24 lg:py-28 ${
          isLimeVisible ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => {
          const evenRow = i % 2 === 0;
          const sideCount = 10;
          const sides = Array.from({ length: sideCount }, (_, j) => {
            const isLimeBg = evenRow ? j % 2 === 0 : j % 2 !== 0;
            return isLimeBg
              ? "bg-lime text-black group-hover:bg-black group-hover:text-lime"
              : "bg-black text-lime group-hover:bg-lime group-hover:text-black";
          });
          const speed = 80 + i * 10;

          const renderRects = (rects: string[]) =>
            [...rects, ...rects].map((bg, j) => (
              <span
                key={j}
                className={`flex shrink-0 items-center justify-center rounded-lg px-3 py-3 text-4xl font-bold uppercase tracking-tighter transition-colors duration-300 sm:rounded-xl sm:px-4 sm:py-4 sm:text-5xl sm:tracking-tight md:rounded-2xl md:px-6 md:py-0 md:text-6xl lg:px-10 lg:text-8xl ${bg}`}
              >
                {link.label}
              </span>
            ));

          return (
            <div
              key={link.label}
              className={`md:flex-1 transition-all duration-500 ease-out ${
                areItemsVisible
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-16 opacity-0"
              }`}
              style={{
                transitionDelay: areItemsVisible
                  ? `${i * 100}ms`
                  : `${(navLinks.length - 1 - i) * 60}ms`,
              }}
            >
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="group flex w-full items-center justify-center md:h-full md:items-stretch"
              >
                {/* Left ticker */}
                <div className="flex flex-1 overflow-hidden">
                  <div
                    className="flex items-center gap-1.5 sm:gap-2 md:h-full md:items-stretch md:gap-2"
                    style={{
                      animation: `${evenRow ? "ticker-left" : "ticker-right"} ${speed}s linear infinite`,
                    }}
                  >
                    {renderRects(sides)}
                  </div>
                </div>

                {/* Center */}
                <span className="z-10 flex w-64 shrink-0 items-center justify-center whitespace-nowrap py-3 text-4xl font-bold uppercase tracking-tighter text-black transition-colors duration-300 group-hover:bg-black group-hover:text-lime sm:w-80 sm:py-4 sm:text-5xl sm:tracking-tight md:w-md md:py-0 md:text-6xl lg:w-xl lg:text-8xl">
                  {link.label}
                </span>

                {/* Right ticker */}
                <div className="flex flex-1 overflow-hidden">
                  <div
                    className="flex items-center gap-1.5 sm:gap-2 md:h-full md:items-stretch md:gap-2"
                    style={{
                      animation: `${evenRow ? "ticker-right" : "ticker-left"} ${speed}s linear infinite`,
                    }}
                  >
                    {renderRects(sides)}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
