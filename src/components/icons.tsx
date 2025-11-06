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
