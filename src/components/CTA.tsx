export default function CTA() {
  return (
    <section id="cta" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-white/5">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/15 blur-[96px]" />
            <div className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-pink/15 blur-3xl" />
            <div className="absolute left-1/4 bottom-1/4 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
          </div>

          <div className="relative px-5 py-12 text-center sm:px-16 sm:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build better habits?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Join thousands of people already crushing their goals with <span className="font-obviously italic">HYPE!</span>
              Download for free and start your journey today.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="w-full rounded-full bg-lime px-8 py-3.5 text-base font-semibold text-accent transition-opacity hover:opacity-90 sm:w-auto"
              >
                Download for Free
              </a>
              <a
                href="#"
                className="w-full rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                View on App Store
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              Free forever. No ads. Premium features available for power users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
