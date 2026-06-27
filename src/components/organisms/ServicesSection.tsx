import React from 'react';
import { ServiceCard } from '../molecules/ServiceCard';
import { useLanguage } from '../../lib/LanguageContext';
import { Zap, Layers, Brain, Users } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const primaryService = {
    icon: Brain,
    title: t.services.agenticTransformation.title,
    description: t.services.agenticTransformation.description,
    accentColor: 'teal' as const,
    badge: t.services.agenticTransformation.badge,
    isPrimary: true,
  };

  const complementaryServices = [
    {
      icon: Layers,
      title: t.services.platformDevelopment.title,
      description: t.services.platformDevelopment.description,
      accentColor: 'purple' as const,
    },
    {
      icon: Zap,
      title: t.services.agenticConsulting.title,
      description: t.services.agenticConsulting.description,
      accentColor: 'orange' as const,
    },
    {
      icon: Users,
      title: t.services.userExperience.title,
      description: t.services.userExperience.description,
      accentColor: 'magenta' as const,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-font text-reflex-blue mb-4">
            {t.services.title}
          </h2>
          <p className="body-font text-xl text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Primary Service - Featured */}
        <div className="mb-12">
          <ServiceCard {...primaryService} />
        </div>

        {/* Complementary Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {complementaryServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
