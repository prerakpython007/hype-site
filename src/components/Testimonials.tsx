const testimonials = [
  {
    quote:
      "I've tried every habit app out there. HYPE! is the first one that actually made me stick with my morning routine for over 6 months.",
    name: "Sarah Chen",
    role: "Fitness Enthusiast",
    initials: "SC",
    avatarBg: "bg-lime",
  },
  {
    quote:
      "The streak system is addictive in the best way. I went from reading 0 books to finishing 2 a month. HYPE! just hits different.",
    name: "Marcus Johnson",
    role: "College Student",
    initials: "MJ",
    avatarBg: "bg-gold",
  },
  {
    quote:
      "The community feature is what sets HYPE! apart. Having people cheer you on when you complete a habit is genuinely motivating.",
    name: "Aisha Patel",
    role: "Wellness Coach",
    initials: "AP",
    avatarBg: "bg-pink",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-pink">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Loved by habit builders
          </h2>
          <p className="mt-4 text-lg text-muted">
            See what real users are saying about their HYPE! journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-border bg-white/5 p-5 sm:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mt-5 leading-relaxed text-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.avatarBg} text-sm font-semibold text-accent`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
