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

// jsdom lacks these browser APIs; motion/react (useReducedMotion, whileInView)
// and NetworkCanvas (ResizeObserver) need them to mount.
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }),
  writable: true,
});

// jsdom's getContext throws "Not implemented"; return null so NetworkCanvas
// takes its no-context bail-out path quietly.
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: () => null,
  writable: true,
});

class ObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(window, 'IntersectionObserver', {
  value: ObserverStub,
  writable: true,
});
Object.defineProperty(globalThis, 'IntersectionObserver', {
  value: ObserverStub,
  writable: true,
});
Object.defineProperty(window, 'ResizeObserver', {
  value: ObserverStub,
  writable: true,
});
Object.defineProperty(globalThis, 'ResizeObserver', {
  value: ObserverStub,
  writable: true,
});

afterEach(() => {
  cleanup();
});
