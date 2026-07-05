import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '../atoms/Button';
import { NetworkCanvas } from '../atoms/NetworkCanvas';
import { TerminalWindow } from '../molecules/TerminalWindow';
import { useLanguage } from '../../lib/LanguageContext';
import { ChevronRight, Terminal } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [t.hero.stats.s1, t.hero.stats.s2, t.hero.stats.s3];
  const terminalLines = [t.hero.terminal.line1, t.hero.terminal.line2, t.hero.terminal.line3];

  const entrance = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: 'easeOut' as const },
      };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Ambient layers: blueprint grid, node network, glow blobs */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0">
        <NetworkCanvas density={60} />
      </div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-reflex-blue/25 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple/15 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div className="space-y-8" {...entrance}>
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <Terminal className="w-4 h-4 text-process-blue-bright" />
              <span className="font-mono text-sm text-process-blue-bright">{t.hero.badge}</span>
            </div>

            <div className="space-y-6">
              <h1 className="heading-font text-white text-5xl md:text-7xl">
                {t.hero.title}{' '}
                <span className="bg-linear-to-r from-process-blue-bright via-teal-bright to-yellow bg-clip-text text-transparent">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="body-font text-xl text-white/70 max-w-xl">
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

            {/* Positioning stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <div className="heading-font font-medium text-xl text-process-blue-bright">{stat.value}</div>
                  <p className="body-font text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual: floating terminal */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-process-blue/10 blur-3xl" />
            <div className="relative z-10 animate-float">
              <TerminalWindow lines={terminalLines} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
