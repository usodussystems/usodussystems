import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  };

  // Use different SVG for navbar and footer
  if (variant === 'navbar') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/logo-navbar.svg" 
          alt="Usodus Systems" 
          className={sizeMap[size]}
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center ${className}`}>
        <img 
          src="/logo-footer.svg" 
          alt="Usodus Systems" 
          className={sizeMap[size]}
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(100%)',
            maxWidth: '200px'
          }}
        />
      </div>
    );
  }

  // Default variant - original design
  const primaryColor = '#002D91';
  const secondaryColor = '#0084C6';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        className={sizeMap[size]} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Usodus Systems Logo"
      >
        {/* Circle element representing "." (people) */}
        <circle cx="60" cy="60" r="50" fill={primaryColor} opacity="0.1" />
        <circle cx="60" cy="60" r="35" fill={primaryColor} />
        
        {/* Terminal ">" symbol */}
        <path 
          d="M 40 45 L 55 60 L 40 75" 
          stroke="#FFFFFF" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Pipe "|" symbol */}
        <rect 
          x="70" 
          y="45" 
          width="6" 
          height="30" 
          fill={secondaryColor}
          rx="3"
        />
      </svg>
      
      <div className="flex flex-col">
        <span 
          className="heading-font tracking-tight"
          style={{ 
            color: primaryColor,
            fontSize: size === 'sm' ? '1.25rem' : size === 'md' ? '1.75rem' : '2.25rem',
            lineHeight: 1
          }}
        >
          Usodus
        </span>
        <span 
          className="body-font"
          style={{ 
            color: '#666',
            fontSize: size === 'sm' ? '0.625rem' : size === 'md' ? '0.75rem' : '0.875rem',
            letterSpacing: '0.05em'
          }}
        >
          SYSTEMS
        </span>
      </div>
    </div>
  );
};