# Usodus Systems - Corporate Website

Professional website for Usodus Systems, a digital transformation company focused on creating user-centric platforms.

## 🎨 Brand Identity

### Colors

**Basic Colors** (For Brand Mark):
- Reflex Blue C: `#002D91`
- Process Blue C: `#0084C6`
- Brand Grey 422 C: `#A1A1A1`

**Auxiliary Colors** (For Supporting Elements):
- Purple 267 C: `#574299`
- Yellow 7404 C: `#EAC435`
- Orange 021 C: `#E05F1E`
- Teal 7713 C: `#028090`
- Magenta 220 C: `#A50053`

### Typography

- **Baloo Tamma 2**: Titles, highlights, short institutional messages
- **Poppins**: Body text, running text

### Brand Meaning

- **>** (Terminal): Command-line power and direct access
- **.** (People): User-centric focus
- **|** (Pipe): "So what?" - Meaningful transformation

## 🏗️ Architecture

### Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Custom atomic design system
- **Icons**: Lucide React
- **Architecture**: Atomic Design Pattern

### Folder Structure

```
/
├── components/
│   ├── atoms/          # Basic UI elements (Button, Input, Logo)
│   ├── molecules/      # Composed components (ServiceCard, NewsCard)
│   ├── organisms/      # Complex components (Header, Footer, Sections)
│   └── pages/          # Full page components (HomePage, NewsPage)
├── lib/                # Utilities and helpers
│   ├── i18n.ts         # Internationalization
│   ├── LanguageContext.tsx
│   └── seo.tsx         # SEO utilities
├── styles/
│   └── globals.css     # Global styles and Tailwind config
└── App.tsx             # Main application component
```

## 🌐 Features

### Multi-language Support (i18n)
- English (en)
- Spanish (es)
- Portuguese (pt)

Language preference is saved to localStorage and persists across sessions.

### Pages
1. **Landing Page**: Hero, About, Services, Solutions, Contact
2. **News Page**: Latest updates and articles
3. **Client Area**: Secure login portal

### SEO Optimization
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (Schema.org)
- Semantic HTML
- Accessible markup (ARIA labels)

### Security Features
- Content Security Policy headers
- XSS Protection
- CORS configuration
- Input validation
- Secure form handling
- ESLint security rules

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🎯 Brand Guidelines Compliance

✅ Color palette strictly follows brand manual
✅ Typography uses specified font families
✅ Logo maintains proper clear space
✅ Responsive design for all devices
✅ Accessible and semantic markup

## 🔧 Customization

### Updating Colors

Colors are centralized in `/styles/globals.css` using CSS custom properties:

```css
:root {
  --color-reflex-blue: #002D91;
  --color-process-blue: #0084C6;
  /* ... */
}
```

### Updating Typography

Font families are defined in the `@layer base` section of `/styles/globals.css`.

### Adding New Languages

1. Add language code to `Language` type in `/lib/i18n.ts`
2. Add translations to the `translations` object
3. Update language selector in `/components/molecules/LanguageSelector.tsx`

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast

## 🔒 Security Best Practices

- Environment variables for sensitive data
- Input sanitization
- HTTPS enforcement (production)
- Secure headers configuration
- Regular dependency updates
- Code linting for security issues

## 📊 Performance

- Code splitting
- Lazy loading
- Optimized images
- Minified production build
- Tree shaking
- Efficient re-renders

## 📄 License

© 2024 Usodus Systems. All rights reserved.

## 🤝 Support

For support, email contact@usodus.com or visit our website.
