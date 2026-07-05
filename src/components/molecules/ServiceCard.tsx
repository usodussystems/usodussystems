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

/* Bright tints for text on navy; raw brand colors only as backgrounds/borders/glows. */
const accentMap = {
  purple: {
    text: 'text-purple-bright',
    chip: 'bg-purple/10 border-purple/25',
    hover: 'hover:border-purple/40 hover:shadow-[0_0_40px_-10px] hover:shadow-purple/40',
  },
  yellow: {
    text: 'text-yellow',
    chip: 'bg-yellow/10 border-yellow/25',
    hover: 'hover:border-yellow/40 hover:shadow-[0_0_40px_-10px] hover:shadow-yellow/40',
  },
  orange: {
    text: 'text-orange-bright',
    chip: 'bg-orange/10 border-orange/25',
    hover: 'hover:border-orange/40 hover:shadow-[0_0_40px_-10px] hover:shadow-orange/40',
  },
  teal: {
    text: 'text-teal-bright',
    chip: 'bg-teal/10 border-teal/25',
    hover: 'hover:border-teal/40 hover:shadow-[0_0_40px_-10px] hover:shadow-teal/40',
  },
  magenta: {
    text: 'text-magenta-bright',
    chip: 'bg-magenta/10 border-magenta/25',
    hover: 'hover:border-magenta/40 hover:shadow-[0_0_40px_-10px] hover:shadow-magenta/40',
  },
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  accentColor,
  badge,
  isPrimary = false,
}) => {
  const accent = accentMap[accentColor];

  if (isPrimary) {
    return (
      <div className={`group relative glass-card p-8 md:p-10 transition-all duration-300 ${accent.hover}`}>
        {/* Gradient hairline top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-teal to-process-blue rounded-t-2xl" />
        <div className="flex items-start justify-between mb-6">
          <div className={`inline-flex p-4 rounded-xl border ${accent.chip} transition-transform duration-300 motion-safe:group-hover:-translate-y-1`}>
            <Icon className={`w-10 h-10 ${accent.text}`} />
          </div>
          {badge && (
            <span className={`font-mono text-xs font-semibold px-3 py-1 rounded-full border ${accent.chip} ${accent.text} uppercase tracking-wider`}>
              {badge}
            </span>
          )}
        </div>
        <h3 className="mb-3 heading-font text-2xl text-white">{title}</h3>
        <p className="text-white/70 body-font leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className={`group glass-card p-8 transition-all duration-300 h-full ${accent.hover}`}>
      <div className={`inline-flex p-4 rounded-xl border ${accent.chip} mb-6 transition-transform duration-300 motion-safe:group-hover:-translate-y-1`}>
        <Icon className={`w-8 h-8 ${accent.text}`} />
      </div>
      <h3 className="mb-4 heading-font text-white">{title}</h3>
      <p className="text-white/70 body-font leading-relaxed">{description}</p>
    </div>
  );
};
