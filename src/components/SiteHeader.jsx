import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme.js";

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  // Optional: lock scroll when menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header id="siteHeader" className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-3">
        <div className="glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-3 no-underline">
            <span className="relative grid place-items-center h-10 w-10 rounded-xl text-white">
              <img
                src="/ThreePinesLogo.svg"
                alt="Three Pines Industries"
                className="h-10 w-10 rounded-xl object-contain"
              />
            </span>

            <div className="leading-tight">
              <div className="font-display font-semibold tracking-tight text-basalt-900 dark:text-basalt-50">
                Three Pines Industries
              </div>
              <div className="text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">
                Native American–owned • Montana-based
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a data-nav="about" href="#about" className="no-underline text-sm font-medium text-basalt-600 hover:text-basalt-900 dark:text-basalt-200/80 dark:hover:text-basalt-50 transition">
              About
            </a>
            <a data-nav="divisions" href="#divisions" className="no-underline text-sm font-medium text-basalt-600 hover:text-basalt-900 dark:text-basalt-200/80 dark:hover:text-basalt-50 transition">
              Divisions
            </a>
            <a data-nav="capabilities" href="#capabilities" className="no-underline text-sm font-medium text-basalt-600 hover:text-basalt-900 dark:text-basalt-200/80 dark:hover:text-basalt-50 transition">
              Capabilities
            </a>
            <a data-nav="contact" href="#contact" className="no-underline text-sm font-medium text-basalt-600 hover:text-basalt-900 dark:text-basalt-200/80 dark:hover:text-basalt-50 transition">
              Contact
            </a>

            <button
              type="button"
              aria-pressed={isDark}
              className="btn-ghost px-3 py-2"
              title="Toggle theme"
              onClick={toggleTheme}
            >
              <span className="sr-only">Toggle dark mode</span>
              <svg className="h-4 w-4 dark:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="h-4 w-4 hidden dark:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <a href="#contact" className="btn-primary no-underline">
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              aria-pressed={isDark}
              className="btn-ghost px-3 py-2"
              title="Toggle theme"
              onClick={toggleTheme}
            >
              <span className="sr-only">Toggle dark mode</span>
              <svg className="h-4 w-4 dark:hidden" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <svg className="h-4 w-4 hidden dark:block" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 14.5A7.5 7.5 0 0 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="btn-ghost px-3 py-2"
              aria-expanded={mobileOpen}
              aria-controls="mobileNav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        id="navBackdrop"
        className="fixed inset-0 z-40 bg-basalt-900/40 backdrop-blur-sm transition"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobileNav"
        className="fixed right-0 top-0 z-50 h-full w-[86%] max-w-sm transition transform-gpu"
        style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
        aria-hidden={!mobileOpen}
      >
        <div className="h-full glass rounded-l-3xl p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="font-display font-semibold">Menu</div>
            <button className="btn-ghost px-3 py-2" onClick={() => setMobileOpen(false)}>
              <span className="sr-only">Close menu</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="grid gap-2">
            {[
              ["#about", "About"],
              ["#divisions", "Divisions"],
              ["#capabilities", "Capabilities"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                className="btn-ghost justify-start no-underline"
                href={href}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="mt-auto grid gap-2">
            <a href="#contact" className="btn-primary no-underline w-full" onClick={() => setMobileOpen(false)}>
              Request a quote →
            </a>
            <p className="text-xs text-basalt-600 dark:text-basalt-200/80">
              Owned by <span className="font-semibold">Perry Proctor</span>.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
