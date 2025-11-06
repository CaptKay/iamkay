import { contactCopy, socialLinks } from '../data/content';
import { IconMail } from '../components/icons';

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto mt-24 max-w-6xl px-6">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="badge">Contact</p>
          <h2 className="section-title">{contactCopy.heading}</h2>
          <p className="section-subtitle">{contactCopy.body}</p>
          <div className="rounded-3xl border border-primary-200/80 bg-primary-50/70 p-6 text-sm text-primary-900 shadow-sm dark:border-primary-500/40 dark:bg-primary-500/10 dark:text-primary-100">
            <p className="font-semibold">Prefer email?</p>
            <p className="mt-1">Reach Kingsley directly at</p>
            <a href={socialLinks.email} className="mt-2 inline-flex items-center gap-2 font-semibold">
              <IconMail className="h-4 w-4" /> contact@iamkay.eu
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/?submitted=true"
          className="glass-card space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
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
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-base-200/80 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-white/10"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-base-600 dark:text-base-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
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
