import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './lib/LanguageContext';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { BackToTop } from './components/atoms/BackToTop';
import { HomePage } from './components/pages/HomePage';
import { NewsPage } from './components/pages/NewsPage';
import { ClientAreaPage } from './components/pages/ClientAreaPage';
import { VidafirePage } from './components/pages/VidafirePage';
import { useSEO, generateOrganizationSchema } from './lib/seo';
import { useLanguage } from './lib/LanguageContext';

type Page = 'home' | 'news' | 'client-area' | 'vidafire';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [navigationVersion, setNavigationVersion] = useState(0);
  const { language, t } = useLanguage();

  // SEO for current page
  useSEO({
    title: currentPage === 'home' ? t.nav.home :
           currentPage === 'news' ? t.nav.news :
           currentPage === 'vidafire' ? t.vidafire.name :
           t.clientArea.title,
    description: currentPage === 'home'
      ? t.about.description
      : currentPage === 'news'
      ? t.news.latest
      : currentPage === 'vidafire'
      ? t.vidafire.intro
      : t.clientArea.unavailableTitle,
    keywords: t.seo.keywords,
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
    setNavigationVersion((version) => version + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} navigationVersion={navigationVersion} />;
      case 'client-area':
        return <ClientAreaPage onNavigate={handleNavigate} />;
      case 'vidafire':
        return <VidafirePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
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
      {currentPage !== 'client-area' && <BackToTop />}
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
