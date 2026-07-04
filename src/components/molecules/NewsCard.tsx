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
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-reflex-blue text-white text-sm body-font rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-grey mb-3 body-font">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={date}>{date}</time>
          </span>
          <span>{readTime}</span>
        </div>
        
        <h3 className="mb-3 heading-font text-gray-900 group-hover:text-reflex-blue transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 body-font mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <button 
          onClick={onReadMore}
          className="inline-flex items-center gap-2 text-reflex-blue body-font hover:gap-3 transition-all"
        >
          {t.news.readMore}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
