import { useEffect } from 'react';
import { IconMoon, IconSun } from './icons';
import clsx from 'clsx';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { toggleMode } from '../app/themeSlice';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.classList.remove(mode === 'light' ? 'dark' : 'light');
    root.classList.add(mode);
  }, [mode]);

  return (
    <button
      type="button"
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      onClick={() => dispatch(toggleMode())}
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-base-200/80 bg-white/70 px-3 py-1 text-sm font-medium text-base-700 shadow-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:border-white/20 dark:bg-white/10 dark:text-base-50',
        className
      )}
    >
      {mode === 'light' ? (
        <>
          <IconMoon className="h-4 w-4" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <IconSun className="h-4 w-4" />
          <span>Light</span>
        </>
      )}
    </button>
  );
};
