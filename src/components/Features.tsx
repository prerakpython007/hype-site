"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const topFeatures = [
  {
    number: "01",
    title: "HabitForge",
    description:
      "Build habits effortlessly with full-length tracking that follows your entire journey. From day one to day thousand, every step is captured and celebrated.",
    color: "gold" as const,
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Journalling",
    description:
      "Express how you truly feel. Our journalling captures your real emotions and mood alongside your habits, giving you deeper self-awareness over time.",
    color: "lime" as const,
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "CrushList",
    description:
      "Turn your goals into actionable steps. Create, organize, and crush your daily to-do lists right alongside your habits — all in one place.",
    color: "pink" as const,
    icon: (
      <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const colorMap = {
  gold: {
    bg: "bg-gold/10",
    hoverBg: "hover:bg-gold",
    border: "border-gold/30",
    hoverBorder: "hover:border-gold",
    text: "text-gold",
    hoverText: "group-hover:text-accent",
    iconBorder: "border-gold/30 group-hover:border-accent/20",
    iconBg: "bg-gold/10 group-hover:bg-accent/20",
    line: "bg-gold/40 group-hover:bg-accent/30",
  },
  lime: {
    bg: "bg-lime/10",
    hoverBg: "hover:bg-lime",
    border: "border-lime/30",
    hoverBorder: "hover:border-lime",
    text: "text-lime",
    hoverText: "group-hover:text-accent",
    iconBorder: "border-lime/30 group-hover:border-accent/20",
    iconBg: "bg-lime/10 group-hover:bg-accent/20",
    line: "bg-lime/40 group-hover:bg-accent/30",
  },
  pink: {
    bg: "bg-pink/10",
    hoverBg: "hover:bg-pink",
    border: "border-pink/30",
    hoverBorder: "hover:border-pink",
    text: "text-pink",
    hoverText: "group-hover:text-accent",
    iconBorder: "border-pink/30 group-hover:border-accent/20",
    iconBg: "bg-pink/10 group-hover:bg-accent/20",
    line: "bg-pink/40 group-hover:bg-accent/30",
  },
};

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setEntered(true), 1000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-lime/8 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-64 w-64 rounded-full bg-pink/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
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
          <p className="mt-4 text-base text-muted sm:text-lg">
            Powerful tools designed to help you build lasting habits and become
            the best version of yourself.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 flex flex-col gap-6 sm:mt-20 lg:gap-8">
          {topFeatures.map((feature, i) => {
            const colors = colorMap[feature.color];
            return (
              <div
                key={feature.number}
                className={`group relative rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.bg} ${colors.hoverBg} p-6 transition-all duration-300 ease-out sm:p-8 lg:p-10 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: visible && !entered ? `${300 + i * 150}ms` : "0ms" }}
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
                  {/* Number + Icon */}
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Large number */}
                    <span className={`font-obviously text-5xl font-bold italic ${colors.text} ${colors.hoverText} opacity-30 transition-colors duration-300 sm:text-6xl lg:text-7xl`}>
                      {feature.number}
                    </span>
                    {/* Icon circle */}
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.text} ${colors.hoverText} border ${colors.iconBorder} transition-colors duration-300 sm:h-16 sm:w-16`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Vertical separator (desktop) */}
                  <div className={`hidden sm:block sm:h-16 sm:w-px ${colors.line} transition-colors duration-300`} />

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl lg:text-3xl">
                      {feature.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-accent/70 sm:text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="hidden text-accent opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 lg:block">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 ease-out sm:mt-16 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: visible && !entered ? "800ms" : "0ms" }}
        >
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
