import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Reveal } from '../atoms/Reveal';
import { Cloud, Lock, Zap, Database, BarChart, Users } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    { icon: Zap, title: t.solutions.items.agentArchitecture.title, subtitle: t.solutions.items.agentArchitecture.subtitle, color: 'text-teal-bright', chip: 'bg-teal/10 border-teal/25' },
    { icon: Database, title: t.solutions.items.dataIntegration.title, subtitle: t.solutions.items.dataIntegration.subtitle, color: 'text-purple-bright', chip: 'bg-purple/10 border-purple/25' },
    { icon: Lock, title: t.solutions.items.governance.title, subtitle: t.solutions.items.governance.subtitle, color: 'text-orange-bright', chip: 'bg-orange/10 border-orange/25' },
    { icon: Users, title: t.solutions.items.humanInLoop.title, subtitle: t.solutions.items.humanInLoop.subtitle, color: 'text-magenta-bright', chip: 'bg-magenta/10 border-magenta/25' },
    { icon: Cloud, title: t.solutions.items.cloudDeployment.title, subtitle: t.solutions.items.cloudDeployment.subtitle, color: 'text-yellow', chip: 'bg-yellow/10 border-yellow/25' },
    { icon: BarChart, title: t.solutions.items.performanceMonitoring.title, subtitle: t.solutions.items.performanceMonitoring.subtitle, color: 'text-process-blue-bright', chip: 'bg-process-blue/10 border-process-blue/25' },
  ];

  return (
    <section id="solutions" className="relative py-20 bg-navy-900 overflow-hidden">
      <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] rounded-full bg-purple/15 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="heading-font text-white mb-4">
              {t.solutions.title}
            </h2>
            <p className="body-font text-xl text-white/60 max-w-2xl mx-auto">
              {t.solutions.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.06} className="h-full">
              <div className="flex flex-col items-center p-6 glass-card hover:border-white/25 transition-all duration-300 group cursor-pointer h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border ${solution.chip} mb-3 group-hover:scale-110 transition-transform`}>
                  <solution.icon className={`w-8 h-8 ${solution.color}`} />
                </div>
                <h4 className="heading-font text-sm text-center text-white mb-1">{solution.title}</h4>
                <p className="body-font text-xs text-white/50 text-center">{solution.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
