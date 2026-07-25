import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('presents VidaFire as a Usodus Systems financial independence product', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('Financial planning platform')).toBeInTheDocument();
    expect(screen.getByText(/connects your assets, debts, cash flow, monthly budget, and goals/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Explore VidaFire' }));

    expect(screen.getByRole('heading', { name: 'VidaFire' })).toBeInTheDocument();
    expect(screen.getByText(/Monte Carlo outcomes/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Open VidaFire/i })[0]).toHaveAttribute(
      'href',
      'https://vidafire.usodus.com',
    );
  });

  it('does not collect credentials on the unauthenticated Client Area page', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: 'Client Area' })[0]);

    expect(screen.getByText('Access is currently unavailable')).toBeInTheDocument();
    expect(screen.queryByLabelText('Username')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Password')).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('opens a dedicated news article with references', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: 'News' })[0]);
    await user.click(screen.getAllByRole('button', { name: 'Read More' })[0]);

    expect(screen.getByRole('heading', { name: /AI Agents Need an Operating Model/i })).toBeInTheDocument();
    expect(screen.getByText('Client action checklist')).toBeInTheDocument();
    expect(screen.getByText('References')).toBeInTheDocument();
    expect(screen.getByText(/\[1\] McKinsey & Company/)).toBeInTheDocument();
  });

  it('returns to the news index when the global News nav is clicked from an article', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: 'News' })[0]);
    await user.click(screen.getAllByRole('button', { name: 'Read More' })[0]);
    expect(screen.getByText('Client action checklist')).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'News' })[0]);

    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument();
    expect(screen.queryByText('Client action checklist')).not.toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Read More' })).toHaveLength(6);
  });
});
