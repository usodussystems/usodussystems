import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Reveal } from '../atoms/Reveal';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const brandElements = [
    {
      symbol: '>',
      title: t.about.brandElements.terminal.title,
      description: t.about.brandElements.terminal.description,
      color: 'text-process-blue-bright',
      chip: 'bg-process-blue/10 border-process-blue/25',
    },
    {
      symbol: '.',
      title: t.about.brandElements.people.title,
      description: t.about.brandElements.people.description,
      color: 'text-purple-bright',
      chip: 'bg-purple/10 border-purple/25',
    },
    {
      symbol: '|',
      title: t.about.brandElements.pipeProcess.title,
      description: t.about.brandElements.pipeProcess.description,
      color: 'text-teal-bright',
      chip: 'bg-teal/10 border-teal/25',
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-navy-900 overflow-hidden">
      <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full bg-teal/15 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="heading-font text-white mb-6">
                {t.about.title}
              </h2>
              <p className="body-font text-lg text-white/70 leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </Reveal>

          {/* Brand Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {brandElements.map((element, index) => (
              <Reveal key={element.symbol} delay={index * 0.08}>
                <div className="glass-card p-8 text-center h-full hover:border-white/25 transition-colors">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl border ${element.chip} mb-4`}>
                    <span className={`heading-font ${element.color}`} style={{ fontSize: '2.5rem' }}>
                      {element.symbol}
                    </span>
                  </div>
                  <h4 className="heading-font text-white mb-2">{element.title}</h4>
                  <p className="body-font text-sm text-white/60">{element.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Etymology: mini terminal strip */}
          <Reveal>
            <div className="mt-16 glass-card overflow-hidden border-l-2 border-l-process-blue">
              <div className="px-8 pt-6 font-mono text-sm text-teal-bright">
                $ man usodus
              </div>
              <div className="p-8 pt-4">
                <h3 className="heading-font text-process-blue-bright mb-4">{t.about.etymologyTitle}</h3>
                <p className="body-font text-white/70 leading-relaxed">
                  {t.about.etymologyBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
