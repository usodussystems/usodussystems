import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed body-font';
  
  const variants = {
    primary:
      'bg-linear-to-r from-reflex-blue to-process-blue text-white shadow-lg shadow-process-blue/25 hover:shadow-xl hover:shadow-process-blue/40 hover:brightness-110',
    secondary: 'bg-process-blue text-white hover:brightness-110 shadow-lg shadow-process-blue/25 hover:shadow-xl',
    outline: 'border-2 border-white/25 text-white hover:border-process-blue hover:bg-process-blue/10',
    ghost: 'text-white/80 hover:text-white hover:bg-white/10'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
