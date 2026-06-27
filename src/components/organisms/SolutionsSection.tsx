import React from 'react';
import { useLanguage } from '../../lib/LanguageContext';
import { Cloud, Lock, Zap, Database, BarChart, Users } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const { t } = useLanguage();

  const solutions = [
    { icon: Zap, title: 'Agent Architecture', subtitle: 'Design & Deployment', color: 'text-teal', bgColor: 'bg-teal' },
    { icon: Database, title: 'Data Integration', subtitle: 'Connectors & Pipelines', color: 'text-purple', bgColor: 'bg-purple' },
    { icon: Lock, title: 'Governance', subtitle: 'Compliance & Control', color: 'text-orange', bgColor: 'bg-orange' },
    { icon: Users, title: 'Human-in-Loop', subtitle: 'Oversight & Approval', color: 'text-magenta', bgColor: 'bg-magenta' },
    { icon: Cloud, title: 'Cloud Deployment', subtitle: 'Scalable Infrastructure', color: 'text-yellow', bgColor: 'bg-yellow' },
    { icon: BarChart, title: 'Performance Monitoring', subtitle: 'Analytics & ROI', color: 'text-process-blue', bgColor: 'bg-process-blue' },
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
              className="flex flex-col items-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-gray-200"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${solution.bgColor} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform`}>
                <solution.icon className={`w-8 h-8 ${solution.color}`} />
              </div>
              <h4 className="heading-font text-sm font-semibold text-center text-gray-900 mb-1">{solution.title}</h4>
              <p className="body-font text-xs text-gray-500 text-center">{solution.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
