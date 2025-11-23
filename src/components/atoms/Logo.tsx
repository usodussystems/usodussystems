import React from 'react';

interface LogoProps {
  variant?: 'navbar' | 'footer' | 'default';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'default',
  className = '',
  size = 'md'
}) => {
  const sizeMap: Record<NonNullable<LogoProps['size']>, string> = {
    sm: 'h-12',    // 40px
    md: 'h-16',    // 64px
    lg: 'h-20',    // 96px
    xl: 'h-24',    // 128px
    '2xl': 'h-28'  // 160px
  };

  // Use different SVG for navbar and footer
  const logoNavbar = () => {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo-navbar.png"
          alt="Usodus Systems"
          className={`${sizeMap[size as keyof typeof sizeMap]} w-auto`}
        />
      </div>
    );
  }

  const logoFooter = () => {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/logo-footer.png"
          alt="Usodus Systems"
          className={`${sizeMap[size as keyof typeof sizeMap]} w-auto`}
          style={{
            filter: 'brightness(0) saturate(100%) invert(100%)',
          }}
        />
      </div>
    );
  }
  const logoDefault = () => {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/favicon.svg"
          alt="Usodus Systems"
          className={`${sizeMap[size as keyof typeof sizeMap]} w-auto`}
        />
      </div>
    );
  }
  // Default variant - original design
  const primaryColor = '#002D91';
  const secondaryColor = '#0084C6';
  console.log(variant);

  return (
    variant === 'navbar' ? logoNavbar() : variant === 'footer' ? logoFooter() : logoDefault()
  );
};