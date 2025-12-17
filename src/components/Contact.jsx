export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-glacier-50 via-white to-white dark:from-basalt-900 dark:via-basalt-900 dark:to-basalt-900" />

      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 left-10 h-[420px] w-[420px] rounded-full bg-glacier-400/20 blur-3xl dark:bg-glacier-500/10" />
        <div className="absolute -bottom-28 right-12 h-[460px] w-[460px] rounded-full bg-pine-400/18 blur-3xl dark:bg-pine-500/10" />
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(73,86,107,.7) 1px, transparent 1px), linear-gradient(0deg, rgba(73,86,107,.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container-shell">
        <div className="reveal">
          <div className="kicker">Contact</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="h2 mt-4">Let’s scope your program.</h2>
              <p className="lead mt-3 max-w-3xl">
                We support government agencies, corporations, schools, teams, and nonprofit organizations with consistent delivery and clear communication.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 reveal">
          <div className="gradient-border">
            <div className="card overflow-hidden">
              <div className="mt-1 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-basalt-200/60 dark:divide-basalt-700/60">
                {/* Address */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="relative inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-pine-600/15 text-pine-800 dark:text-pine-200 border border-pine-600/20">
                      <span className="absolute inset-0 rounded-2xl bg-pine-500/10 animate-pulse" />
                      <svg className="relative h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>

                    <div className="min-w-0">
                      <div className="text-sm font-semibold">Address</div>
                      <p className="mt-1 text-sm text-basalt-700 dark:text-basalt-200/90">2506 North Moore Ave, Moore, Oklahoma, United States 73160</p>
                      <p className="mt-2 text-xs text-basalt-600 dark:text-basalt-200/80">Serving statewide and beyond.</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-glacier-600/15 text-glacier-700 dark:text-glacier-300 border border-glacier-500/20">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M8 4h8v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M7 9v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">Phone</div>
                      <div className="mt-1 flex items-center gap-2">
                        <a
                          href="tel:+14065550123"
                          className="text-sm font-semibold text-basalt-900 dark:text-basalt-50 no-underline hover:underline"
                        >
                          +1.4054732815
                        </a>
                      </div>
                      <p className="mt-2 text-xs text-basalt-600 dark:text-basalt-200/80">Call us directly.</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-earth-500/15 text-earth-700 dark:text-earth-200 border border-earth-500/20">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M5.5 7l6.5 5 6.5-5" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">Email</div>
                      <div className="mt-1 flex items-start gap-2 min-w-0">
                        <a
                          href="mailto:info@threepinesindustries.com"
                          className="text-sm font-semibold text-basalt-900 dark:text-basalt-50 no-underline hover:underline break-words [overflow-wrap:anywhere]"
                        >
                          mike.horton@bcapparel.com
                        </a>
                      </div>
                      <p className="mt-2 text-xs text-basalt-600 dark:text-basalt-200/80">Send us an email.</p>
                    </div>
                  </div>
                </div>
              </div>{/* rows */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
