import { useEffect } from 'react';
import { Language } from './i18n';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  language: Language;
  canonical?: string;
}

export const useSEO = ({ title, description, keywords, language, canonical }: SEOProps) => {
  useEffect(() => {
    // Set title
    document.title = `${title} | Usodus Systems`;

    // Set meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Set language
    document.documentElement.lang = language;

    // Set canonical URL
    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (link) {
        link.href = canonical;
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'canonical';
        newLink.href = canonical;
        document.head.appendChild(newLink);
      }
    }

    // Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:type', 'website');
    setOGTag('og:locale', language === 'en' ? 'en_US' : language === 'es' ? 'es_ES' : 'pt_BR');

    // Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', title);
    setTwitterTag('twitter:description', description);

  }, [title, description, keywords, language, canonical]);
};

// Structured Data helpers
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Usodus Systems",
    "description": "Digital transformation company focused on creating platforms",
    "url": "https://www.usodus.com",
    "logo": "https://www.usodus.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@usodus.com",
      "availableLanguage": ["en", "es", "pt"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/usodus",
      "https://twitter.com/usodus"
    ]
  };
};

export const generateWebPageSchema = (title: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Usodus Systems"
    }
  };
};
