import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  onReadMore?: () => void;
}

export const NewsCard: React.FC<NewsCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  readTime,
  image,
  category,
  onReadMore 
}) => {
  const { t } = useLanguage();

  return (
    <article className="group glass-card overflow-hidden hover:border-process-blue/40 hover:shadow-[0_0_40px_-10px] hover:shadow-process-blue/40 motion-safe:hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-90 motion-safe:group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-process-blue/15 border border-process-blue/25 backdrop-blur-md text-process-blue-bright text-sm body-font rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/50 mb-3 body-font">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={date}>{date}</time>
          </span>
          <span>{readTime}</span>
        </div>

        <h3 className="mb-3 heading-font text-white group-hover:text-process-blue-bright transition-colors">
          {title}
        </h3>

        <p className="text-white/60 body-font mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        <button
          onClick={onReadMore}
          className="inline-flex items-center gap-2 text-process-blue-bright body-font hover:gap-3 transition-all self-start"
        >
          {t.news.readMore}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
