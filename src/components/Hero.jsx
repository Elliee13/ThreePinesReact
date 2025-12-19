export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-glacier-50 via-white to-white dark:from-basalt-900 dark:via-basalt-900 dark:to-basalt-900" />

      <div className="absolute inset-0 -z-10">
        <div className="parallax-layer absolute inset-0" data-speed="0.10">
          <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-glacier-400/25 blur-3xl dark:bg-glacier-500/10" />
          <div className="absolute -bottom-32 left-10 h-[460px] w-[460px] rounded-full bg-pine-400/15 blur-3xl dark:bg-pine-500/10" />
        </div>

        <div className="parallax-layer absolute inset-0" data-speed="0.22" aria-hidden="true">
          <svg className="absolute bottom-0 left-0 w-full h-[56vh] opacity-70 dark:opacity-60" viewBox="0 0 1440 480" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mtn" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#2C5DFF" stopOpacity="0.25" />
                <stop offset="1" stopColor="#0E2D22" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path d="M0,330 C200,260 300,380 520,320 C740,260 860,360 1080,300 C1220,262 1330,290 1440,260 L1440,480 L0,480 Z" fill="url(#mtn)" />
            <path d="M0,360 C220,320 320,420 520,360 C740,300 860,410 1080,340 C1220,300 1330,340 1440,310 L1440,480 L0,480 Z" fill="#1E2533" opacity="0.25" />
          </svg>
        </div>

        <div className="parallax-layer absolute inset-0" data-speed="0.35" aria-hidden="true">
          <svg className="absolute bottom-0 left-0 w-full h-[52vh] opacity-70 dark:opacity-55" viewBox="0 0 1440 520" preserveAspectRatio="none">
            <path d="M70 520V420l-22 26h14l-22 26h14l-22 26h60l-22-26h14l-22-26h14l-22-26v100z" fill="#194E3A" opacity=".55" />
            <path d="M170 520V390l-28 32h18l-28 32h18l-28 32h76l-28-32h18l-28-32h18l-28-32v130z" fill="#21634A" opacity=".45" />
            <path d="M1260 520V390l-28 32h18l-28 32h18l-28 32h76l-28-32h18l-28-32h18l-28-32v130z" fill="#21634A" opacity=".45" />
            <path d="M1360 520V420l-22 26h14l-22 26h14l-22 26h60l-22-26h14l-22-26h14l-22-26v100z" fill="#194E3A" opacity=".55" />
          </svg>
        </div>

        <div className="parallax-layer absolute inset-0" data-speed="0.16" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(73,86,107,.7) 1px, transparent 1px), linear-gradient(0deg, rgba(73,86,107,.7) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>
      </div>

      <div className="container-shell relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight reveal">
              Three Pines Industries
              <span className="block text-basalt-600 dark:text-basalt-200/80 text-lg sm:text-xl lg:text-2xl font-sans font-medium mt-3">
                Apparel, branding, and procurement services for government and commercial clients.
              </span>
            </h1>

            <p className="mt-5 lead max-w-2xl reveal hidden">
              Native American-owned Montana company providing apparel programs, branded merchandise, and reliable fulfillment.{" "}
              <span className="font-semibold text-basalt-900 dark:text-basalt-50">Owned by Perry Proctor.</span>
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 reveal">
              <a href="#divisions" className="btn-primary no-underline">
                Our divisions <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn-ghost no-underline">
                Contact us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="gradient-border">
              <div className="card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-basalt-700 dark:text-basalt-200/90">Trusted partner for</div>
                    <div className="mt-2 font-display text-xl font-semibold tracking-tight">Agencies. Enterprises. Communities.</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="relative overflow-hidden rounded-xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 px-4 py-3">
                    <div className="text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">Divisions</div>
                    <div className="mt-1 text-sm font-semibold">Government Contracting • Three Pines Printing (DBA) • Product Development</div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/45 to-white/0 opacity-40 animate-shimmer dark:via-basalt-50/10" />
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 px-4 py-3">
                    <div className="text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">What we deliver</div>
                    <div className="mt-1 text-sm font-semibold">Uniform programs • Branded merchandise • Promotional products</div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/0 via-white/45 to-white/0 opacity-40 animate-shimmer dark:via-basalt-50/10" />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <a href="#about" className="btn-secondary no-underline px-4 py-2">
                    Explore <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <div className="inline-flex items-center gap-2 text-xs text-basalt-600 dark:text-basalt-200/80">
                <span className="h-5 w-5 rounded-full border border-basalt-200/70 dark:border-basalt-700/60 grid place-items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-basalt-600 dark:bg-basalt-200 animate-bounce" />
                </span>
                Scroll
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
