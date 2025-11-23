import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Language } from '../../lib/i18n';
import { Globe } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-brand-grey" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-2 py-1 text-sm body-font rounded transition-colors ${
              language === lang.code
                ? 'bg-reflex-blue text-white'
                : 'text-brand-grey hover:bg-gray-100'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};
