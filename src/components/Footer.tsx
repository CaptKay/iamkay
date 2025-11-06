export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/20 bg-white/30 backdrop-blur dark:bg-base-900/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-base-500 dark:text-base-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Kay Anderson. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:hello@iamkay.dev">hello@iamkay.dev</a>
          <a href="https://linkedin.com/in/iamkay" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/iamkay" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
