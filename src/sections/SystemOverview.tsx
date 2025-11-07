import { systemOverviewContent } from '../data/content';

export const SystemOverview = () => {
  const { badge, title, summary, layers } = systemOverviewContent;

  return (
    <section id="stack" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4">
        <p className="badge">{badge}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{summary}</p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {layers.map((layer) => (
          <article
            key={layer.name}
            className="glass-card flex h-full flex-col justify-between gap-4 border-base-200/80 bg-white/80 text-base-700 dark:border-white/10 dark:bg-white/5 dark:text-base-200"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-base-900 dark:text-white">{layer.name}</h3>
              <p className="text-sm">{layer.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.tech.map((tech) => (
                <span key={tech} className="tag-pill text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
