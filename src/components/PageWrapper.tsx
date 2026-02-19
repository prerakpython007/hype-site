"use client";

import { useState, useCallback } from "react";
import IntroAnimation from "./IntroAnimation";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";

export default function PageWrapper() {
  const [introDone, setIntroDone] = useState(false);
  const [revealPage, setRevealPage] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handleMusicStart = useCallback((audioEl: HTMLAudioElement) => {
    setAudio(audioEl);
  }, []);

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
          clipPath: revealPage
            ? "circle(150vmax at 50vw 50vh)"
            : "circle(0px at 50vw 50vh)",
          transition: revealPage
            ? "clip-path 1.4s cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >
        <Navbar audio={audio} />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
