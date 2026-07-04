import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before the reveal starts (used for stagger). */
  delay?: number;
}

/**
 * Scroll-reveal wrapper: fades in and rises once when entering the viewport.
 * Renders statically under prefers-reduced-motion.
 */
export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
