"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CLICKS_TO_JITTER = 6;
const JITTER_DURATION = 2000;
const MAX_ROTATION = 25;
const JITTER_SCALE = 1.15;

// Circle easing: starts fast, ends slow
const CIRCLE_EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

interface IntroAnimationProps {
  onComplete: () => void;
  onRevealPage: () => void;
  onMusicStart: (audio: HTMLAudioElement) => void;
}

export default function IntroAnimation({ onComplete, onRevealPage, onMusicStart }: IntroAnimationProps) {
  const [entered, setEntered] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [direction, setDirection] = useState(1);
  const [scale, setScale] = useState(1);
  const [straightening, setStraightening] = useState(false);
  const [jittering, setJittering] = useState(false);
  const [circleStage, setCircleStage] = useState(0); // 0=none, 1=lime, 2=pink, 3=gold, 4=reveal, 5=done
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const startCircles = useCallback(() => {
    setJittering(false);
    // Lime
    setCircleStage(1);
    // Pink (starts when lime is ~20% expanded)
    setTimeout(() => setCircleStage(2), 300);
    // Gold (starts when pink is ~20% expanded)
    setTimeout(() => setCircleStage(3), 600);
    // Page reveal (mask circle)
    setTimeout(() => {
      setCircleStage(4);
      onRevealPage();
    }, 900);
    // Done
    setTimeout(() => {
      setCircleStage(5);
      onComplete();
    }, 2400);
  }, [onComplete, onRevealPage]);

  const playMusic = useCallback(() => {
    const audio = new Audio("/audio/final-crazy.mp3");
    audio.volume = 0.6;
    audio.play().catch(() => {});
    audioRef.current = audio;
    onMusicStart(audio);
  }, [onMusicStart]);

  const handleClick = () => {
    if (straightening || jittering || circleStage > 0) return;

    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= CLICKS_TO_JITTER) {
      playMusic();
      setStraightening(true);
      setRotation(0);
      setScale(JITTER_SCALE);
      setTimeout(() => {
        setStraightening(false);
        setJittering(true);
        setTimeout(() => startCircles(), JITTER_DURATION);
      }, 400);
    } else {
      const intensity = 10 + newClicks * 3;
      const angle = intensity * direction;
      setRotation(Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, angle)));
      setDirection((d) => d * -1);
      setScale(1 + newClicks * 0.02);
      setTimeout(() => setScale(1), 200);
    }
  };

  const showLogo = entered && circleStage < 5;

  return (
    <div
      className={`fixed inset-0 z-100 flex cursor-pointer items-center justify-center bg-[#4e55e0] ${
        circleStage >= 4 ? "pointer-events-none" : ""
      }`}
      onClick={handleClick}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[120px] transition-all duration-1000 ${
            entered ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>

      {/* Logo */}
      <div
        className="relative z-10"
        style={{
          transform: showLogo
            ? `translateY(0) rotate(${rotation}deg) scale(${scale})`
            : "translateY(100vh) rotate(0deg) scale(1)",
          opacity: showLogo ? 1 : 0,
          transition:
            jittering
              ? "none"
              : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease-out",
          animation: jittering ? "jitter 300ms infinite ease-in-out" : "none",
        }}
      >
        <Image
          src="/hype-logo.png"
          alt="Hype logo"
          width={180}
          height={180}
          priority
          draggable={false}
          className="h-28! w-28! select-none sm:h-44! sm:w-44!"
        />
      </div>

      {/* Lime circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime"
        style={{
          width: circleStage >= 1 ? "300vmax" : "0px",
          height: circleStage >= 1 ? "300vmax" : "0px",
          transition: `width 1.4s ${CIRCLE_EASING}, height 1.4s ${CIRCLE_EASING}`,
        }}
      />
      {/* Pink circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-25 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink"
        style={{
          width: circleStage >= 2 ? "300vmax" : "0px",
          height: circleStage >= 2 ? "300vmax" : "0px",
          transition: `width 1.4s ${CIRCLE_EASING}, height 1.4s ${CIRCLE_EASING}`,
        }}
      />
      {/* Gold circle */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold"
        style={{
          width: circleStage >= 3 ? "300vmax" : "0px",
          height: circleStage >= 3 ? "300vmax" : "0px",
          transition: `width 1.4s ${CIRCLE_EASING}, height 1.4s ${CIRCLE_EASING}`,
        }}
      />

      {/* Hint text */}
      <p
        className={`absolute bottom-16 z-10 text-sm text-white/50 transition-all duration-700 ${
          entered && clicks === 0 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        click the logo
      </p>

      <style jsx>{`
        @keyframes jitter {
          0%   { transform: translateY(0) rotate(0deg) scale(${JITTER_SCALE}) translate(0px, 0px); }
          7%   { transform: translateY(0) rotate(4deg) scale(${JITTER_SCALE * 1.02}) translate(-8px, 5px); }
          15%  { transform: translateY(0) rotate(-6deg) scale(${JITTER_SCALE * 0.97}) translate(10px, -3px); }
          22%  { transform: translateY(0) rotate(2deg) scale(${JITTER_SCALE * 1.04}) translate(-4px, -9px); }
          30%  { transform: translateY(0) rotate(-5deg) scale(${JITTER_SCALE}) translate(9px, 2px); }
          38%  { transform: translateY(0) rotate(7deg) scale(${JITTER_SCALE * 0.96}) translate(-10px, 7px); }
          45%  { transform: translateY(0) rotate(-3deg) scale(${JITTER_SCALE * 1.05}) translate(6px, -10px); }
          53%  { transform: translateY(0) rotate(5deg) scale(${JITTER_SCALE * 0.98}) translate(-9px, -4px); }
          62%  { transform: translateY(0) rotate(-7deg) scale(${JITTER_SCALE * 1.03}) translate(7px, 8px); }
          70%  { transform: translateY(0) rotate(3deg) scale(${JITTER_SCALE * 0.97}) translate(-6px, -7px); }
          78%  { transform: translateY(0) rotate(-4deg) scale(${JITTER_SCALE * 1.04}) translate(10px, 4px); }
          87%  { transform: translateY(0) rotate(6deg) scale(${JITTER_SCALE * 0.99}) translate(-3px, -6px); }
          100% { transform: translateY(0) rotate(0deg) scale(${JITTER_SCALE}) translate(0px, 0px); }
        }
      `}</style>
    </div>
  );
}
