import type { SVGProps } from 'react';

const iconProps = (props: SVGProps<SVGSVGElement>) => ({
  width: 20,
  height: 20,
  strokeWidth: 1.8,
  fill: 'none',
  stroke: 'currentColor',
  ...props
});

export const IconMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconSun = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m3.22-6.78L6.64 6.64m10.72 10.72 1.42 1.42m0-12.14-1.42 1.42M6.64 17.36 5.22 18.78" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M12 5v14m0 0-5-5m5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconExternal = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M18 3h3m0 0v3m0-3-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 13v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconGithub = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path
      d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-9 0C2.27.65 1.09 1 1.09 1a5.07 5.07 0 0 0-.13 3.78A5.44 5.44 0 0 0 0 6.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 5.5 17V21"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconMail = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...iconProps(props)}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m22 8-10 6L2 8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
