// Vitest global setup: registers @testing-library/jest-dom custom matchers
// (e.g. toBeInTheDocument) and cleans up the DOM between tests.
import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

Object.defineProperty(Element.prototype, 'scrollIntoView', {
  value: () => {},
  writable: true,
});

afterEach(() => {
  cleanup();
});
