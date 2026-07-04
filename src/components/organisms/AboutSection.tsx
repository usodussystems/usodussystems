import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Terminal, Users, Workflow } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const brandElements = [
    {
      icon: Terminal,
      symbol: '>',
      title: t.about.brandElements.terminal.title,
      description: t.about.brandElements.terminal.description,
      color: 'text-reflex-blue',
      bgColor: 'bg-reflex-blue',
    },
    {
      icon: Users,
      symbol: '.',
      title: t.about.brandElements.people.title,
      description: t.about.brandElements.people.description,
      color: 'text-purple',
      bgColor: 'bg-purple',
    },
    {
      icon: Workflow,
      symbol: '|',
      title: t.about.brandElements.pipeProcess.title,
      description: t.about.brandElements.pipeProcess.description,
      color: 'text-teal',
      bgColor: 'bg-teal',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-font text-reflex-blue mb-6">
              {t.about.title}
            </h2>
            <p className="body-font text-lg text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Brand Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {brandElements.map((element, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${element.bgColor} bg-opacity-10 mb-4`}>
                  <span className={`heading-font ${element.color}`} style={{ fontSize: '2rem' }}>
                    {element.symbol}
                  </span>
                </div>
                <h4 className="heading-font text-gray-900 mb-2">{element.title}</h4>
                <p className="body-font text-sm text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>

          {/* Etymology Section */}
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-l-4 border-reflex-blue">
            <h3 className="heading-font text-reflex-blue mb-4">{t.about.etymologyTitle}</h3>
            <p className="body-font text-gray-700 leading-relaxed">
              {t.about.etymologyBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
