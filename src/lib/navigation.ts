// Shared navigation types for the state-based router in App.tsx.
// Every component that receives an onNavigate callback imports these so the
// page union stays in one place instead of being re-spelled per component.
export type Page = 'home' | 'news' | 'client-area' | 'vidafire';

export type NavigateFn = (page: Page) => void;
