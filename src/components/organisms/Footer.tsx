import React from 'react';
import { Logo } from '../atoms/Logo';
import { useLanguage } from '../../lib/LanguageContext';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-reflex-blue text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <Logo variant="footer" size="md" className="mb-4" />
            <p className="body-font text-sm text-white text-opacity-80">
              {t.footer.tagline}
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="heading-font mb-4 text-white">{t.footer.company}</h4>
            <ul className="space-y-2 body-font text-sm">
              <li>
                <a href="#about" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity">
                  {t.nav.solutions}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="heading-font mb-4 text-white">{t.footer.legal}</h4>
            <ul className="space-y-2 body-font text-sm">
              <li>
                <a href="#privacy" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white text-opacity-80 hover:text-opacity-100 transition-opacity">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-font mb-4 text-white">{t.nav.contact}</h4>
            <ul className="space-y-3 body-font text-sm text-white text-opacity-80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@usodus.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-font text-sm text-white text-opacity-80">
              © {currentYear} Usodus Systems. {t.footer.rights}
            </p>
            <div className="flex gap-4">
              {/* Social media links can be added here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};