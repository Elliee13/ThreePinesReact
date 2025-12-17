import { useId, useState } from "react";

const TABS = [
  { key: "gov", label: "Government Contracting" },
  { key: "print", label: "Commercial Printing" },
  { key: "prod", label: "Product Development" },
];

export default function Capabilities() {
  const [active, setActive] = useState("gov");
  const uid = useId();

  const tabId = (k) => `tab-${uid}-${k}`;
  const panelId = (k) => `panel-${uid}-${k}`;

  return (
    <section id="capabilities" className="section section-ambient">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="container-shell">
        <div className="reveal">
          <div className="kicker">Capabilities</div>
          <h2 className="h2 mt-4">Clear service lines, smooth delivery.</h2>
          <p className="lead mt-3 max-w-3xl">
            Switch between capability areas below. Each category is designed for predictable outcomes—especially in government and multi-site environments.
          </p>
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="card">
              <div role="tablist" aria-label="Capabilities categories" className="flex flex-wrap gap-2">
                {TABS.map((t) => {
                  const selected = active === t.key;
                  return (
                    <button
                      key={t.key}
                      className="tab"
                      role="tab"
                      id={tabId(t.key)}
                      aria-selected={selected}
                      aria-controls={panelId(t.key)}
                      tabIndex={selected ? 0 : -1}
                      type="button"
                      onClick={() => setActive(t.key)}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 text-sm text-basalt-600 dark:text-basalt-200/80">
                Built for program clarity: structured scope, reliable timelines, and consistent quality checks.
              </div>

              <div className="mt-6 rounded-2xl border border-basalt-200/60 dark:border-basalt-700/60 p-4 bg-gradient-to-r from-glacier-600/10 via-pine-600/10 to-earth-500/10">
                <div className="text-xs font-semibold text-basalt-700 dark:text-basalt-200/90">Brand messaging</div>
                <p className="mt-2 text-sm">
                  Native American-owned Montana company • Owned by Perry Proctor • Serving agencies, corporations, schools, teams, and nonprofits.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="gradient-border">
              <div className="card">
                {/* GOV */}
                <div
                  id={panelId("gov")}
                  role="tabpanel"
                  aria-labelledby={tabId("gov")}
                  hidden={active !== "gov"}
                  className={`transition ${active === "gov" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight">Government Contracting</h3>
                  <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                    Uniform programs, branded merchandise, and promotional products—supported by bulk fulfillment and distribution.
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Uniforms and agency apparel</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Merchandise programs</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Promotional products</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Fulfillment, distribution</li>
                  </ul>
                </div>

                {/* PRINT */}
                <div
                  id={panelId("print")}
                  role="tabpanel"
                  aria-labelledby={tabId("print")}
                  hidden={active !== "print"}
                  className={`transition ${active === "print" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight">Commercial Printing (Three Pines Printing DBA)</h3>
                  <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                    Professional decoration with consistent output—ideal for corporate identity, school spiritwear, and organizational programs.
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Screen printing</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Embroidery</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Patches</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Promotional items</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Design support</li>
                  </ul>
                </div>

                {/* PROD */}
                <div
                  id={panelId("prod")}
                  role="tabpanel"
                  aria-labelledby={tabId("prod")}
                  hidden={active !== "prod"}
                  className={`transition ${active === "prod" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                >
                  <h3 className="font-display text-xl font-semibold tracking-tight">Product Development</h3>
                  <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                    Build repeatable product lines and wholesale-ready programs—especially for tourism and souvenir markets.
                  </p>
                  <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Apparel lines</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Souvenirs</li>
                    <li className="flex gap-2"><span className="check" aria-hidden="true">✓</span>Wholesale programs</li>
                  </ul>
                </div>

                <div className="mt-7 pt-6 border-t border-basalt-200/60 dark:border-basalt-700/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-xs text-basalt-600 dark:text-basalt-200/80">
                    Want a tailored capabilities statement? We can align services to your purchasing process.
                  </p>
                  <a href="#contact" className="btn-primary no-underline">Contact us →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
