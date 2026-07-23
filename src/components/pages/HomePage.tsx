import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { AboutSection } from '../organisms/AboutSection';
import { ServicesSection } from '../organisms/ServicesSection';
import { SolutionsSection } from '../organisms/SolutionsSection';
import { ProductsSection } from '../organisms/ProductsSection';
import { EngagementTiersSection } from '../organisms/EngagementTiersSection';
import { ContactSection } from '../organisms/ContactSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'news' | 'client-area' | 'vidafire') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <ProductsSection onNavigate={onNavigate} />
      <EngagementTiersSection />
      <ContactSection />
    </main>
  );
};
