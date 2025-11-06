import { useState } from 'react';
import { IconClose, IconMenu } from './icons';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNav = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-base-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="flex items-center gap-2 text-base font-semibold uppercase tracking-[0.2em]">
          <span className="h-2 w-2 rounded-full bg-primary-500" /> Kay Anderson
        </Link>

        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <a key={link.path} href={link.path} className="text-base-600 transition hover:text-primary-500 dark:text-base-200">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-400"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={clsx(
          'border-t border-white/10 bg-white/95 px-6 py-4 shadow-lg transition-all dark:bg-base-900/95 md:hidden',
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={handleNav}
              className={clsx(
                'rounded-full px-4 py-2 transition',
                location.hash === link.path.replace('/#', '#')
                  ? 'bg-primary-500/10 text-primary-600'
                  : 'text-base-700 hover:bg-base-100/80 dark:text-base-200'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex items-center justify-between">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={handleNav}
            className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-glow"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
};
