import { processPhases } from '../data/content';

export const Process = () => {
  return (
    <section id="process" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="badge">Process</p>
          <h2 className="section-title">A partnership designed for clarity and momentum</h2>
          <p className="section-subtitle">
            Each engagement is grounded in shared intent, transparent communication, and measurable outcomes so your team knows
            exactly where we are headed—and why.
          </p>
        </div>
        <ol className="space-y-6">
          {processPhases.map((phase, index) => (
            <li key={phase.title} className="relative overflow-hidden rounded-3xl border border-base-200/80 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
              <span className="badge mb-4 inline-flex bg-primary-500/10 text-primary-600 dark:text-primary-200">
                Step {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-base-900 dark:text-white">{phase.title}</h3>
              <p className="mt-2 text-base text-base-600 dark:text-base-200">{phase.summary}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {phase.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-base-500 dark:text-base-300">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
