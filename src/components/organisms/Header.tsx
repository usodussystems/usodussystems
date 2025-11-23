import React, { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { LanguageSelector } from '../molecules/LanguageSelector';
import { useLanguage } from '../../lib/LanguageContext';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: t.nav.home, action: () => { onNavigate('home'); setMobileMenuOpen(false); } },
    { label: t.nav.about, action: () => scrollToSection('about') },
    { label: t.nav.services, action: () => scrollToSection('services') },
    { label: t.nav.solutions, action: () => scrollToSection('solutions') },
    { label: t.nav.news, action: () => { onNavigate('news'); setMobileMenuOpen(false); } },
    { label: t.nav.contact, action: () => scrollToSection('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="focus:outline-none focus:ring-2 focus:ring-reflex-blue rounded-lg"
          >
            <Logo variant="navbar" size="sm" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="body-font text-gray-700 hover:text-reflex-blue transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate('client-area')}
              className="hidden lg:inline-flex"
            >
              {t.nav.clientArea}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-reflex-blue transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="body-font text-gray-700 hover:text-reflex-blue transition-colors text-left px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => { onNavigate('client-area'); setMobileMenuOpen(false); }}
                  className="w-full"
                >
                  {t.nav.clientArea}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};