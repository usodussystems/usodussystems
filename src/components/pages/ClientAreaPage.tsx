import React from 'react';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { useLanguage } from '../../lib/LanguageContext';
import { ArrowLeft, Lock, Mail } from 'lucide-react';

interface ClientAreaPageProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
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
    <main className="min-h-screen bg-gradient-to-br from-reflex-blue via-process-blue to-purple flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate('home')}
          className="mb-8 text-white hover:bg-white hover:bg-opacity-20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.news.backToHome}
        </Button>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo variant="navbar" size="sm" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="heading-font text-reflex-blue mb-2">
              {t.clientArea.title}
            </h1>
            <p className="body-font text-gray-600">
              {t.clientArea.unavailableTitle}
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-5 bg-gray-50 rounded-lg border border-gray-200 text-center">
              <Lock className="w-10 h-10 text-reflex-blue mx-auto mb-3" />
              <p className="body-font text-gray-700">
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
