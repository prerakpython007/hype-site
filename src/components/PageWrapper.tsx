"use client";

import { useCallback } from "react";
import { useApp } from "./AppProvider";
import IntroAnimation from "./IntroAnimation";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

export default function PageWrapper() {
  const { introDone, revealPage, setIntroDone, setRevealPage, setAudio } = useApp();

  const handleMusicStart = useCallback((audioEl: HTMLAudioElement) => {
    setAudio(audioEl);
  }, [setAudio]);

  return (
    <>
      {!introDone && (
        <IntroAnimation
          onRevealPage={() => setRevealPage(true)}
          onComplete={() => setIntroDone(true)}
          onMusicStart={handleMusicStart}
        />
      )}

      <div
        className="relative z-200 min-h-screen bg-[#4e55e0]"
        style={{
          clipPath: introDone
            ? "none"
            : revealPage
              ? "circle(150vmax at 50vw 50vh)"
              : "circle(0px at 50vw 50vh)",
          transition: revealPage && !introDone
            ? "clip-path 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >
        <Hero pageRevealed={revealPage} />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </div>
    </>
  );
}
