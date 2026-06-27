import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { AboutSection } from '../organisms/AboutSection';
import { ServicesSection } from '../organisms/ServicesSection';
import { SolutionsSection } from '../organisms/SolutionsSection';
import { EngagementTiersSection } from '../organisms/EngagementTiersSection';
import { ContactSection } from '../organisms/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <EngagementTiersSection />
      <ContactSection />
    </main>
  );
};
