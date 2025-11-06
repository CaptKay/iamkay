import { services } from '../data/content';

export const Services = () => {
  return (
    <section id="services" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="glass-card relative overflow-hidden">
        <div className="absolute -top-20 right-10 h-64 w-64 rounded-full bg-primary-400/30 blur-3xl" />
        <div className="absolute -bottom-24 left-8 h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="badge">Services</p>
            <h2 className="section-title">High-leverage support across the software lifecycle</h2>
            <p className="section-subtitle">
              Whether you need an embedded product squad or advisory partner, Kay blends technical acuity with pragmatic
              leadership to help your teams deliver faster and safer.
            </p>
          </div>
          <div className="grid gap-6">
            {services.map((service) => (
              <article key={service.title} className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/10">
                <h3 className="text-xl font-semibold text-base-900 dark:text-white">{service.title}</h3>
                <p className="mt-2 text-base text-base-600 dark:text-base-200">{service.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="tag-pill">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
