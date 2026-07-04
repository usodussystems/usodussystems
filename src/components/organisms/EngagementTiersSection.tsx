import React from 'react';
import { Clock, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

export const EngagementTiersSection: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      icon: Clock,
      title: t.engagement.tiers.quickWins.title,
      timeline: t.engagement.tiers.quickWins.timeline,
      description: t.engagement.tiers.quickWins.description,
      highlights: t.engagement.tiers.quickWins.highlights,
      color: 'orange',
      bgColor: 'bg-orange',
    },
    {
      icon: Zap,
      title: t.engagement.tiers.productionReady.title,
      timeline: t.engagement.tiers.productionReady.timeline,
      description: t.engagement.tiers.productionReady.description,
      highlights: t.engagement.tiers.productionReady.highlights,
      color: 'teal',
      bgColor: 'bg-teal',
    },
    {
      icon: Trophy,
      title: t.engagement.tiers.enterpriseScale.title,
      timeline: t.engagement.tiers.enterpriseScale.timeline,
      description: t.engagement.tiers.enterpriseScale.description,
      highlights: t.engagement.tiers.enterpriseScale.highlights,
      color: 'purple',
      bgColor: 'bg-purple',
    },
  ];

  const colorMap = {
    orange: 'text-orange',
    teal: 'text-teal',
    purple: 'text-purple',
  };

  const bgColorMap = {
    orange: 'bg-orange',
    teal: 'bg-teal',
    purple: 'bg-purple',
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-font text-reflex-blue mb-4">
            {t.engagement.title}
          </h2>
          <p className="body-font text-xl text-gray-600 max-w-2xl mx-auto">
            {t.engagement.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-reflex-blue hover:border-opacity-30 flex flex-col"
              >
                {/* Timeline badge */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${bgColorMap[tier.color as keyof typeof bgColorMap]} bg-opacity-10 mb-4`}>
                  <Icon className={`w-7 h-7 ${colorMap[tier.color as keyof typeof colorMap]}`} />
                </div>

                <h3 className="heading-font text-xl text-gray-900 mb-2">{tier.title}</h3>
                <p className={`body-font text-sm font-semibold ${colorMap[tier.color as keyof typeof colorMap]} mb-4`}>
                  {tier.timeline}
                </p>

                <p className="text-gray-600 body-font leading-relaxed mb-6 flex-grow">
                  {tier.description}
                </p>

                <div className="space-y-2">
                  {tier.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center text-sm text-gray-700">
                      <span className={`w-2 h-2 rounded-full ${bgColorMap[tier.color as keyof typeof bgColorMap]} mr-3`}></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-reflex-blue to-process-blue rounded-2xl text-center">
          <p className="body-font text-white text-lg mb-4">
            {t.engagement.ctaText}
          </p>
          <button className="px-8 py-3 bg-white text-reflex-blue rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {t.engagement.ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};
