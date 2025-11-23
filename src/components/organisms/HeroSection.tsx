import React from 'react';
import { Button } from '../atoms/Button';
import { useLanguage } from '../../lib/LanguageContext';
import { ChevronRight, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23002D91' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-reflex-blue bg-opacity-10 rounded-full">
              <Terminal className="w-4 h-4 text-reflex-blue" />
              <span className="body-font text-sm text-reflex-blue">sudo su &gt; Digital Transformation</span>
            </div>

            <div className="space-y-6">
              <h1 className="heading-font text-reflex-blue">
                {t.hero.title}
              </h1>
              <p className="body-font text-xl text-gray-600 max-w-xl">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                {t.hero.cta}
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToAbout}
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="heading-font text-reflex-blue">500+</div>
                <p className="body-font text-sm text-gray-600">Projects</p>
              </div>
              <div>
                <div className="heading-font text-reflex-blue">98%</div>
                <p className="body-font text-sm text-gray-600">Satisfaction</p>
              </div>
              <div>
                <div className="heading-font text-reflex-blue">50+</div>
                <p className="body-font text-sm text-gray-600">Team Members</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-reflex-blue to-process-blue opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              
              {/* Floating Cards */}
              <div className="relative z-10 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-2xl ml-auto max-w-sm border-l-4 border-purple animate-float">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-purple" />
                    <span className="heading-font text-purple">Platform Development</span>
                  </div>
                  <p className="body-font text-sm text-gray-600">Custom solutions for your needs</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm border-l-4 border-teal animate-float" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-teal" />
                    <span className="heading-font text-teal">User-Centric Design</span>
                  </div>
                  <p className="body-font text-sm text-gray-600">Experiences that matter</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-2xl ml-auto max-w-sm border-l-4 border-orange animate-float" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-orange" />
                    <span className="heading-font text-orange">Digital Innovation</span>
                  </div>
                  <p className="body-font text-sm text-gray-600">Transforming businesses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};