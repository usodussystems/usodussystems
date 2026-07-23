import React from 'react';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { NetworkCanvas } from '../atoms/NetworkCanvas';
import { useLanguage } from '../../lib/LanguageContext';
import { NavigateFn } from '../../lib/navigation';
import { ArrowLeft, Lock, Mail } from 'lucide-react';

interface ClientAreaPageProps {
  onNavigate: NavigateFn;
}

export const ClientAreaPage: React.FC<ClientAreaPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleContact = () => {
    onNavigate('home');
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <main className="relative min-h-screen bg-navy-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <NetworkCanvas density={30} />
      </div>
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-reflex-blue/25 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate('home')}
          className="mb-8 text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.news.backToHome}
        </Button>

        <div className="glass-card shadow-2xl shadow-reflex-blue/30 p-8 md:p-12">
          {/* Logo (inverted variant for dark background) */}
          <div className="flex justify-center mb-8">
            <Logo variant="footer" size="sm" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="heading-font text-white mb-2">
              {t.clientArea.title}
            </h1>
            <p className="body-font text-white/70">
              {t.clientArea.unavailableTitle}
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-white/5 rounded-lg border border-white/10 text-center">
              <Lock className="w-10 h-10 text-process-blue-bright mx-auto mb-3" />
              <p className="body-font text-white/70">
                {t.clientArea.unavailableBody}
              </p>
            </div>

            <Button
              type="button"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleContact}
            >
              {t.clientArea.contactSupport}
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
