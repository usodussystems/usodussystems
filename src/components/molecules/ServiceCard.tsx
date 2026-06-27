import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: 'purple' | 'yellow' | 'orange' | 'teal' | 'magenta';
  badge?: string;
  isPrimary?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  accentColor,
  badge,
  isPrimary = false,
}) => {
  const colorMap = {
    purple: 'text-purple',
    yellow: 'text-yellow',
    orange: 'text-orange',
    teal: 'text-teal',
    magenta: 'text-magenta'
  };

  const bgColorMap = {
    purple: 'bg-purple',
    yellow: 'bg-yellow',
    orange: 'bg-orange',
    teal: 'bg-teal',
    magenta: 'bg-magenta'
  };

  if (isPrimary) {
    return (
      <div className="group p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-teal border-opacity-30 hover:border-opacity-100 md:col-span-1">
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex p-4 rounded-xl ${bgColorMap[accentColor]} bg-opacity-15 group-hover:bg-opacity-20 transition-all`}>
            <Icon className={`w-10 h-10 ${colorMap[accentColor]}`} />
          </div>
          {badge && (
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${bgColorMap[accentColor]} bg-opacity-10 ${colorMap[accentColor]} uppercase tracking-wider`}>
              {badge}
            </span>
          )}
        </div>
        <h3 className="mb-3 heading-font text-2xl text-gray-900">{title}</h3>
        <p className="text-gray-700 body-font leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-reflex-blue hover:border-opacity-30">
      <div className={`inline-flex p-4 rounded-xl ${bgColorMap[accentColor]} bg-opacity-10 mb-6`}>
        <Icon className={`w-8 h-8 ${colorMap[accentColor]}`} />
      </div>
      <h3 className="mb-4 heading-font text-gray-900">{title}</h3>
      <p className="text-gray-600 body-font leading-relaxed">{description}</p>
    </div>
  );
};
