import { skillCategories, skillsContent } from '../data/content';

export const Skills = () => {
  const { badge, title, description } = skillsContent;
  return (
    <section id="skills" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4">
        <p className="badge">{badge}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{description}</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.name}
            className="rounded-3xl border border-base-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold text-base-900 dark:text-white">{category.name}</h3>
            <ul className="mt-4 space-y-2 text-sm text-base-600 dark:text-base-200">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
