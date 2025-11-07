import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
  className?: string;
};

type AnchorButtonProps = BaseProps & {
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type RegularButtonProps = BaseProps & {
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = AnchorButtonProps | RegularButtonProps;

type AnchorButtonRest = Omit<AnchorButtonProps, keyof BaseProps>;
type RegularButtonRest = Omit<RegularButtonProps, keyof BaseProps>;
type ButtonRestProps = AnchorButtonRest | RegularButtonRest;

const isAnchorButton = (props: ButtonRestProps): props is AnchorButtonRest =>
  'href' in props && typeof props.href === 'string';

export const Button = ({ children, variant = 'primary', icon, className, ...props }: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const variants: Record<'primary' | 'ghost', string> = {
    primary:
      'bg-primary-500 text-white shadow-glow hover:bg-primary-400 focus-visible:outline-primary-500 disabled:cursor-not-allowed disabled:opacity-60',
    ghost:
      'border border-base-200/80 bg-white/40 text-base-700 hover:bg-white/60 focus-visible:outline-primary-500 dark:border-white/20 dark:bg-white/5 dark:text-base-50'
  };

  const rest = props as ButtonRestProps;

  if (isAnchorButton(rest)) {
    const { href, ...anchorProps } = rest;
    return (
      <a href={href} className={clsx(baseStyles, variants[variant], className)} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = rest as RegularButtonRest;

  return (
    <button type={type} className={clsx(baseStyles, variants[variant], className)} {...buttonProps}>
      {icon}
      <span>{children}</span>
    </button>
  );
};
