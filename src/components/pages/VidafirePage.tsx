import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { NavigateFn } from '../../lib/navigation';
import { Reveal } from '../atoms/Reveal';
import { Button, buttonClasses } from '../atoms/Button';
import {
  ArrowLeft,
  ExternalLink,
  ChartNoAxesCombined,
  Check,
  Flame,
  Landmark,
  LayoutDashboard,
  ShieldCheck,
  ShieldAlert,
  SlidersHorizontal,
  Target,
  WalletCards,
} from 'lucide-react';

interface VidafirePageProps {
  onNavigate: NavigateFn;
}

const VIDAFIRE_URL = 'https://vidafire.usodus.com';
// Single source of truth for the displayed domain (strip the protocol).
const VIDAFIRE_HOST = VIDAFIRE_URL.replace(/^https?:\/\//, '');

// One icon per feature, in the same order as the translated `features` array.
const FEATURE_ICONS = [
  LayoutDashboard,
  WalletCards,
  Landmark,
  Target,
  SlidersHorizontal,
  ChartNoAxesCombined,
];

export const VidafirePage: React.FC<VidafirePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const v = t.vidafire;

  return (
    <main className="min-h-screen bg-navy-950">
      {/* Hero */}
      <section className="relative py-20 bg-linear-to-br from-reflex-blue to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] rounded-full bg-teal/25 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('home')}
            className="mb-8 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {v.ctaSecondary}
          </Button>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 body-font text-sm px-4 py-1.5 rounded-full border border-white/20 bg-white/10 mb-6">
              <Flame className="w-4 h-4 text-teal-bright" />
              {v.badge}
            </span>

            <h1 className="heading-font mb-4">{v.name}</h1>
            <p className="heading-font text-2xl text-teal-bright mb-6">{v.tagline}</p>
            <p className="body-font text-xl text-white/90 mb-8">{v.intro}</p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={VIDAFIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('primary', 'lg')}
              >
                {v.ctaPrimary}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <span className="body-font text-sm text-white/80 font-mono">{VIDAFIRE_HOST}</span>
            </div>

            <p className="body-font text-sm text-teal-bright mt-6">{v.freeBadge}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] rounded-full bg-purple/15 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="heading-font text-white mb-4">{v.featuresTitle}</h2>
              <p className="body-font text-xl text-white/60 max-w-2xl mx-auto">
                {v.featuresSubtitle}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {v.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? ShieldCheck;
              return (
                <Reveal key={feature.title} delay={(index % 3) * 0.08} className="h-full">
                  <div className="glass-card p-6 h-full hover:border-white/25 transition-all duration-300 group">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl border border-teal/25 bg-teal/10 mb-4 motion-safe:group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-teal-bright" />
                    </div>
                    <h3 className="heading-font text-lg text-white mb-2">{feature.title}</h3>
                    <p className="body-font text-sm text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you can do */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] rounded-full bg-reflex-blue/25 blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="heading-font text-white mb-4">{v.useTitle}</h2>
              <p className="body-font text-xl text-white/60 mb-10">{v.useSubtitle}</p>
            </Reveal>

            <ul className="space-y-4">
              {v.useCases.map((useCase, index) => (
                <li key={useCase}>
                  <Reveal delay={(index % 4) * 0.05}>
                    <div className="glass-card p-5 body-font text-white/80 flex gap-4">
                      <Check className="w-5 h-5 mt-0.5 text-teal-bright flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="relative py-16 bg-navy-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto glass-card border-orange/30 p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <ShieldAlert className="w-6 h-6 text-orange-bright" />
              <h2 className="heading-font text-2xl text-white">{v.disclaimerTitle}</h2>
              <span className="body-font text-xs px-3 py-1 rounded-full border border-orange/30 bg-orange/10 text-orange-bright">
                {v.disclaimerBadge}
              </span>
            </div>
            <div className="space-y-4">
              {v.disclaimerBody.map((paragraph) => (
                <p key={paragraph} className="body-font text-white/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-font text-white mb-4">{v.ctaTitle}</h2>
            <p className="body-font text-xl text-white/70 mb-8">{v.ctaBody}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={VIDAFIRE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('primary', 'lg')}
              >
                {v.ctaPrimary}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Button variant="outline" size="lg" onClick={() => onNavigate('home')}>
                {v.ctaSecondary}
              </Button>
            </div>
            <p className="body-font text-sm text-teal-bright mt-6">{v.freeBadge}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
