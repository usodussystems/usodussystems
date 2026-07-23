import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed body-font focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-process-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 motion-safe:active:scale-[0.98]';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-linear-to-r from-reflex-blue to-process-blue text-white shadow-lg shadow-process-blue/25 hover:shadow-xl hover:shadow-process-blue/40 hover:brightness-110',
  secondary: 'bg-process-blue text-white hover:brightness-110 shadow-lg shadow-process-blue/25 hover:shadow-xl',
  outline: 'border-2 border-white/25 text-white hover:border-process-blue hover:bg-process-blue/10',
  ghost: 'text-white/80 hover:text-white hover:bg-white/10',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

/**
 * Shared button styling. Use this to make a semantic element (e.g. an anchor
 * for a real link) look like a Button without nesting interactive elements.
 */
export const buttonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className = '',
) => `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  return (
    <button className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
};
