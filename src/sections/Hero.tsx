import { IconArrowDown } from '../components/icons';
import { metrics } from '../data/content';
import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28" id="hero">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="badge w-fit">Fractional CTO & Product Partner</span>
            <h1 className="text-4xl font-semibold tracking-tight text-base-900 dark:text-white sm:text-5xl lg:text-6xl">
              I help teams ship confident software that customers love.
            </h1>
            <p className="max-w-2xl text-lg text-base-700 dark:text-base-200">
              Kay Anderson is a senior software engineer and product strategist partnering with startups and scale-ups to
              accelerate delivery, modernize platforms, and build resilient engineering cultures.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button icon={<IconArrowDown className="h-4 w-4" />} onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore services
              </Button>
              <Button
                variant="ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let’s talk
              </Button>
            </div>
          </div>
          <div className="glass-card relative overflow-hidden">
            <div className="absolute -right-20 -top-16 h-52 w-52 rounded-full bg-primary-200/60 blur-3xl" />
            <div className="absolute -bottom-12 left-6 h-52 w-52 rounded-full bg-primary-400/40 blur-3xl" />
            <div className="relative space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-base-500 dark:text-base-300">
                Trusted by teams at
              </h2>
              <div className="grid grid-cols-2 gap-6 text-base font-semibold text-base-700 dark:text-base-200 sm:grid-cols-3">
                {['Northstar', 'Brightwell', 'Guilded', 'Metricly', 'Orbit', 'Rally'].map((name) => (
                  <div key={name} className="rounded-2xl border border-white/50 bg-white/60 px-4 py-3 text-center backdrop-blur dark:border-white/10 dark:bg-white/10">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <dl className="grid gap-6 rounded-3xl border border-white/30 bg-white/70 p-6 shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <dt className="text-sm uppercase tracking-[0.25em] text-base-500 dark:text-base-300">{metric.label}</dt>
              <dd className="text-3xl font-semibold text-base-900 dark:text-white">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
