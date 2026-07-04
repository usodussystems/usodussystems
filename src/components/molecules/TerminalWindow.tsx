import React, { useEffect, useState } from 'react';

interface TerminalWindowProps {
  lines: string[];
  className?: string;
}

const TYPE_INTERVAL_MS = 45;
const LINE_PAUSE_MS = 500;

/**
 * Glass terminal window that types its lines one character at a time.
 * Renders everything instantly under prefers-reduced-motion.
 */
export const TerminalWindow: React.FC<TerminalWindowProps> = ({ lines, className = '' }) => {
  const [typed, setTyped] = useState<string[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTyped(lines);
      return;
    }

    setTyped([]);
    let lineIndex = 0;
    let charIndex = 0;
    let timerId = 0;

    const tick = () => {
      const line = lines[lineIndex];
      if (line === undefined) return;

      charIndex += 1;
      setTyped((prev) => {
        const next = prev.slice(0, lineIndex);
        next[lineIndex] = line.slice(0, charIndex);
        return next;
      });

      if (charIndex >= line.length) {
        lineIndex += 1;
        charIndex = 0;
        if (lineIndex < lines.length) {
          timerId = window.setTimeout(tick, LINE_PAUSE_MS);
        }
      } else {
        timerId = window.setTimeout(tick, TYPE_INTERVAL_MS);
      }
    };

    timerId = window.setTimeout(tick, LINE_PAUSE_MS);
    return () => window.clearTimeout(timerId);
  }, [lines]);

  return (
    <div className={`glass-card overflow-hidden shadow-2xl shadow-reflex-blue/30 ${className}`}>
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800/80 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-magenta" />
        <span className="w-3 h-3 rounded-full bg-yellow" />
        <span className="w-3 h-3 rounded-full bg-teal" />
        <span className="ml-3 font-mono text-xs text-white/40">usodus@systems: ~</span>
      </div>

      {/* Typed lines */}
      <div className="p-6 font-mono text-sm leading-8 min-h-[10rem]">
        {typed.map((line, index) => (
          <div key={index} className={line.startsWith('#') ? 'text-teal-bright' : 'text-white/90'}>
            {line}
            {index === typed.length - 1 && (
              <span className="inline-block w-2.5 h-4 ml-1 align-middle bg-process-blue-bright animate-caret" />
            )}
          </div>
        ))}
        {typed.length === 0 && <span className="inline-block w-2.5 h-4 bg-process-blue-bright animate-caret" />}
      </div>
    </div>
  );
};
