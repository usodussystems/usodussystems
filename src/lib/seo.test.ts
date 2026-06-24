import { describe, it, expect } from 'vitest';
import { generateOrganizationSchema, generateWebPageSchema } from './seo';

describe('generateOrganizationSchema', () => {
  it('returns an Organization schema for Usodus Systems', () => {
    const schema = generateOrganizationSchema();
    expect(schema['@type']).toBe('Organization');
    expect(schema.name).toBe('Usodus Systems');
    expect(schema['@context']).toBe('https://schema.org');
  });

  it('serializes to valid JSON (used as JSON-LD in App.tsx)', () => {
    expect(() => JSON.stringify(generateOrganizationSchema())).not.toThrow();
  });
});

describe('generateWebPageSchema', () => {
  it('returns a WebPage schema carrying the provided title/description', () => {
    const schema = generateWebPageSchema('My Title', 'My Description');
    expect(schema['@type']).toBe('WebPage');
    expect(schema.name).toBe('My Title');
    expect(schema.description).toBe('My Description');
    expect(schema.publisher.name).toBe('Usodus Systems');
  });
});
