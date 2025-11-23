import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { HomePage } from './components/pages/HomePage';
import { NewsPage } from './components/pages/NewsPage';
import { ClientAreaPage } from './components/pages/ClientAreaPage';
import { useSEO, generateOrganizationSchema } from './lib/seo';
import { useLanguage } from './lib/LanguageContext';

type Page = 'home' | 'news' | 'client-area';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { language, t } = useLanguage();

  // SEO for current page
  useSEO({
    title: currentPage === 'home' ? t.nav.home : 
           currentPage === 'news' ? t.nav.news : 
           t.clientArea.title,
    description: currentPage === 'home' 
      ? t.about.description 
      : currentPage === 'news'
      ? t.news.latest
      : t.clientArea.welcome,
    keywords: 'digital transformation, platform development, cloud solutions, user experience, technology consulting',
    language: language,
  });

  // Add structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(generateOrganizationSchema());
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'client-area':
        return <ClientAreaPage onNavigate={handleNavigate} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'client-area' && (
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
      )}
      
      <div className="flex-grow">
        {renderPage()}
      </div>
      
      {currentPage !== 'client-area' && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
