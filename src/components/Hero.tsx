export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-pink/20 blur-[128px]" />
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-lime/15 blur-[96px]" />
        <div className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-gold/10 blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/10 px-4 py-1.5 text-sm text-white">
          <span className="h-2 w-2 rounded-full bg-lime" />
          Available on iOS & Android
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build Better Habits with{" "}
          <span className="text-lime">Hype</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          The habit tracker that actually keeps you going. Set goals, track
          streaks, and stay motivated with a community that hypes you up.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            className="w-full rounded-full bg-lime px-8 py-3.5 text-base font-semibold text-accent transition-opacity hover:opacity-90 sm:w-auto"
          >
            Download Free
          </a>
          <a
            href="#features"
            className="w-full rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            See Features
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {[
            { value: "10K+", label: "Active Users" },
            { value: "2M+", label: "Habits Tracked" },
            { value: "87%", label: "Streak Retention" },
            { value: "4.9/5", label: "App Store Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
