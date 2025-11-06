import { heroContent, socialLinks } from '../data/content';
import { Button } from '../components/Button';
import { IconArrowDown, IconDownload, IconGithub, IconMail } from '../components/icons';

export const Hero = () => {
  const { name, title, headline, description, avatarUrl, avatarAlt, ctas } = heroContent;
  const sizedAvatar = avatarUrl.includes('?') ? `${avatarUrl}&size=320` : `${avatarUrl}?size=320`;

  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-100/70 via-white to-primary-50/60 dark:from-base-800 dark:via-base-900 dark:to-base-950" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <span className="badge">Kingsley Kanu | iamkay.eu</span>
            <h1 className="text-4xl font-semibold tracking-tight text-base-900 dark:text-white sm:text-5xl lg:text-6xl">
              {headline}
            </h1>
            <p className="text-lg text-base-700 dark:text-base-200">{description}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href={ctas.projects} icon={<IconArrowDown className="h-4 w-4" />}>View projects</Button>
              <Button href={ctas.contact} variant="ghost" icon={<IconMail className="h-4 w-4" />}>
                Contact me
              </Button>
              <Button href={ctas.cv} variant="ghost" icon={<IconDownload className="h-4 w-4" />} target="_blank" rel="noreferrer">
                Download CV
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4 text-sm font-semibold text-base-600 dark:text-base-300">
              <span>{name}</span>
              <span className="hidden h-1 w-1 rounded-full bg-primary-500 sm:inline-block" />
              <span className="hidden sm:inline">{title}</span>
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <IconGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="glass-card relative flex max-w-md flex-col items-center gap-4 p-10 text-center">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary-200/50 blur-3xl" />
              <div className="absolute -bottom-12 left-12 h-40 w-40 rounded-full bg-primary-300/40 blur-3xl" />
              <img
                src={sizedAvatar}
                alt={avatarAlt}
                className="relative h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg dark:border-base-800"
              />
              <div>
                <p className="text-lg font-semibold text-base-900 dark:text-white">{name}</p>
                <p className="text-sm text-base-600 dark:text-base-300">{title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
