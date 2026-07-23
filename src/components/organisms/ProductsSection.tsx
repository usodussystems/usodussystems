import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Reveal } from '../atoms/Reveal';
import { Button } from '../atoms/Button';
import { HeartPulse, ArrowRight, Check } from 'lucide-react';

interface ProductsSectionProps {
  onNavigate: (page: 'home' | 'news' | 'client-area' | 'vidafire') => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section id="products" className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-teal/20 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="heading-font text-white mb-4">{t.products.title}</h2>
            <p className="body-font text-xl text-white/60 max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="glass-card p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-teal/25 bg-teal/10 shrink-0">
                <HeartPulse className="w-10 h-10 text-teal-bright" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="heading-font text-2xl text-white">{t.products.vidafire.name}</h3>
                  <span className="body-font text-xs px-3 py-1 rounded-full border border-teal/25 bg-teal/10 text-teal-bright">
                    {t.products.vidafire.badge}
                  </span>
                </div>
                <p className="body-font text-process-blue-bright mb-3">{t.products.vidafire.tagline}</p>
                <p className="body-font text-white/70 leading-relaxed mb-6">
                  {t.products.vidafire.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {t.products.vidafire.highlights.map((highlight) => (
                    <li key={highlight} className="body-font text-sm text-white/70 flex gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-teal-bright flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="primary" onClick={() => onNavigate('vidafire')}>
                  {t.products.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
