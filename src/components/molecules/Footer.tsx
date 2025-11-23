import React from 'react';
import { Logo } from '../atoms/Logo';
import { useTranslation } from '../../lib/i18n';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo variant="footer" size="sm" withSlogan />
            <p className="text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="mb-4">{t.services.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.services.platforms.title}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.services.transformation.title}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.services.consulting.title}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.services.integration.title}
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mb-4">{t.nav.about}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.nav.about}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.nav.news}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.nav.contact}
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                {t.nav.clientArea}
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@usodus.com</span>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li> */}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span><br />Belo Horizonte - MG, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Usodus Systems. {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
