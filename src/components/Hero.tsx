"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import LogoBackground from "./LogoBackground";

const videos = [
  "/herosection/heroview/hero-2.mp4",
  "/herosection/heroview/hero-1.mp4",
];

const FADE_MS = 600;

export default function Hero({ pageRevealed = false }: { pageRevealed?: boolean }) {
  // 0 = first video active, 1 = second video active
  const [active, setActive] = useState(0);
  const fadingRef = useRef(false);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  // Staggered entrance: logos → phone → text
  const [showLogos, setShowLogos] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showText, setShowText] = useState(false);
  // Cursor-reactive logos
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Start crossfade before active video ends
  const handleTimeUpdate = (index: number) => {
    if (index !== active || fadingRef.current) return;
    const v = videoRefs[index].current;
    if (!v || !v.duration) return;
    const remaining = v.duration - v.currentTime;
    if (remaining > 0 && remaining <= FADE_MS / 1000) {
      fadingRef.current = true;
      const nextIdx = (index + 1) % videos.length;
      const nv = videoRefs[nextIdx].current;
      if (nv) {
        nv.currentTime = 0;
        nv.play().catch(() => {});
      }
      // Swap active after fade
      setTimeout(() => {
        setActive(nextIdx);
        fadingRef.current = false;
      }, FADE_MS);
    }
  };

  // Play first video on mount
  useEffect(() => {
    const v = videoRefs[0].current;
    if (v) v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!pageRevealed) return;
    const t1 = setTimeout(() => setShowLogos(true), 300);
    const t2 = setTimeout(() => setShowPhone(true), 900);
    const t3 = setTimeout(() => setShowText(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [pageRevealed]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-8 sm:px-6 sm:pt-20 sm:pb-10"
      onMouseMove={handleMouseMove}
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-48 w-48 -translate-x-1/2 rounded-full bg-pink/20 blur-[80px] sm:h-96 sm:w-96 sm:blur-[128px]" />
        <div className="absolute right-1/4 top-1/3 h-36 w-36 rounded-full bg-lime/15 blur-3xl sm:h-72 sm:w-72 sm:blur-[96px]" />
        <div className="absolute left-1/4 top-1/2 h-32 w-32 rounded-full bg-gold/10 blur-3xl sm:h-64 sm:w-64 sm:blur-[96px]" />
      </div>

      {/* Desktop: Lamp shape with logos extending to upper half (md+) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 hidden md:block">
        <div
          className="relative mx-auto overflow-hidden"
          style={{ height: "92vh", clipPath: "polygon(30% 100%, 70% 100%, 85% 0%, 15% 0%)" }}
        >
          {/* Gradient fill — only at the bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-lime/30 via-lime/10 to-transparent" />
          {/* Scattered logos */}
          <LogoBackground animate={showLogos} mouseX={mousePos.x} mouseY={mousePos.y} />
        </div>
        {/* Lime glow line at bottom */}
        <div
          className="absolute bottom-0 left-1/2 h-1 -translate-x-1/2 rounded-full bg-lime/70 shadow-[0_0_20px_4px_rgba(184,235,108,0.5)]"
          style={{ width: "40%" }}
        />
      </div>

      {/* Mobile: Full background logos (<md) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:hidden">
        <LogoBackground animate={showLogos} mouseX={mousePos.x} mouseY={mousePos.y} mobile />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-center md:justify-center md:gap-36 lg:gap-52 xl:gap-64">
        {/* Left text */}
        <div className={`hidden transition-all duration-1000 ease-out md:flex md:flex-1 md:flex-col md:items-end md:text-right ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl xl:text-7xl">
            Build Better
          </h2>
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl xl:text-7xl">
            Habits
          </h2>
          <p className="mt-4 max-w-xs text-base text-muted lg:text-lg">
            The habit tracker that actually keeps you going. Set goals and stay consistent.
          </p>
          <div className="mt-6">
            <a
              href="#cta"
              className="whitespace-nowrap rounded-full bg-lime px-6 py-3 text-sm font-semibold text-accent transition-opacity hover:opacity-90 lg:px-8 lg:py-3.5 lg:text-base"
            >
              Download Free
            </a>
          </div>
        </div>

        {/* Phone group — center */}
        <div className={`relative shrink-0 transition-transform duration-1000 ease-out ${
          showPhone ? "translate-y-0" : "translate-y-[120%]"
        }`}>
          {/* Left side phone (behind, perspective) */}
          <div
            className="absolute -left-28 top-4 z-0 hidden sm:-left-32 md:-left-40 md:block lg:-left-48"
            style={{ perspective: "800px" }}
          >
            <div
              className="rounded-[2rem] border-[5px] border-[#2a2a2a] bg-black p-0.5 shadow-xl shadow-black/40 sm:rounded-[2.5rem] sm:border-[6px] sm:p-0.75"
              style={{ transform: "rotateY(25deg)" }}
            >
              <div className="overflow-hidden rounded-[1.6rem] bg-black sm:rounded-[2rem]">
                <Image
                  src="/herosection/screen-left.jpeg"
                  alt="App menu screen"
                  width={266}
                  height={560}
                  className="h-[440px] w-[210px] object-cover sm:h-[480px] sm:w-[228px] md:h-[480px] md:w-[228px]"
                />
              </div>
            </div>
          </div>

          {/* Right side phone (behind, perspective) */}
          <div
            className="absolute -right-28 top-4 z-0 hidden sm:-right-32 md:-right-40 md:block lg:-right-48"
            style={{ perspective: "800px" }}
          >
            <div
              className="rounded-[2rem] border-[5px] border-[#2a2a2a] bg-black p-0.5 shadow-xl shadow-black/40 sm:rounded-[2.5rem] sm:border-[6px] sm:p-0.75"
              style={{ transform: "rotateY(-25deg)" }}
            >
              <div className="overflow-hidden rounded-[1.6rem] bg-black sm:rounded-[2rem]">
                <Image
                  src="/herosection/screen-right.jpeg"
                  alt="Habit details screen"
                  width={266}
                  height={560}
                  className="h-[440px] w-[210px] object-cover sm:h-[480px] sm:w-[228px] md:h-[480px] md:w-[228px]"
                />
              </div>
            </div>
          </div>

          {/* Outer glow */}
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-lime/10 blur-2xl" />

          {/* Main phone body */}
          <div className="relative z-10 rounded-[2rem] border-[5px] border-[#2a2a2a] bg-black p-[2px] shadow-2xl shadow-black/60 sm:rounded-[2.5rem] sm:border-[6px] sm:p-[3px]">
            {/* Inner bezel */}
            <div className="relative overflow-hidden rounded-[1.6rem] bg-black sm:rounded-[2rem]">
              {/* Status bar area with punch-hole camera */}
              <div className="absolute left-0 right-0 top-0 z-20 flex h-6 items-center justify-center sm:h-7">
                <div className="h-2 w-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] sm:h-2.5 sm:w-2.5" />
              </div>

              {/* Video container */}
              <div className="relative h-[440px] w-[210px] sm:h-[480px] sm:w-[228px] md:h-[480px] md:w-[228px]">
                {videos.map((src, i) => (
                  <video
                    key={i}
                    ref={videoRefs[i]}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-600 ${
                      active === i ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    src={src}
                    muted
                    playsInline
                    onTimeUpdate={() => handleTimeUpdate(i)}
                  />
                ))}

              </div>

              {/* Bottom nav bar hint */}
              <div className="flex h-4 items-center justify-center bg-black sm:h-5">
                <div className="h-1 w-20 rounded-full bg-white/20 sm:w-24" />
              </div>
            </div>
          </div>

          {/* Side buttons (main phone) */}
          <div className="absolute -right-2.5 top-24 z-10 h-10 w-1 rounded-r-sm bg-[#2a2a2a] sm:-right-2.5 sm:top-28 sm:h-12" />
          <div className="absolute -left-2.5 top-20 z-10 h-7 w-1 rounded-l-sm bg-[#2a2a2a] sm:-left-2.5 sm:top-24 sm:h-8" />
          <div className="absolute -left-2.5 top-32 z-10 h-7 w-1 rounded-l-sm bg-[#2a2a2a] sm:-left-2.5 sm:top-36 sm:h-8" />
        </div>

        {/* Right text */}
        <div className={`hidden transition-all duration-1000 ease-out md:flex md:flex-1 md:flex-col md:items-start md:text-left ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
            <span className="text-white">with </span>
            <span className="font-obviously italic text-lime">HYPE!</span>
          </h2>

          {/* Profile reviews */}
          <div className="mt-6 flex flex-col gap-4">
            {/* Stacked avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-accent bg-linear-to-br from-pink to-purple lg:h-12 lg:w-12" />
                <div className="h-10 w-10 rounded-full border-2 border-accent bg-linear-to-br from-lime to-emerald-400 lg:h-12 lg:w-12" />
                <div className="h-10 w-10 rounded-full border-2 border-accent bg-linear-to-br from-gold to-orange-400 lg:h-12 lg:w-12" />
                <div className="h-10 w-10 rounded-full border-2 border-accent bg-linear-to-br from-blue-400 to-indigo-500 lg:h-12 lg:w-12" />
              </div>
              <span className="ml-3 text-sm font-medium text-white/80 lg:text-base">
                2k+ users
              </span>
            </div>
            {/* Star rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-gold lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-white/60 lg:text-base">4.9</span>
            </div>
            {/* Review quote */}
            <p className="max-w-xs text-sm leading-relaxed text-muted italic lg:text-base">
              &ldquo;This app completely changed my routine. I&apos;ve never been this consistent!&rdquo;
            </p>
          </div>
        </div>

        {/* Mobile text (shown below phone on small screens) */}
        <div className={`text-center transition-all duration-1000 ease-out md:hidden ${
          showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Build Better Habits with{" "}
            <span className="font-obviously italic text-lime">HYPE!</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xs text-sm text-muted sm:mt-4 sm:max-w-md sm:text-base">
            The habit tracker that actually keeps you going. Set goals and stay consistent.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="#cta"
              className="rounded-full bg-lime px-7 py-3 text-sm font-semibold text-accent transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Download Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
