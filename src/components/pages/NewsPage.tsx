import React from 'react';
import { NewsCard } from '../molecules/NewsCard';
import { useLanguage } from '../../lib/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../atoms/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface NewsPageProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  // Mock news data
  const newsItems = [
    {
      id: 1,
      title: language === 'en' ? 'Launching New Cloud Platform Solutions' : 
             language === 'es' ? 'Lanzamiento de Nuevas Soluciones de Plataforma en la Nube' : 
             'Lançamento de Novas Soluções de Plataforma em Nuvem',
      excerpt: language === 'en' ? 'We are excited to announce our latest cloud platform solutions designed to help businesses scale their digital infrastructure efficiently.' :
               language === 'es' ? 'Estamos emocionados de anunciar nuestras últimas soluciones de plataforma en la nube diseñadas para ayudar a las empresas a escalar su infraestructura digital de manera eficiente.' :
               'Estamos empolgados em anunciar nossas mais recentes soluções de plataforma em nuvem projetadas para ajudar empresas a escalar sua infraestrutura digital de forma eficiente.',
      date: '2024-11-20',
      category: language === 'en' ? 'Product' : language === 'es' ? 'Producto' : 'Produto',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
      id: 2,
      title: language === 'en' ? 'Digital Transformation Success Story' :
             language === 'es' ? 'Historia de Éxito en Transformación Digital' :
             'História de Sucesso em Transformação Digital',
      excerpt: language === 'en' ? 'Learn how we helped a Fortune 500 company transform their digital operations and achieve 40% efficiency gains.' :
               language === 'es' ? 'Aprenda cómo ayudamos a una empresa Fortune 500 a transformar sus operaciones digitales y lograr un 40% de mejoras en eficiencia.' :
               'Saiba como ajudamos uma empresa Fortune 500 a transformar suas operações digitais e alcançar ganhos de eficiência de 40%.',
      date: '2024-11-15',
      category: language === 'en' ? 'Case Study' : language === 'es' ? 'Caso de Estudio' : 'Estudo de Caso',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      id: 3,
      title: language === 'en' ? 'User Experience Best Practices 2024' :
             language === 'es' ? 'Mejores Prácticas de Experiencia de Usuario 2024' :
             'Melhores Práticas de Experiência do Usuário 2024',
      excerpt: language === 'en' ? 'Discover the latest UX trends and best practices that are shaping the future of digital platforms.' :
               language === 'es' ? 'Descubra las últimas tendencias y mejores prácticas de UX que están dando forma al futuro de las plataformas digitales.' :
               'Descubra as últimas tendências e melhores práticas de UX que estão moldando o futuro das plataformas digitais.',
      date: '2024-11-10',
      category: language === 'en' ? 'Insights' : language === 'es' ? 'Perspectivas' : 'Insights',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    },
    {
      id: 4,
      title: language === 'en' ? 'AI Integration in Platform Development' :
             language === 'es' ? 'Integración de IA en el Desarrollo de Plataformas' :
             'Integração de IA no Desenvolvimento de Plataformas',
      excerpt: language === 'en' ? 'Exploring how artificial intelligence is revolutionizing platform development and user experiences.' :
               language === 'es' ? 'Explorando cómo la inteligencia artificial está revolucionando el desarrollo de plataformas y las experiencias de usuario.' :
               'Explorando como a inteligência artificial está revolucionando o desenvolvimento de plataformas e experiências do usuário.',
      date: '2024-11-05',
      category: language === 'en' ? 'Technology' : language === 'es' ? 'Tecnología' : 'Tecnologia',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      id: 5,
      title: language === 'en' ? 'Security First: Protecting Your Digital Assets' :
             language === 'es' ? 'Seguridad Primero: Protegiendo sus Activos Digitales' :
             'Segurança em Primeiro Lugar: Protegendo seus Ativos Digitais',
      excerpt: language === 'en' ? 'Our comprehensive approach to security ensures your platforms are protected against modern threats.' :
               language === 'es' ? 'Nuestro enfoque integral de seguridad garantiza que sus plataformas estén protegidas contra amenazas modernas.' :
               'Nossa abordagem abrangente de segurança garante que suas plataformas estejam protegidas contra ameaças modernas.',
      date: '2024-11-01',
      category: language === 'en' ? 'Security' : language === 'es' ? 'Seguridad' : 'Segurança',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
    },
    {
      id: 6,
      title: language === 'en' ? 'Mobile-First Development Strategy' :
             language === 'es' ? 'Estrategia de Desarrollo Mobile-First' :
             'Estratégia de Desenvolvimento Mobile-First',
      excerpt: language === 'en' ? 'Why mobile-first development is crucial for modern platform success and how we implement it.' :
               language === 'es' ? 'Por qué el desarrollo mobile-first es crucial para el éxito de las plataformas modernas y cómo lo implementamos.' :
               'Por que o desenvolvimento mobile-first é crucial para o sucesso de plataformas modernas e como o implementamos.',
      date: '2024-10-28',
      category: language === 'en' ? 'Development' : language === 'es' ? 'Desarrollo' : 'Desenvolvimento',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    },
  ];

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
            {newsItems.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                image={item.image}
                category={item.category}
                onReadMore={() => console.log('Read more:', item.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
