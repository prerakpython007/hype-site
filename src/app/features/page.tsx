"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "HabitForge",
    description:
      "Build habits effortlessly with full-length tracking that follows your entire journey. From day one to day thousand, every step is captured and celebrated.",
    color: "gold" as const,
    highlights: [
      "Full-length habit tracking",
      "Visual streak counters",
      "Custom habit frequencies",
      "Milestone celebrations",
    ],
    mainScreen: "/herosection/screen-left.jpeg",
    floatingScreens: [
      "/herosection/screen-right.jpeg",
      "/herosection/screen-left.jpeg",
    ],
  },
  {
    title: "Journalling",
    description:
      "Express how you truly feel. Our journalling captures your real emotions and mood alongside your habits, giving you deeper self-awareness over time.",
    color: "lime" as const,
    highlights: [
      "Mood & emotion tagging",
      "Daily reflection prompts",
      "Mood-habit pattern insights",
      "Private & secure entries",
    ],
    mainScreen: "/herosection/screen-right.jpeg",
    floatingScreens: [
      "/herosection/screen-left.jpeg",
      "/herosection/screen-right.jpeg",
    ],
  },
  {
    title: "CrushList",
    description:
      "Turn your goals into actionable steps. Create, organize, and crush your daily to-do lists right alongside your habits — all in one place.",
    color: "pink" as const,
    highlights: [
      "Daily task management",
      "Priority levels & deadlines",
      "Habit-linked tasks",
      "Satisfying check-offs",
    ],
    mainScreen: "/herosection/screen-left.jpeg",
    floatingScreens: [
      "/herosection/screen-right.jpeg",
      "/herosection/screen-left.jpeg",
    ],
  },
];

const colorMap = {
  gold: {
    text: "text-gold",
    bg: "bg-gold",
    dot: "bg-gold",
    hex: "#f7cd63",
    tabActive: "bg-gold text-accent",
    tabInactive: "border-gold/30 text-gold hover:bg-gold/10",
  },
  lime: {
    text: "text-lime",
    bg: "bg-lime",
    dot: "bg-lime",
    hex: "#b8eb6c",
    tabActive: "bg-lime text-accent",
    tabInactive: "border-lime/30 text-lime hover:bg-lime/10",
  },
  pink: {
    text: "text-pink",
    bg: "bg-pink",
    dot: "bg-pink",
    hex: "#fc8fc6",
    tabActive: "bg-pink text-accent",
    tabInactive: "border-pink/30 text-pink hover:bg-pink/10",
  },
};

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);

  const switchTab = (index: number) => {
    if (index === activeTab || animating) return;
    setAnimating(true);
    setActiveTab(index);
    setTimeout(() => setAnimating(false), 500);
  };

  const active = features[activeTab];
  const colors = colorMap[active.color];

  return (
    <div className="min-h-screen pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Dynamic background glow */}
        <div className="pointer-events-none absolute inset-0 transition-all duration-700">
          <div
            className="absolute left-1/2 top-1/3 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px] transition-colors duration-700"
            style={{ backgroundColor: `${colors.hex}15` }}
          />
        </div>

        {/* Page Header */}
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-lime">
            All Features
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built to keep you{" "}
            <span className="font-obviously italic text-lime">HYPED!</span>
          </h1>
          <p className="mt-5 text-base text-muted sm:text-lg lg:text-xl">
            Explore every tool and feature designed to transform your daily
            routines into lasting habits.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="relative mt-12 flex justify-center gap-3 sm:gap-4">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            const isActive = activeTab === i;
            return (
              <button
                key={feature.title}
                onClick={() => switchTab(i)}
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 sm:px-8 sm:py-3.5 sm:text-base lg:px-10 lg:text-lg ${
                  isActive ? c.tabActive : c.tabInactive
                }`}
              >
                {feature.title}
              </button>
            );
          })}
        </div>

        {/* Showcase Area */}
        <div className="relative mt-14 sm:mt-20">
          <div className="relative rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-sm sm:p-12 lg:p-16">
            {/* Inner glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl transition-all duration-700"
              style={{
                background: `radial-gradient(ellipse at 65% 50%, ${colors.hex}0a, transparent 70%)`,
              }}
            />

            <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
              {/* Left: Text Content */}
              <div className="flex-1 order-2 lg:order-1">
                <div key={activeTab} className="animate-fadeSlideIn">
                  {/* Feature number */}
                  <span
                    className={`font-obviously text-7xl font-bold italic opacity-15 lg:text-9xl ${colors.text}`}
                  >
                    0{activeTab + 1}
                  </span>

                  {/* Title */}
                  <h2 className="mt-2 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                    {active.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
                    {active.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-8 space-y-4">
                    {active.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-base text-white/80 sm:text-lg"
                      >
                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full ${colors.dot}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Phone Showcase */}
              <div className="relative flex shrink-0 justify-center order-1 lg:order-2">
                <div
                  key={`phone-${activeTab}`}
                  className="relative animate-fadeSlideIn"
                >
                  {/* Floating screenshot - back left */}
                  <div
                    className="absolute -left-16 top-6 z-0 hidden xl:block"
                    style={{ transform: "rotate(-8deg)" }}
                  >
                    <div
                      className="rounded-2xl border border-white/10 p-0.5 shadow-xl transition-all duration-700"
                      style={{ boxShadow: `0 8px 32px ${colors.hex}15` }}
                    >
                      <Image
                        src={active.floatingScreens[0]}
                        alt="Feature preview"
                        width={140}
                        height={280}
                        className="h-56 w-28 rounded-xl object-cover opacity-50"
                      />
                    </div>
                  </div>

                  {/* Floating screenshot - back right */}
                  <div
                    className="absolute -right-16 top-10 z-0 hidden xl:block"
                    style={{ transform: "rotate(6deg)" }}
                  >
                    <div
                      className="rounded-2xl border border-white/10 p-0.5 shadow-xl transition-all duration-700"
                      style={{ boxShadow: `0 8px 32px ${colors.hex}15` }}
                    >
                      <Image
                        src={active.floatingScreens[1]}
                        alt="Feature preview"
                        width={140}
                        height={280}
                        className="h-56 w-28 rounded-xl object-cover opacity-50"
                      />
                    </div>
                  </div>

                  {/* Main phone glow */}
                  <div
                    className="pointer-events-none absolute -inset-10 rounded-[3rem] blur-3xl transition-colors duration-700"
                    style={{ backgroundColor: `${colors.hex}20` }}
                  />

                  {/* Main phone */}
                  <div className="relative z-10 rounded-4xl border-[5px] border-[#2a2a2a] bg-black p-0.5 shadow-2xl shadow-black/60 sm:rounded-[2.5rem] sm:border-[6px] sm:p-0.75">
                    <div className="relative overflow-hidden rounded-[1.6rem] bg-black sm:rounded-4xl">
                      {/* Camera notch */}
                      <div className="absolute left-0 right-0 top-0 z-20 flex h-6 items-center justify-center sm:h-7">
                        <div className="h-2 w-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333] sm:h-2.5 sm:w-2.5" />
                      </div>
                      {/* Screen */}
                      <Image
                        src={active.mainScreen}
                        alt={`${active.title} screenshot`}
                        width={260}
                        height={520}
                        className="h-110 w-55 object-cover sm:h-130 sm:w-65"
                      />
                      {/* Bottom bar */}
                      <div className="flex h-5 items-center justify-center bg-black sm:h-6">
                        <div className="h-1 w-24 rounded-full bg-white/20 sm:w-28" />
                      </div>
                    </div>
                  </div>

                  {/* Side buttons */}
                  <div className="absolute -right-2.5 top-28 z-10 h-12 w-1 rounded-r-sm bg-[#2a2a2a] sm:top-32 sm:h-14" />
                  <div className="absolute -left-2.5 top-24 z-10 h-8 w-1 rounded-l-sm bg-[#2a2a2a] sm:top-28 sm:h-10" />
                  <div className="absolute -left-2.5 top-36 z-10 h-8 w-1 rounded-l-sm bg-[#2a2a2a] sm:top-40 sm:h-10" />
                </div>
              </div>
            </div>

            {/* Bottom indicator dots */}
            <div className="mt-10 flex justify-center gap-2 sm:mt-12">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeTab === i
                      ? `w-10 ${colorMap[features[i].color].bg}`
                      : "w-4 bg-white/20 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-24 text-center sm:mt-32">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to get{" "}
            <span className="font-obviously italic text-lime">HYPED?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Download HYPE! for free and start building habits that stick.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/#cta"
              className="rounded-full bg-lime px-8 py-3.5 text-base font-semibold text-accent transition-opacity hover:opacity-90"
            >
              Download Free
            </Link>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-8 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out both;
        }
      `}</style>
    </div>
  );
}
