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
    primary: 'bg-reflex-blue text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    secondary: 'bg-process-blue text-white hover:opacity-90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-reflex-blue text-reflex-blue hover:bg-reflex-blue hover:text-white',
    ghost: 'text-reflex-blue hover:bg-reflex-blue hover:bg-opacity-10'
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
