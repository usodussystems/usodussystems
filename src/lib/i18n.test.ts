import { describe, it, expect } from 'vitest';
import { getTranslations, isLanguage, translations, type Language } from './i18n';

const getShape = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(getShape);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, nestedValue]) => [key, getShape(nestedValue)]),
    );
  }

  return typeof value;
};

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

  it('exposes the same nested translation shape across all locales', () => {
    const enShape = getShape(translations.en);
    expect(getShape(translations.es)).toEqual(enShape);
    expect(getShape(translations.pt)).toEqual(enShape);
  });

  it('provides complete AI news articles across all locales', () => {
    const enSlugs = translations.en.news.items.map((item) => item.slug);

    for (const locale of Object.values(translations)) {
      expect(locale.news.items).toHaveLength(6);
      expect(locale.news.items.map((item) => item.slug)).toEqual(enSlugs);

      for (const item of locale.news.items) {
        expect(item.title.toLowerCase()).toMatch(/ai|ia/);
        expect(item.excerpt.length).toBeGreaterThan(80);
        expect(item.lead.length).toBeGreaterThan(120);
        expect(item.sections.length).toBeGreaterThanOrEqual(3);
        expect(item.actions).toHaveLength(3);
        expect(item.references.length).toBeGreaterThanOrEqual(3);
        expect(item.references.every((reference) => /^\[\d+\]/.test(reference))).toBe(true);
      }
    }
  });

  it('validates supported language values', () => {
    expect(isLanguage('en')).toBe(true);
    expect(isLanguage('es')).toBe(true);
    expect(isLanguage('pt')).toBe(true);
    expect(isLanguage('fr')).toBe(false);
    expect(isLanguage(null)).toBe(false);
  });
});
