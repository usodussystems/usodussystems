import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ 
  label, 
  error,
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 body-font text-sm text-white/70">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-white/5 border-2 border-white/15 rounded-lg text-white placeholder:text-white/35 focus:border-process-blue focus:outline-none transition-colors body-font ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 body-font">{error}</p>
      )}
    </div>
  );
};
