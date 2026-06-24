import { describe, it, expect } from 'vitest';
import { getTranslations, translations, type Language } from './i18n';

describe('getTranslations', () => {
  it('returns the EN dictionary for "en"', () => {
    const t = getTranslations('en');
    expect(t).toBe(translations.en);
    expect(t.nav.home).toBe('Home');
  });

  it('returns the ES dictionary for "es"', () => {
    const t = getTranslations('es');
    expect(t).toBe(translations.es);
  });

  it('returns the PT dictionary for "pt"', () => {
    const t = getTranslations('pt');
    expect(t).toBe(translations.pt);
  });

  it('falls back to EN for an unknown language', () => {
    // Cast through unknown: the runtime guard (translations[lang] || en)
    // should still return the EN dictionary for an out-of-union value.
    const t = getTranslations('xx' as unknown as Language);
    expect(t).toBe(translations.en);
  });

  it('exposes the same nav keys across all locales', () => {
    const navKeys = Object.keys(translations.en.nav).sort();
    expect(Object.keys(translations.es.nav).sort()).toEqual(navKeys);
    expect(Object.keys(translations.pt.nav).sort()).toEqual(navKeys);
  });
});
