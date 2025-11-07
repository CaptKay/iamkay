import { useEffect } from 'react';
import { flagshipProjects, projectsContent } from '../data/content';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchRepositories } from '../app/githubSlice';
import { IconExternal, IconGithub } from '../components/icons';
import { Button } from '../components/Button';

const formatMonthYear = (isoDate: string) => {
  const formatter = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
  return formatter.format(new Date(isoDate));
};

export const Projects = () => {
  const dispatch = useAppDispatch();
  const { repos, status, error } = useAppSelector((state) => state.github);
  const isLoading = status === 'idle' || status === 'loading';
  const { badge, title, description } = projectsContent;

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchRepositories());
    }
  }, [dispatch, status]);

  return (
    <section id="projects" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="space-y-4">
        <p className="badge">{badge}</p>
        <h2 className="section-title">{title}</h2>
        <p className="section-subtitle">{description}</p>
      </div>

      <div className="mt-10 space-y-6">
        <h3 className="text-xl font-semibold text-base-900 dark:text-white">Latest GitHub activity</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {isLoading &&
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="animate-pulse rounded-3xl border border-base-200/80 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="h-4 w-3/4 rounded bg-base-200/80 dark:bg-base-700" />
                <div className="mt-4 h-3 w-full rounded bg-base-200/60 dark:bg-base-700" />
                <div className="mt-2 h-3 w-5/6 rounded bg-base-200/50 dark:bg-base-700" />
              </div>
            ))}

          {status === 'failed' && (
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-800 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100">
              <p className="font-semibold">{error}</p>
              <p className="mt-2 text-sm">
                You can still explore public work directly on GitHub while the live feed recovers.
              </p>
              <Button
                href="https://github.com/kingsleykanu"
                variant="ghost"
                className="mt-4 w-fit"
                icon={<IconGithub className="h-4 w-4" />}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub profile
              </Button>
            </div>
          )}

          {status === 'succeeded' &&
            repos.length > 0 &&
            repos.map((repo) => (
              <article
                key={repo.id}
                className="flex h-full flex-col justify-between rounded-3xl border border-base-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold text-base-900 dark:text-white">{repo.name}</h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-base-400 dark:text-base-500">
                      Updated {formatMonthYear(repo.pushedAt)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-base-600 dark:text-base-200">{repo.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-base-500 dark:text-base-300">
                  {repo.language && (
                    <span className="rounded-full bg-primary-500/10 px-3 py-1 font-semibold text-primary-600 dark:text-primary-300">
                      {repo.language}
                    </span>
                  )}
                  {repo.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className="rounded-full border border-base-200/80 px-3 py-1 dark:border-white/10">
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={repo.htmlUrl}
                    variant="ghost"
                    icon={<IconGithub className="h-4 w-4" />}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                  {repo.homepage && (
                    <Button
                      href={repo.homepage}
                      variant="ghost"
                      icon={<IconExternal className="h-4 w-4" />}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </Button>
                  )}
                </div>
              </article>
            ))}

          {status === 'succeeded' && repos.length === 0 && (
            <div className="rounded-3xl border border-base-200/80 bg-white/80 p-6 text-base-700 dark:border-white/10 dark:bg-white/5 dark:text-base-200">
              <p className="font-semibold">No public repositories available yet.</p>
              <p className="mt-2 text-sm">Check back soon as new projects are published to GitHub.</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-16 space-y-6">
        <h3 className="text-xl font-semibold text-base-900 dark:text-white">Flagship case studies</h3>
        <div className="grid gap-6 lg:grid-cols-2">
          {flagshipProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-base-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-base-900 dark:text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-base-600 dark:text-base-200">{project.summary}</p>
                  </div>
                  <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-300">
                    {project.deployment}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-base-500 dark:text-base-300">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-base-200/80 px-3 py-1 dark:border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.github && (
                  <Button
                    href={project.links.github}
                    variant="ghost"
                    icon={<IconGithub className="h-4 w-4" />}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                )}
                {project.links.live && (
                  <Button
                    href={project.links.live}
                    variant="ghost"
                    icon={<IconExternal className="h-4 w-4" />}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </Button>
                )}
                {project.links.caseStudy && (
                  <Button
                    href={project.links.caseStudy}
                    variant="ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Case study
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
