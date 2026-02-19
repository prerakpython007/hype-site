const steps = [
  {
    step: "01",
    title: "Download the App",
    description:
      "Get Hype for free on iOS or Android. Create your account in seconds and you're ready to go.",
    color: "text-lime",
  },
  {
    step: "02",
    title: "Set Your Habits",
    description:
      "Pick from popular habits or create your own. Set frequency, reminders, and daily goals that fit your life.",
    color: "text-gold",
  },
  {
    step: "03",
    title: "Check In Daily",
    description:
      "Tap to complete your habits each day. Build streaks, earn rewards, and watch your consistency grow.",
    color: "text-pink",
  },
  {
    step: "04",
    title: "Level Up",
    description:
      "Track your progress over time, unlock achievements, and join a community that keeps you motivated.",
    color: "text-lime",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            How it Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start building habits in minutes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Getting started with Hype is simple. Four easy steps and you&apos;re
            on your way to a better you.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-linear-to-r from-white/20 to-transparent lg:block" />
              )}

              <div className="relative">
                <div className={`mb-4 text-4xl font-bold ${item.color} opacity-40`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
