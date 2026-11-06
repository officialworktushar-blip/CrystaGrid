import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CrystaGrid — Control Every Screen. From Anywhere.",
  description:
    "CrystaGrid is the modern digital signage platform to deploy, manage, and monitor every screen from one place.",
};

const stats = [
  { value: "10K+", label: "Screens managed" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "120+", label: "Cities covered" },
  { value: "24/7", label: "Live support" },
];

const features = [
  {
    title: "Remote Screen Control",
    description:
      "Push content, adjust layouts, and reboot displays anywhere in the world — instantly from one dashboard.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Smart Pairing",
    description:
      "Connect new screens in seconds with secure one-time codes. No configuration, no on-site visits, no friction.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
        aria-hidden="true"
      >
        <path d="M9 12h6" />
        <path d="M15 7h2a5 5 0 0 1 0 10h-2" />
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      </svg>
    ),
  },
  {
    title: "Playlist Management",
    description:
      "Build dynamic playlists, schedule campaigns, and update every screen automatically across your entire network.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-6"
        aria-hidden="true"
      >
        <path d="M3 6h13M3 12h13M3 18h8" />
        <path d="m17 14 4 3-4 3v-6Z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-grid-pattern relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(46,139,255,0.18),transparent_65%)]" />

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative grid size-8 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
              <span className="size-2.5 rounded-sm bg-primary shadow-[0_0_12px_rgba(46,139,255,0.9)]" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-heading">
              Crysta<span className="text-primary">Grid</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-paragraph md:flex">
            <a href="#features" className="transition-colors hover:text-heading">
              Features
            </a>
            <a href="#stats" className="transition-colors hover:text-heading">
              Platform
            </a>
            <a href="#footer" className="transition-colors hover:text-heading">
              Company
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-paragraph transition-colors hover:text-heading"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(46,139,255,0.8)] transition-colors hover:bg-ice hover:text-background"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 text-center lg:px-8 lg:pt-28 lg:pb-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-paragraph backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-live" />
            </span>
            Now live — CrystaGrid 2.0
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-heading sm:text-5xl lg:text-7xl">
            Control Every Screen.
            <br />
            <span className="bg-gradient-to-r from-ice via-primary to-ice bg-clip-text text-transparent">
              From Anywhere.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-paragraph sm:text-lg">
            The premium digital signage platform for modern brands. Deploy content,
            monitor displays, and scale your network — all from a single, beautifully
            simple dashboard.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(46,139,255,0.9)] transition-colors hover:bg-ice hover:text-background sm:w-auto"
            >
              Get Started Free
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-text backdrop-blur transition-colors hover:border-primary/50 hover:text-heading sm:w-auto"
            >
              Explore Features
            </a>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
            <div className="absolute -inset-x-10 -top-8 -z-10 h-40 bg-primary/20 blur-3xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                <span className="size-2.5 rounded-full bg-offline/70" />
                <span className="size-2.5 rounded-full bg-review/70" />
                <span className="size-2.5 rounded-full bg-live/70" />
                <span className="ml-3 text-xs text-label">app.crystagrid.com/dashboard</span>
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-3 sm:p-6">
                {[
                  { name: "Lobby Display", progress: "w-3/4" },
                  { name: "Storefront", progress: "w-4/5" },
                  { name: "Event Hall", progress: "w-11/12" },
                ].map((screen) => (
                  <div
                    key={screen.name}
                    className="rounded-xl border border-border/80 bg-background/60 p-3"
                  >
                    <div className="flex aspect-video items-center justify-center rounded-lg bg-screen-gradient">
                      <span className="text-xs font-medium text-ice/80">Live Preview</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="truncate text-xs font-medium text-text">
                        {screen.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-medium text-live">
                        <span className="size-1.5 rounded-full bg-live" />
                        Online
                      </span>
                    </div>
                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                      <div className={`h-full rounded-full bg-primary ${screen.progress}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="border-y border-border/70 bg-card/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border/70 px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="px-2 py-10 text-center lg:px-6">
                <div className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-paragraph">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Everything you need
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              Built for screens that never sleep
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paragraph">
              Powerful tools wrapped in a clean interface, so your team can focus on
              content — not configuration.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid size-12 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-heading">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paragraph">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,139,255,0.16),transparent_65%)]" />
            <h2 className="relative text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
              Ready to take control?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-paragraph">
              Set up your first screen in minutes. No credit card required.
            </p>
            <Link
              href="/register"
              className="relative mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(46,139,255,0.9)] transition-colors hover:bg-ice hover:text-background"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-border/70 bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
              <span className="size-2 rounded-sm bg-primary" />
            </span>
            <span className="text-sm font-semibold text-heading">
              Crysta<span className="text-primary">Grid</span>
            </span>
          </div>
          <p className="text-xs text-footer">
            © 2026 CrystaGrid. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-footer">
            <a href="#" className="transition-colors hover:text-text">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-text">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-text">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
