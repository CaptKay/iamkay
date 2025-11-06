import { contactChannels } from '../data/content';

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <p className="badge">Contact</p>
          <h2 className="section-title">Ready to co-create your next chapter?</h2>
          <p className="section-subtitle">
            Share a few details about your project and Kay will follow up within two business days with next steps and a call
            invitation.
          </p>

          <dl className="mt-8 space-y-3">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-base-400 dark:text-base-500">
                  {channel.label}
                </dt>
                <dd>
                  <a href={channel.href} className="text-lg font-semibold text-base-900 dark:text-white">
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          className="glass-card space-y-6"
          method="POST"
          action="https://formspree.io/f/mvononrq"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-2xl border border-base-200/80 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-2xl border border-base-200/80 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Company
            </label>
            <input
              id="company"
              name="company"
              className="mt-2 w-full rounded-2xl border border-base-200/80 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-2 w-full rounded-2xl border border-base-200/80 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-white/10"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
