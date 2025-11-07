import { deliveryContent } from '../data/content';

export const Delivery = () => {
  const { badge, title, summary, quality, pipeline, futureEnhancements } = deliveryContent;

  return (
    <section id="delivery" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4">
        <p className="badge">{badge}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{summary}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <article className="glass-card space-y-4 border-base-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-base-900 dark:text-white">Quality targets</h3>
          <ul className="space-y-4">
            {quality.map((item) => (
              <li key={item.label} className="space-y-1">
                <p className="text-sm font-semibold text-base-800 dark:text-base-100">{item.label}</p>
                <p className="text-sm text-base-600 dark:text-base-200">{item.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass-card space-y-4 border-base-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-lg font-semibold text-base-900 dark:text-white">Deployment pipeline</h3>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-base-600 dark:text-base-200">
            {pipeline.steps.map((step, index) => (
              <li key={`${step}-${index}`}>{step}</li>
            ))}
          </ol>
          <div className="rounded-2xl border border-base-200/80 bg-white/70 p-4 text-sm text-base-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-base-200">
            <dl className="grid gap-3">
              <div>
                <dt className="font-semibold text-base-700 dark:text-base-100">Build command</dt>
                <dd className="font-mono text-xs text-base-500 dark:text-base-300">{pipeline.buildCommand}</dd>
              </div>
              <div>
                <dt className="font-semibold text-base-700 dark:text-base-100">Publish directory</dt>
                <dd className="font-mono text-xs text-base-500 dark:text-base-300">{pipeline.publishDirectory}</dd>
              </div>
              <div>
                <dt className="font-semibold text-base-700 dark:text-base-100">Environment variables</dt>
                <dd className="space-y-2">
                  {pipeline.environmentVariables.map((variable) => (
                    <div key={variable.key} className="rounded-xl border border-base-200/80 bg-white/80 p-3 text-xs text-base-600 dark:border-white/10 dark:bg-white/5 dark:text-base-300">
                      <p className="font-mono font-semibold text-base-700 dark:text-base-100">
                        {variable.key} = {variable.value}
                      </p>
                      <p className="mt-1 text-[0.7rem] text-base-500 dark:text-base-400">{variable.description}</p>
                    </div>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-base-700 dark:text-base-100">DNS</dt>
                <dd className="font-mono text-xs text-base-500 dark:text-base-300">{pipeline.dns}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>

      <article className="glass-card mt-10 space-y-4 border-base-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5">
        <h3 className="text-lg font-semibold text-base-900 dark:text-white">Future enhancements</h3>
        <ul className="space-y-3 text-sm text-base-600 dark:text-base-200">
          {futureEnhancements.map((item, index) => (
            <li key={`${item}-${index}`} className="flex gap-3">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
