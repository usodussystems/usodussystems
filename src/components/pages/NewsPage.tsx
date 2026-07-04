import React, { useEffect, useState } from 'react';
import { NewsCard } from '../molecules/NewsCard';
import { useLanguage } from '../../lib/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../atoms/Button';

interface NewsPageProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
  navigationVersion: number;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate, navigationVersion }) => {
  const { t } = useLanguage();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSlug(null);
  }, [navigationVersion]);

  const selectedArticle = t.news.items.find((item) => item.slug === selectedSlug);

  if (selectedArticle) {
    return (
      <main className="min-h-screen bg-white">
        <article>
          <section className="py-16 bg-gradient-to-br from-reflex-blue to-process-blue text-white">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex flex-wrap gap-3 mb-8">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSlug(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t.news.backToNews}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate('home')}
                  className="text-white hover:bg-white hover:bg-opacity-20"
                >
                  {t.news.backToHome}
                </Button>
              </div>

              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3 body-font text-sm text-white text-opacity-85 mb-5">
                  <span className="px-3 py-1 bg-white bg-opacity-15 rounded-full">{selectedArticle.category}</span>
                  <time dateTime={selectedArticle.date}>{selectedArticle.date}</time>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h1 className="heading-font mb-6">
                  {selectedArticle.title}
                </h1>
                <p className="body-font text-xl text-white text-opacity-90 max-w-3xl">
                  {selectedArticle.excerpt}
                </p>
              </div>
            </div>
          </section>

          <div className="h-[320px] md:h-[420px] overflow-hidden">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <p className="body-font text-xl leading-relaxed text-gray-800 mb-10 border-l-4 border-teal pl-6">
                  {selectedArticle.lead}
                </p>

                <div className="space-y-10">
                  {selectedArticle.sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="heading-font text-reflex-blue text-2xl mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="body-font text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                <section className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                  <h2 className="heading-font text-reflex-blue text-2xl mb-4">
                    {t.news.actionsTitle}
                  </h2>
                  <ul className="space-y-3">
                    {selectedArticle.actions.map((action) => (
                      <li key={action} className="body-font text-gray-700 flex gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="mt-12">
                  <h2 className="heading-font text-reflex-blue text-2xl mb-4">
                    {t.news.referencesTitle}
                  </h2>
                  <ul className="space-y-3">
                    {selectedArticle.references.map((reference) => (
                      <li key={reference} className="body-font text-sm text-gray-600 leading-relaxed">
                        {reference}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-reflex-blue to-process-blue text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNavigate('home')}
            className="mb-8 text-white hover:bg-white hover:bg-opacity-20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.news.backToHome}
          </Button>
          
          <h1 className="heading-font mb-4">
            {t.news.title}
          </h1>
          <p className="body-font text-xl text-white text-opacity-90 max-w-2xl">
            {t.news.latest}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.news.items.map((item) => (
              <NewsCard
                key={item.slug}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                readTime={item.readTime}
                image={item.image}
                category={item.category}
                onReadMore={() => setSelectedSlug(item.slug)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
