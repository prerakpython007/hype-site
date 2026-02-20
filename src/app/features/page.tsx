"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const allFeatures = [
  {
    title: "HabitForge",
    description:
      "Build habits effortlessly with full-length tracking that follows your entire journey. From day one to day thousand, every step is captured and celebrated. Set custom frequencies, track streaks, and watch your consistency grow with beautiful visual progress indicators.",
    color: "gold" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    highlights: ["Full-length habit tracking", "Visual streak counters", "Custom habit frequencies", "Milestone celebrations"],
  },
  {
    title: "Journalling",
    description:
      "Express how you truly feel. Our journalling captures your real emotions and mood alongside your habits, giving you deeper self-awareness over time. Reflect on your day, tag your feelings, and discover patterns between your mood and your habits.",
    color: "lime" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    highlights: ["Mood & emotion tagging", "Daily reflection prompts", "Mood-habit pattern insights", "Private & secure entries"],
  },
  {
    title: "CrushList",
    description:
      "Turn your goals into actionable steps. Create, organize, and crush your daily to-do lists right alongside your habits — all in one place. Prioritize tasks, set deadlines, and experience the satisfaction of checking things off as you go.",
    color: "pink" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlights: ["Daily task management", "Priority levels & deadlines", "Habit-linked tasks", "Satisfying check-offs"],
  },
  {
    title: "Smart Reminders",
    description:
      "Never miss a habit again. Intelligent reminders that adapt to your schedule and nudge you at the perfect time. Our system learns your patterns and sends reminders when you're most likely to complete your habit.",
    color: "gold" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    highlights: ["Adaptive scheduling", "Location-based triggers", "Custom notification sounds", "Do Not Disturb mode"],
  },
  {
    title: "Community HYPE!",
    description:
      "Join a community that keeps you accountable. Share progress, cheer others on, and get hyped by your crew. Connect with like-minded people who understand that building habits is a team sport.",
    color: "lime" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    highlights: ["Group challenges", "Social feed & reactions", "Accountability partners", "Community leaderboards"],
  },
  {
    title: "Progress Analytics",
    description:
      "Beautiful charts and insights that show your growth over time. See weekly, monthly, and all-time habit stats. Understand your patterns with detailed breakdowns and visualize your journey from day one.",
    color: "pink" as const,
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    highlights: ["Weekly & monthly reports", "Habit heatmaps", "Completion rate graphs", "Personal best tracking"],
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
    dot: "bg-gold group-hover:bg-accent",
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
    dot: "bg-lime group-hover:bg-accent",
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
    dot: "bg-pink group-hover:bg-accent",
  },
};

export default function FeaturesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setEntered(true), 1400);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="min-h-screen bg-[#4e55e0]">
      {/* Navigation bar */}
      <nav className="fixed top-0 z-50 w-full bg-[#4e55e0]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/hype-logo.png" alt="Hype logo" width={56} height={56} />
            <span className="font-obviously text-xl font-bold italic text-lime">HYPE!</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      <div ref={sectionRef} className="px-6 pt-32 pb-24 sm:pt-36 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
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

          {/* Features Grid */}
          <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {allFeatures.map((feature, i) => {
              const colors = colorMap[feature.color];
              return (
                <div
                  key={feature.title}
                  className={`group relative rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.bg} ${colors.hoverBg} p-6 transition-all duration-300 ease-out sm:p-8 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: visible && !entered ? `${300 + i * 100}ms` : "0ms" }}
                >
                  <div>
                    {/* Icon */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.iconBg} ${colors.text} ${colors.hoverText} border ${colors.iconBorder} transition-colors duration-300`}>
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-accent/70 sm:text-base">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-5 space-y-2.5">
                      {feature.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-300 group-hover:text-accent/80">
                          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot} transition-colors duration-300`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={`mt-20 text-center transition-all duration-700 ease-out sm:mt-24 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: visible && !entered ? "1000ms" : "0ms" }}
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to get <span className="font-obviously italic text-lime">HYPED?</span>
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
      </div>
    </div>
  );
}
