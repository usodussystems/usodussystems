import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Terminal, Users, Workflow } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const brandElements = [
    {
      icon: Terminal,
      symbol: '>',
      title: 'Terminal',
      description: 'Represents command-line power and direct access to systems',
      color: 'text-reflex-blue',
      bgColor: 'bg-reflex-blue',
    },
    {
      icon: Users,
      symbol: '.',
      title: 'People',
      description: 'Our focus on user-centric solutions and human connection',
      color: 'text-purple',
      bgColor: 'bg-purple',
    },
    {
      icon: Workflow,
      symbol: '|',
      title: 'Pipe Process',
      description: 'The "so what?" that drives meaningful transformation',
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
            <h3 className="heading-font text-reflex-blue mb-4">sudo su</h3>
            <p className="body-font text-gray-700 leading-relaxed">
              Our name is derived from the Unix command "sudo su" - which grants super user privileges. 
              This represents our commitment to providing our clients with elevated access to digital 
              transformation, empowering them with the highest level of control and innovation in their platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
