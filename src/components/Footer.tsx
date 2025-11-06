import { navLinks, socialLinks } from '../data/content';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/20 bg-white/40 backdrop-blur dark:border-white/10 dark:bg-base-900/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-base-500 dark:text-base-300 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-base-700 dark:text-base-100">© {year} Kingsley Kanu</p>
          <p className="mt-1 max-w-sm text-xs">
            Built with Vite, React, TypeScript, and TailwindCSS. Deployed to the Netlify free tier.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.path} href={link.path} className="hover:text-primary-500">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.cv} target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
};
