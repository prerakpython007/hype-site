"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CYCLE_MS = 5000;

const features = [
  {
    title: "HabitForge",
    description:
      "Build habits effortlessly with full-length tracking that follows your entire journey. From day one to day thousand, every step is captured and celebrated.",
    color: "lime" as const,
    bentoImages: [
      { src: "/feature1/feature1.jpeg", alt: "Cycling habit with streak, weekly & goal progress, and monthly log" },
      { src: "/feature1/feature2.jpeg", alt: "Monthly log calendar view with completion tracking" },
      { src: "/feature1/feature3.jpeg", alt: "Reading habit details with streak and progress stats" },
    ],
    subFeatures: [
      { title: "Full-length Tracking", description: "Track from day one to day thousand.", screen: "" },
      { title: "Visual Streaks", description: "Beautiful streak counters.", screen: "" },
      { title: "Custom Frequencies", description: "Daily, weekly, or custom schedules.", screen: "" },
      { title: "Milestone Celebrations", description: "Celebrate at every checkpoint.", screen: "" },
    ],
  },
  {
    title: "Journalling",
    description:
      "Express how you truly feel. Our journalling captures your real emotions and mood alongside your habits, giving you deeper self-awareness over time.",
    color: "gold" as const,
    subFeatures: [
      {
        title: "Mood & Emotion Tagging",
        description: "Tag how you feel with intuitive emotion selectors that track your journey.",
        screen: "/herosection/screen-right.jpeg",
      },
      {
        title: "Daily Prompts",
        description: "Guided reflection prompts to express your thoughts clearly and deeply.",
        screen: "/herosection/screen-left.jpeg",
      },
      {
        title: "Pattern Insights",
        description: "Discover mood-habit patterns with intelligent analysis over time.",
        screen: "/herosection/screen-right.jpeg",
      },
      {
        title: "Private & Secure",
        description: "Encrypted entries — your thoughts stay completely private.",
        screen: "/herosection/screen-left.jpeg",
      },
    ],
  },
  {
    title: "CrushList",
    description:
      "Turn your goals into actionable steps. Create, organize, and crush your daily to-do lists right alongside your habits — all in one place.",
    color: "pink" as const,
    subFeatures: [
      {
        title: "Task Management",
        description: "Create, organize, and prioritize tasks with an intuitive interface.",
        screen: "/herosection/screen-left.jpeg",
      },
      {
        title: "Priority Levels",
        description: "Set levels and deadlines to stay focused on what matters most.",
        screen: "/herosection/screen-right.jpeg",
      },
      {
        title: "Habit-linked Tasks",
        description: "Connect tasks to habits for a seamless productivity flow.",
        screen: "/herosection/screen-left.jpeg",
      },
      {
        title: "Satisfying Check-offs",
        description: "The dopamine rush of checking off tasks with delightful animations.",
        screen: "/herosection/screen-right.jpeg",
      },
    ],
  },
];

const colorMap = {
  lime: {
    text: "text-lime",
    bg: "bg-lime",
    dot: "bg-lime",
    hex: "#b8eb6c",
    glow: "rgba(184,235,108,0.18)",
  },
  gold: {
    text: "text-gold",
    bg: "bg-gold",
    dot: "bg-gold",
    hex: "#f7cd63",
    glow: "rgba(247,205,99,0.18)",
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink",
    dot: "bg-pink",
    hex: "#fc8fc6",
    glow: "rgba(252,143,198,0.18)",
  },
};

function BentoFeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const colors = colorMap[feature.color];
  const images = feature.bentoImages!;

  return (
    <div className="sticky top-0" style={{ zIndex: index + 1 }}>
      <div
        className={`${colors.bg} flex h-screen flex-col px-6 py-6 sm:px-10 sm:py-10`}
        style={{ boxShadow: "0 -30px 60px rgba(0,0,0,0.4)" }}
      >
        <div className="relative flex flex-1 overflow-hidden rounded-4xl bg-[#4e55e0] sm:rounded-[3rem]">
          <div className="relative flex flex-1 items-center justify-center px-6 py-6 sm:px-10 sm:py-10 md:px-14 lg:px-16">
            {/* Layered Screenshot Showcase */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-20 rounded-full blur-3xl"
                style={{ backgroundColor: colors.glow }}
              />
              <div className="relative z-10 flex items-end justify-center">
                {/* Left phone — tilted */}
                <div
                  className="relative z-10 -mr-6 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-500 hover:z-30 hover:-translate-y-2 sm:-mr-8 sm:rounded-3xl"
                  style={{ transform: "rotate(-4deg)" }}
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={280}
                    height={600}
                    className="w-36 sm:w-44 lg:w-52"
                  />
                </div>
                {/* Center calendar — raised, on top */}
                <div
                  className="relative z-20 -mb-4 overflow-hidden rounded-2xl shadow-2xl shadow-black/60 ring-1 ring-white/15 transition-transform duration-500 hover:-translate-y-2 sm:-mb-6 sm:rounded-3xl"
                >
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    width={280}
                    height={280}
                    className="w-40 sm:w-48 lg:w-56"
                  />
                </div>
                {/* Right phone — tilted opposite */}
                <div
                  className="relative z-10 -ml-6 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-500 hover:z-30 hover:-translate-y-2 sm:-ml-8 sm:rounded-3xl"
                  style={{ transform: "rotate(4deg)" }}
                >
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    width={280}
                    height={600}
                    className="w-36 sm:w-44 lg:w-52"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  const [activeSub, setActiveSub] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const colors = colorMap[feature.color];
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSub((prev) => (prev + 1) % feature.subFeatures.length);
      setCycleKey((k) => k + 1);
    }, CYCLE_MS);
    return () => clearTimeout(timer);
  }, [activeSub, cycleKey, feature.subFeatures.length]);

  const handleSubClick = (i: number) => {
    setActiveSub(i);
    setCycleKey((k) => k + 1);
  };

  return (
    <div className="sticky top-0" style={{ zIndex: index + 1 }}>
      <div
        className={`${colors.bg} flex h-screen flex-col px-6 py-6 sm:px-10 sm:py-10`}
        style={{ boxShadow: "0 -30px 60px rgba(0,0,0,0.4)" }}
      >
        <div className="relative flex flex-1 overflow-hidden rounded-4xl bg-[#4e55e0] sm:rounded-[3rem]">
          <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10 sm:py-14 md:px-14 lg:px-20">
            <div
              className={`flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-14 lg:gap-20 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Phone with glow */}
              <div className="relative shrink-0">
                <div
                  className="pointer-events-none absolute -inset-14 rounded-full blur-3xl"
                  style={{ backgroundColor: colors.glow }}
                />
                <div className="relative z-10 rounded-[2.2rem] border-[5px] border-[#2a2a2a] bg-black p-0.5 shadow-2xl shadow-black/60 sm:rounded-[2.5rem] sm:border-[6px] sm:p-0.75">
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-black sm:rounded-4xl">
                    <div className="absolute left-0 right-0 top-0 z-20 flex h-6 items-center justify-center sm:h-7">
                      <div className="h-2 w-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] sm:h-2.5 sm:w-2.5" />
                    </div>
                    <div className="relative h-96 w-48 overflow-hidden sm:h-110 sm:w-55">
                      <Image
                        key={activeSub}
                        src={feature.subFeatures[activeSub].screen}
                        alt={`${feature.title} — ${feature.subFeatures[activeSub].title}`}
                        fill
                        className="object-cover animate-[screenfade_0.4s_ease-out]"
                      />
                    </div>
                    <div className="flex h-4 items-center justify-center bg-black sm:h-5">
                      <div className="h-1 w-20 rounded-full bg-white/20 sm:w-24" />
                    </div>
                  </div>
                </div>
                <div className="absolute -right-2.5 top-24 z-10 h-10 w-1 rounded-r-sm bg-[#2a2a2a] sm:top-28 sm:h-12" />
                <div className="absolute -left-2.5 top-20 z-10 h-7 w-1 rounded-l-sm bg-[#2a2a2a] sm:top-24 sm:h-8" />
                <div className="absolute -left-2.5 top-32 z-10 h-7 w-1 rounded-l-sm bg-[#2a2a2a] sm:top-36 sm:h-8" />
              </div>

              {/* Text content */}
              <div
                className={`flex-1 text-center ${
                  isEven ? "md:text-left" : "md:text-right"
                }`}
              >
                <span
                  className={`font-obviously text-7xl font-bold italic opacity-10 lg:text-9xl ${colors.text}`}
                >
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  {feature.title}
                </h3>
                <p
                  className={`mt-4 text-base leading-relaxed text-muted sm:text-lg lg:text-xl ${
                    isEven ? "md:max-w-lg" : "md:ml-auto md:max-w-lg"
                  }`}
                >
                  {feature.description}
                </p>

                {/* Sub-feature accordion */}
                <div
                  className={`mt-8 flex flex-col gap-2 ${
                    isEven
                      ? "items-center md:items-start"
                      : "items-center md:items-end"
                  }`}
                >
                  {feature.subFeatures.map((sub, i) => {
                    const isActive = activeSub === i;
                    return (
                      <button
                        key={sub.title}
                        onClick={() => handleSubClick(i)}
                        className={`relative w-full max-w-md overflow-hidden rounded-xl border text-left transition-all duration-400 ${
                          isActive
                            ? "border-white/15 bg-white/10"
                            : "border-white/5 bg-white/3 hover:bg-white/5 hover:border-white/10"
                        } ${isEven ? "" : "md:text-right"}`}
                      >
                        <div className="px-4 py-3 sm:px-5 sm:py-3.5">
                          <div
                            className={`flex items-center gap-3 ${
                              isEven ? "" : "md:flex-row-reverse"
                            }`}
                          >
                            <span
                              className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                                isActive
                                  ? `${colors.dot} scale-125`
                                  : "bg-white/20"
                              }`}
                            />
                            <h4
                              className={`text-sm font-semibold transition-colors duration-300 sm:text-base ${
                                isActive ? "text-white" : "text-white/40"
                              }`}
                            >
                              {sub.title}
                            </h4>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-400 ease-out ${
                              isActive
                                ? "mt-2 max-h-24 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p
                              className={`text-xs leading-relaxed text-white/50 sm:text-sm ${
                                isEven ? "pl-5" : "md:pr-5 md:pl-0 pl-5"
                              }`}
                            >
                              {sub.description}
                            </p>
                          </div>
                        </div>
                        {isActive && (
                          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-white/5">
                            <div
                              key={cycleKey}
                              className={`h-full ${colors.bg} animate-[progressFill_5s_linear]`}
                            />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  if ("bentoImages" in feature && feature.bentoImages) {
    return <BentoFeatureCard feature={feature as typeof features[0]} index={index} />;
  }
  return <PhoneFeatureCard feature={feature} index={index} />;
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.02 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef}>
      {/* Section Header */}
      <div
        className={`mx-auto mb-0 max-w-2xl px-6 py-16 text-center transition-all duration-700 ease-out sm:py-20 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-lime">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Everything you need to{" "}
          <span className="font-obviously italic text-lime">stay on track</span>
        </h2>
      </div>

      {/* Sticky stacking feature cards */}
      <div className="flex flex-col">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12 flex justify-center sm:mt-16">
        <Link
          href="/features"
          className="group relative inline-flex items-center gap-3 rounded-full border border-lime/40 bg-lime/10 px-8 py-4 text-base font-semibold text-lime transition-all duration-300 hover:border-lime/80 hover:bg-lime hover:text-accent sm:px-10 sm:text-lg"
        >
          View All Features
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes screenfade {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
