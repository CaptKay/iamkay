import { aboutContent } from '../data/content';

export const About = () => {
  const { summary, highlights } = aboutContent;

  return (
    <section id="about" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          <p className="badge">About</p>
          <h2 className="section-title">Collaborative engineering leadership</h2>
          <p className="section-subtitle">{summary}</p>
        </div>
        <div className="glass-card grid gap-6">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-base-500 dark:text-base-400">
                {highlight.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-base-900 dark:text-white">{highlight.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
