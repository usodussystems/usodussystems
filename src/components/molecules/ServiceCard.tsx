import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: 'purple' | 'yellow' | 'orange' | 'teal' | 'magenta';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  accentColor 
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
