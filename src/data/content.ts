import document from '../../docs/site-content.json';

export type SectionLink = {
  label: string;
  path: string;
};

export type HeroCta = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

export type Highlight = {
  label: string;
  value: string;
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export type SystemLayer = {
  name: string;
  summary: string;
  tech: string[];
};

export type FlagshipProject = {
  title: string;
  summary: string;
  stack: string[];
  deployment: string;
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  cv: string;
  email: string;
};

export type QualityRequirement = {
  label: string;
  description: string;
};

export type PipelineVariable = {
  key: string;
  value: string;
  description: string;
};

export type DeliveryPipeline = {
  steps: string[];
  buildCommand: string;
  publishDirectory: string;
  environmentVariables: PipelineVariable[];
  dns: string;
};

export type PortfolioDocument = {
  github: { username: string };
  navigation: { label: string; hash: string }[];
  hero: {
    badge: string;
    name: string;
    title: string;
    headline: string;
    description: string;
    avatarAlt: string;
    avatarUrl?: string;
    ctas: {
      projects: HeroCta;
      contact: HeroCta;
      cv: HeroCta;
    };
  };
  about: {
    badge: string;
    title: string;
    summary: string;
    highlights: Highlight[];
  };
  skills: {
    badge: string;
    title: string;
    description: string;
    categories: SkillCategory[];
  };
  systemOverview: {
    badge: string;
    title: string;
    summary: string;
    layers: SystemLayer[];
  };
  projects: {
    badge: string;
    title: string;
    description: string;
    flagship: FlagshipProject[];
  };
  contact: {
    badge: string;
    title: string;
    summary: string;
    buttonLabel: string;
    email: string;
    fallbackLabel: string;
  };
  delivery: {
    badge: string;
    title: string;
    summary: string;
    quality: QualityRequirement[];
    pipeline: DeliveryPipeline;
    futureEnhancements: string[];
  };
  social: SocialLinks;
  footer: {
    summary: string;
  };
  header: {
    ctaLabel: string;
  };
};

const doc = document as PortfolioDocument;

export const githubUsername = import.meta.env.VITE_GITHUB_USER || doc.github.username;

const normaliseHash = (hash: string) => (hash.startsWith('#') ? hash.slice(1) : hash);

export const navLinks: SectionLink[] = doc.navigation.map((entry) => ({
  label: entry.label,
  path: `/#${normaliseHash(entry.hash)}`
}));

const avatarUrl = doc.hero.avatarUrl ?? `https://github.com/${githubUsername}.png`;

export const heroContent = {
  badge: doc.hero.badge,
  name: doc.hero.name,
  title: doc.hero.title,
  headline: doc.hero.headline,
  description: doc.hero.description,
  avatarAlt: doc.hero.avatarAlt,
  avatarUrl,
  ctas: doc.hero.ctas
};

export const aboutContent = {
  badge: doc.about.badge,
  title: doc.about.title,
  summary: doc.about.summary,
  highlights: doc.about.highlights
};

export const skillsContent = {
  badge: doc.skills.badge,
  title: doc.skills.title,
  description: doc.skills.description,
  categories: doc.skills.categories
};

export const skillCategories: SkillCategory[] = skillsContent.categories;

export const systemOverviewContent = {
  badge: doc.systemOverview.badge,
  title: doc.systemOverview.title,
  summary: doc.systemOverview.summary,
  layers: doc.systemOverview.layers
};

export const projectsContent = {
  badge: doc.projects.badge,
  title: doc.projects.title,
  description: doc.projects.description
};

export const flagshipProjects: FlagshipProject[] = doc.projects.flagship;

export const socialLinks: SocialLinks = doc.social;

export const deliveryContent = {
  badge: doc.delivery.badge,
  title: doc.delivery.title,
  summary: doc.delivery.summary,
  quality: doc.delivery.quality,
  pipeline: doc.delivery.pipeline,
  futureEnhancements: doc.delivery.futureEnhancements
};

export const contactCopy = {
  badge: doc.contact.badge,
  title: doc.contact.title,
  summary: doc.contact.summary,
  buttonLabel: doc.contact.buttonLabel,
  fallbackLabel: doc.contact.fallbackLabel,
  fallbackMailto: doc.contact.email
};

export const footerCopy = doc.footer;

export const headerContent = doc.header;
