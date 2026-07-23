import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { LanguageSelector } from '../molecules/LanguageSelector';
import { useLanguage } from '../../lib/LanguageContext';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
  currentPage: string;
}

const SECTION_IDS = ['about', 'services', 'solutions', 'products', 'contact'];

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Scroll-spy: highlight the nav item for the home section crossing the
  // viewport middle. The narrow root band keeps at most one section active.
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(null);
      return;
    }
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          } else {
            setActiveSection((current) => (current === entry.target.id ? null : current));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [currentPage]);

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

  const navItems: { label: string; action: () => void; section?: string }[] = [
    { label: t.nav.home, action: () => { onNavigate('home'); setMobileMenuOpen(false); } },
    { label: t.nav.about, section: 'about', action: () => scrollToSection('about') },
    { label: t.nav.services, section: 'services', action: () => scrollToSection('services') },
    { label: t.nav.solutions, section: 'solutions', action: () => scrollToSection('solutions') },
    { label: t.nav.products, section: 'products', action: () => scrollToSection('products') },
    { label: t.nav.news, action: () => { onNavigate('news'); setMobileMenuOpen(false); } },
    { label: t.nav.contact, section: 'contact', action: () => scrollToSection('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (inverted variant — navbar PNG is drawn for white backgrounds) */}
          <button
            onClick={() => onNavigate('home')}
            className="focus:outline-none focus:ring-2 focus:ring-process-blue rounded-lg"
          >
            <Logo variant="footer" size="sm" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.section != null && item.section === activeSection;
              return (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`relative body-font transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:bg-process-blue-bright after:transition-transform after:duration-300 ${
                    isActive
                      ? 'text-process-blue-bright after:scale-x-100'
                      : 'text-white/70 hover:text-white after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
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
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label={t.nav.toggleMenu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = item.section != null && item.section === activeSection;
                return (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`body-font transition-colors text-left px-4 py-2 ${
                      isActive ? 'text-process-blue-bright' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
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
