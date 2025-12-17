export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-basalt-50/60 to-white dark:from-basalt-900 dark:via-basalt-900 dark:to-basalt-900" />
        <svg className="absolute bottom-0 left-0 w-full h-56 opacity-70 dark:opacity-55" viewBox="0 0 1440 520" preserveAspectRatio="none">
          <path d="M70 520V420l-22 26h14l-22 26h14l-22 26h60l-22-26h14l-22-26h14l-22-26v100z" fill="#194E3A" opacity=".55" />
          <path d="M170 520V390l-28 32h18l-28 32h18l-28 32h76l-28-32h18l-28-32h18l-28-32v130z" fill="#21634A" opacity=".45" />
          <path d="M1260 520V390l-28 32h18l-28 32h18l-28 32h76l-28-32h18l-28-32h18l-28-32v130z" fill="#21634A" opacity=".45" />
          <path d="M1360 520V420l-22 26h14l-22 26h14l-22 26h60l-22-26h14l-22-26h14l-22-26v100z" fill="#194E3A" opacity=".55" />
        </svg>
      </div>

      <div className="container-shell relative z-10">
        <div className="glass rounded-2xl p-6 sm:p-7">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-display font-semibold tracking-tight text-lg">Three Pines Industries</div>
              <div className="mt-1 text-sm text-basalt-600 dark:text-basalt-200/80">Native American-owned Montana company</div>
            </div>

            <nav className="flex flex-wrap gap-3 text-sm">
              <a className="btn-ghost no-underline px-3 py-2" href="#about">About</a>
              <a className="btn-ghost no-underline px-3 py-2" href="#divisions">Divisions</a>
              <a className="btn-ghost no-underline px-3 py-2" href="#capabilities">Capabilities</a>
              <a className="btn-ghost no-underline px-3 py-2" href="#contact">Contact</a>
            </nav>
          </div>

          <div className="mt-6 pt-6 border-t border-basalt-200/60 dark:border-basalt-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-basalt-600 dark:text-basalt-200/80">© {year} Three Pines Industries. All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs text-basalt-600 dark:text-basalt-200/80">
              <span className="h-2 w-2 rounded-full bg-glacier-600" />
              <span className="h-2 w-2 rounded-full bg-pine-600" />
              <span className="h-2 w-2 rounded-full bg-earth-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
