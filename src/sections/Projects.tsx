import { projects } from '../data/content';

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4">
        <p className="badge">Projects</p>
        <h2 className="section-title">Recent engagements and measurable wins</h2>
        <p className="section-subtitle">
          Multi-disciplinary teams trust Kay to untangle complexity, ship reliable software, and prove impact through tangible
          metrics and crisp storytelling.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {projects.map((project) => (
          <article
            key={`${project.company}-${project.year}`}
            className="relative overflow-hidden rounded-3xl border border-base-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-base-500 dark:text-base-300">
                  <span>{project.company}</span>
                  <span className="h-1 w-1 rounded-full bg-primary-500" />
                  <span>{project.year}</span>
                </div>
                <h3 className="text-2xl font-semibold text-base-900 dark:text-white">{project.impact}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-base text-base-600 dark:text-base-200">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
