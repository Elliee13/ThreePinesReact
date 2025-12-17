export default function Divisions() {
  return (
    <section id="divisions" className="section bg-basalt-50/70 dark:bg-basalt-800/30">
      <div className="container-shell">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 reveal">
          <div>
            <div className="kicker">Divisions</div>
            <h2 className="h2 mt-4">Three focused lines of business—one accountable partner.</h2>
            <p className="lead mt-3 max-w-3xl">
              Our divisions include <span className="font-semibold">government contracting</span> and commercial screen printing under the{" "}
              <span className="font-semibold">Three Pines Printing (DBA)</span>—plus product development for specialized programs.
            </p>
          </div>
          <a href="#capabilities" className="btn-primary no-underline w-fit">
            See capabilities →
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {/* Government */}
          <article className="card card-hover reveal">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">Government Contracting Division</h3>
                <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                  Procurement-aligned apparel and branded merchandise programs with fulfillment support.
                </p>
              </div>
              <span className="badge">Priority procurement</span>
            </div>

            <div className="mt-4 rounded-xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4">
              <div className="text-xs font-semibold text-basalt-600 dark:text-basalt-200/80 mb-2">
                Native American-owned, qualified for priority procurement
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="check" aria-hidden="true">✓</span><span>Uniforms and agency apparel programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="check" aria-hidden="true">✓</span><span>Branded merchandise + promotional products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="check" aria-hidden="true">✓</span><span>Promotional products</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 text-xs text-basalt-600 dark:text-basalt-200/80">
              Sectors served: <span className="font-semibold">federal, state, municipal, tribal</span>
            </div>
          </article>

          {/* Printing */}
          <article className="card card-hover reveal">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  Three Pines Printing{" "}
                  <span className="text-sm font-sans font-semibold text-basalt-600 dark:text-basalt-200/80">(DBA)</span>
                </h3>
                <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                  Commercial apparel decoration and promotional products delivered with enterprise-grade consistency.
                </p>
              </div>
              <span className="badge">Commercial</span>
            </div>

            <div className="mt-4 rounded-xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4 overflow-hidden">
              <div className="text-xs font-semibold text-basalt-600 dark:text-basalt-200/80">Apparel decoration</div>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-glacier-600/15 grid place-items-center animate-float">
                  <span className="text-sm font-semibold text-glacier-700 dark:text-glacier-300">SP</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-pine-600/15 grid place-items-center animate-float" style={{ animationDelay: ".6s" }}>
                  <span className="text-sm font-semibold text-pine-800 dark:text-pine-200">EM</span>
                </div>
                <div className="h-10 w-10 rounded-xl bg-earth-500/15 grid place-items-center animate-float" style={{ animationDelay: "1.2s" }}>
                  <span className="text-sm font-semibold text-earth-700 dark:text-earth-200">PX</span>
                </div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="check" aria-hidden="true">✓</span><span>Screen printing • Embroidery • Leather patches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="check" aria-hidden="true">✓</span><span>Promotional products + design support</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 text-xs text-basalt-600 dark:text-basalt-200/80">
              Target clients: <span className="font-semibold">corporations, schools, nonprofits, churches, teams</span>
            </div>
          </article>

          {/* Product Development */}
          <article className="card card-hover reveal">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight">Product Development Division</h3>
                <p className="mt-2 text-sm text-basalt-600 dark:text-basalt-200/80">
                  Optional/tertiary support for apparel line creation and tourism-forward product programs.
                </p>
              </div>
              <span className="badge">Programs</span>
            </div>

            <div className="mt-4 rounded-xl border border-basalt-200/60 dark:border-basalt-700/60 bg-white/60 dark:bg-basalt-800/40 p-4">
              <ul className="grid gap-2 text-sm">
                <li className="flex items-start gap-2"><span className="check" aria-hidden="true">✓</span><span>Apparel line creation</span></li>
                <li className="flex items-start gap-2"><span className="check" aria-hidden="true">✓</span><span>Souvenir and tourism products</span></li>
                <li className="flex items-start gap-2"><span className="check" aria-hidden="true">✓</span><span>Wholesale programs</span></li>
              </ul>
            </div>

            <div className="mt-4 text-xs text-basalt-600 dark:text-basalt-200/80">
              Ideal for organizations needing <span className="font-semibold">repeatable product pipelines</span>.
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
