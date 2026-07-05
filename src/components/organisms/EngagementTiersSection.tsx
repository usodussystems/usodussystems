import React from 'react';
import { Clock, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';
import { Reveal } from '../atoms/Reveal';

export const EngagementTiersSection: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      icon: Clock,
      title: t.engagement.tiers.quickWins.title,
      timeline: t.engagement.tiers.quickWins.timeline,
      description: t.engagement.tiers.quickWins.description,
      highlights: t.engagement.tiers.quickWins.highlights,
      text: 'text-orange-bright',
      chip: 'bg-orange/10 border-orange/25',
      topBorder: 'border-t-orange',
      dot: 'bg-orange',
      glow: 'hover:shadow-orange/40',
    },
    {
      icon: Zap,
      title: t.engagement.tiers.productionReady.title,
      timeline: t.engagement.tiers.productionReady.timeline,
      description: t.engagement.tiers.productionReady.description,
      highlights: t.engagement.tiers.productionReady.highlights,
      text: 'text-teal-bright',
      chip: 'bg-teal/10 border-teal/25',
      topBorder: 'border-t-teal',
      dot: 'bg-teal',
      glow: 'hover:shadow-teal/40',
    },
    {
      icon: Trophy,
      title: t.engagement.tiers.enterpriseScale.title,
      timeline: t.engagement.tiers.enterpriseScale.timeline,
      description: t.engagement.tiers.enterpriseScale.description,
      highlights: t.engagement.tiers.enterpriseScale.highlights,
      text: 'text-purple-bright',
      chip: 'bg-purple/10 border-purple/25',
      topBorder: 'border-t-purple',
      dot: 'bg-purple',
      glow: 'hover:shadow-purple/40',
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-teal/15 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="heading-font text-white mb-4">
              {t.engagement.title}
            </h2>
            <p className="body-font text-xl text-white/60 max-w-2xl mx-auto">
              {t.engagement.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <Reveal key={tier.title} delay={index * 0.08} className="h-full">
                <div className={`relative p-8 glass-card border-t-2 ${tier.topBorder} hover:border-white/25 hover:shadow-[0_0_40px_-10px] ${tier.glow} motion-safe:hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border ${tier.chip} mb-4`}>
                    <Icon className={`w-7 h-7 ${tier.text}`} />
                  </div>

                  <h3 className="heading-font text-xl text-white mb-2">{tier.title}</h3>
                  <p className={`font-mono text-sm font-semibold ${tier.text} mb-4`}>
                    {tier.timeline}
                  </p>

                  <p className="text-white/70 body-font leading-relaxed mb-6 flex-grow">
                    {tier.description}
                  </p>

                  <div className="space-y-2">
                    {tier.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center text-sm text-white/70">
                        <span className={`w-2 h-2 rounded-full ${tier.dot} mr-3`}></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA band */}
        <Reveal>
          <div className="relative mt-16 p-8 bg-linear-to-r from-reflex-blue to-process-blue rounded-2xl text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid" />
            <div className="relative z-10">
              <p className="body-font text-white text-lg mb-4">
                {t.engagement.ctaText}
              </p>
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-reflex-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t.engagement.ctaButton}
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
