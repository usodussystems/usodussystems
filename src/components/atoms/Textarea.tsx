import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  error,
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 body-font text-sm text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-reflex-blue focus:outline-none transition-colors body-font resize-none ${
          error ? 'border-red-500' : ''
        } ${className}`}
        rows={4}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 body-font">{error}</p>
      )}
    </div>
  );
};
