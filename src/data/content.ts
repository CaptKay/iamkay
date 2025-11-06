export const githubUsername = import.meta.env.VITE_GITHUB_USER || 'kingsleykanu';

export const navLinks = [
  { label: 'Home', path: '/#hero' },
  { label: 'About', path: '/#about' },
  { label: 'Skills', path: '/#skills' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/#contact' }
];

export const heroContent = {
  name: 'Kingsley Kanu',
  title: 'Full-Stack JS/TS Developer',
  headline: 'Shipping resilient web platforms with modern TypeScript tooling.',
  description:
    'Engineer specialising in TypeScript-first product delivery, platform modernisation, and API-centric experiences for startups and enterprise teams across Europe.',
  avatarAlt: 'Portrait of Kingsley Kanu',
  avatarUrl: `https://github.com/${githubUsername}.png`,
  ctas: {
    projects: '#projects',
    contact: '#contact',
    cv: 'https://iamkay.eu/assets/kingsley-kanu-cv.pdf'
  }
};

export const aboutContent = {
  summary:
    'Kingsley is a pragmatic full-stack engineer with a product mindset, leading cross-functional squads from discovery to deployment. With a strong grasp of DevOps automation and UX collaboration, Kingsley builds systems that stay maintainable long after launch.',
  highlights: [
    { label: 'Location', value: 'Berlin, Germany · Remote across EU & UK' },
    { label: 'Specialty', value: 'React, Node.js & platform architecture' },
    { label: 'Experience', value: '9+ years | 30+ shipped products' }
  ]
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    items: ['React 18/19', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'PostgreSQL']
  },
  {
    name: 'Testing',
    items: ['Vitest', 'Jest', 'React Testing Library', 'Cypress', 'Playwright']
  },
  {
    name: 'Cloud',
    items: ['Netlify', 'AWS Amplify', 'Render', 'Vercel', 'Docker']
  },
  {
    name: 'Tooling',
    items: ['Redux Toolkit', 'GitHub Actions', 'Storybook', 'Zod', 'Stripe SDK']
  }
];

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

export const flagshipProjects: FlagshipProject[] = [
  {
    title: 'AuthApp',
    summary: 'Authentication demo delivering JWT sessions, OAuth handshakes, and role-based access control for SaaS teams.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    deployment: 'Netlify + Render',
    links: {
      github: 'https://github.com/kingsleykanu/authapp',
      live: 'https://authapp.iamkay.eu',
      caseStudy: 'https://iamkay.eu/case-studies/authapp'
    }
  },
  {
    title: 'SyncSkilled',
    summary: 'Skills exchange marketplace connecting mentors and learners with credit based incentives and scheduling automation.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    deployment: 'AWS Amplify',
    links: {
      github: 'https://github.com/kingsleykanu/syncskilled',
      live: 'https://syncskilled.com',
      caseStudy: 'https://iamkay.eu/case-studies/syncskilled'
    }
  },
  {
    title: 'Portfolio Core',
    summary: 'This portfolio system featuring dynamic GitHub insights, SEO metadata, and Netlify Forms automation.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    deployment: 'Netlify',
    links: {
      github: 'https://github.com/kingsleykanu/iamkay',
      live: 'https://iamkay.eu',
      caseStudy: 'https://iamkay.eu/case-studies/portfolio-core'
    }
  },
  {
    title: 'InvoiceLink Mini',
    summary: 'E-invoicing prototype integrating with FIRS APIs to manage compliance-ready invoice submissions.',
    stack: ['React', 'Node.js', 'REST API'],
    deployment: 'Render',
    links: {
      github: 'https://github.com/kingsleykanu/invoicelink-mini',
      caseStudy: 'https://iamkay.eu/case-studies/invoicelink-mini'
    }
  },
  {
    title: 'QuickLinker (AI Project Generator)',
    summary: 'Generates starter codebases from product ideas using OpenAI Codex prompts and scaffolding pipelines.',
    stack: ['React', 'Express', 'OpenAI API'],
    deployment: 'Netlify',
    links: {
      github: 'https://github.com/kingsleykanu/quicklinker',
      caseStudy: 'https://iamkay.eu/case-studies/quicklinker'
    }
  },
  {
    title: 'API Visualizer',
    summary: 'Interactive console for exploring REST endpoints, caching responses, and sharing API snapshots with teams.',
    stack: ['Vite', 'TypeScript', 'Axios'],
    deployment: 'Netlify',
    links: {
      github: 'https://github.com/kingsleykanu/api-visualizer',
      live: 'https://api-visualizer.iamkay.eu'
    }
  },
  {
    title: 'Form Validator Pro',
    summary: 'Reusable validation toolkit for complex form workflows exporting JSON rule sets and accessible error states.',
    stack: ['React', 'Zod'],
    deployment: 'Netlify',
    links: {
      github: 'https://github.com/kingsleykanu/form-validator-pro',
      live: 'https://form-validator-pro.netlify.app'
    }
  }
];

export const socialLinks = {
  github: 'https://github.com/kingsleykanu',
  linkedin: 'https://www.linkedin.com/in/kingsleykanu',
  cv: heroContent.ctas.cv,
  email: 'mailto:contact@iamkay.eu'
};

export const contactCopy = {
  heading: 'Ready to collaborate on your next release?',
  body:
    'Drop a message with your goals, timeline, and tech stack. You will hear back within two business days with a kickoff slot or clarifying questions.',
  fallbackMailto: 'contact@iamkay.eu'
};
