import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Smoke test for the LIVE stack: App wraps everything in <LanguageProvider>,
// which defaults to EN (no 'language' key in localStorage). The Header
// renders the EN nav labels. We assert on stable, user-visible nav text
// rather than copy the frontend team may be actively rewording.
describe('<App /> (live stack render smoke test)', () => {
  it('renders without crashing and shows EN navigation labels', () => {
    render(<App />);

    // "Home" and "Services" appear in the header nav. They may render in both
    // the desktop and mobile nav, so use getAllByText and assert >= 1.
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
  });

  it('renders the Client Area call-to-action from the header', () => {
    render(<App />);
    expect(screen.getAllByText('Client Area').length).toBeGreaterThan(0);
  });
});
