import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../lib/LanguageContext';

/* Appears after scrolling past the hero; smoothness comes from the
   reduced-motion-aware `scroll-behavior` on <html> in index.css. */
export const BackToTop: React.FC = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label={t.nav.backToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 glass-card text-white/70 hover:text-white hover:border-process-blue/40 hover:shadow-[0_0_30px_-10px] hover:shadow-process-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-process-blue transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
