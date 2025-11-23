import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Cloud, Lock, Smartphone, Code, Database, BarChart } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    { icon: Cloud, title: 'Cloud Platforms', color: 'text-purple', bgColor: 'bg-purple' },
    { icon: Lock, title: 'Security Solutions', color: 'text-orange', bgColor: 'bg-orange' },
    { icon: Smartphone, title: 'Mobile Applications', color: 'text-teal', bgColor: 'bg-teal' },
    { icon: Code, title: 'Custom Development', color: 'text-magenta', bgColor: 'bg-magenta' },
    { icon: Database, title: 'Data Management', color: 'text-yellow', bgColor: 'bg-yellow' },
    { icon: BarChart, title: 'Analytics & BI', color: 'text-process-blue', bgColor: 'bg-process-blue' },
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-font text-reflex-blue mb-4">
            {t.solutions.title}
          </h2>
          <p className="body-font text-xl text-gray-600 max-w-2xl mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${solution.bgColor} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`w-8 h-8 ${solution.color}`} />
              </div>
              <h4 className="heading-font text-sm text-center text-gray-900">{solution.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
