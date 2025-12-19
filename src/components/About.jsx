export default function About() {
  return (
    <section id="about" className="section section-ambient">
      <div className="container-shell">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 reveal">
            <div className="kicker">About</div>
            <h2 className="h2 mt-4">A corporate partner grounded in Montana.</h2>
            <p className="lead mt-4">
              <span className="font-semibold text-basalt-900 dark:text-basalt-50">Three Pines Industries is a Native American–owned Montana company</span>{" "}
              built to support procurement needs across public and private sectors—without sacrificing quality, clarity, or accountability.{" "}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="card card-hover">
                <div className="text-sm font-semibold">Mission</div>
                <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                  Deliver dependable apparel, branding, and procurement solutions with disciplined project management.
                </p>
              </div>
              <div className="card card-hover">
                <div className="text-sm font-semibold">Values</div>
                <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                  Integrity, responsiveness, and respect—serving agencies, organizations, and communities with care.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <div className="gradient-border">
              <div className="card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-basalt-700 dark:text-basalt-200/90">At a glance</div>
                    <div className="mt-2 text-lg font-display font-semibold tracking-tight">Capability built for scale.</div>
                  </div>
                  <span className="badge">Government & commercial</span>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4">
                    <div className="text-3xl font-display font-semibold tracking-tight text-glacier-700 dark:text-glacier-300 animate-fade-in">∞</div>
                    <div className="mt-1 text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">Procurement-ready support</div>
                  </div>
                  <div className="rounded-2xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4">
                    <div className="text-3xl font-display font-semibold tracking-tight text-pine-700 dark:text-pine-200 animate-fade-in">3</div>
                    <div className="mt-1 text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">Core divisions</div>
                  </div>
                  <div className="rounded-2xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4">
                    <div className="text-3xl font-display font-semibold tracking-tight text-earth-600 dark:text-earth-200 animate-fade-in">✓</div>
                    <div className="mt-1 text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">Quality-first execution</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-basalt-200/60 dark:border-basalt-700/60 bg-gradient-to-r from-glacier-600/10 via-pine-600/10 to-earth-500/10 p-5">
                  <p className="text-sm text-basalt-700 dark:text-basalt-200/90">
                    We serve <span className="font-semibold">government agencies, corporations, schools, teams, and nonprofit organizations</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
