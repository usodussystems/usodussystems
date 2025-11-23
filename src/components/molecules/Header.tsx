import React, { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { LanguageSwitcher } from '../atoms/LanguageSwitcher';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../../lib/i18n';

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'news', label: t.nav.news },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
          >
            <Logo variant="reflex-blue" withSlogan />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors hover:text-primary ${
                  currentSection === item.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button 
              onClick={() => onNavigate('client-area')}
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90"
            >
              {t.nav.clientArea}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                  currentSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                onNavigate('client-area');
                setMobileMenuOpen(false);
              }}
              className="w-full bg-primary hover:bg-primary/90"
            >
              {t.nav.clientArea}
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
