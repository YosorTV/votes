# Next.js SSG Boilerplate

A modern, production-ready Next.js 15 boilerplate optimized for Static Site Generation (SSG) with TypeScript, Tailwind CSS, and comprehensive developer tooling.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS 4** with custom design system
- 🔧 **TypeScript** for type safety
- 📱 **Responsive Design** with mobile-first approach
- 🌙 **Dark/Light Theme** support with next-themes
- 📝 **Form Handling** with react-hook-form and Yup validation
- 🎯 **Accessibility** built-in with ARIA attributes
- 🔄 **HOCs (Higher-Order Components)** for reusable logic
- 🎪 **Animations** with Motion and Tailwind animations
- 📊 **Toast Notifications** with Sonner
- 🎨 **Headless UI** components for accessible UI
- 🧪 **ESLint & Prettier** for code quality
- 🐕 **Husky** for git hooks
- 📦 **PNPM** for fast package management

## 📁 Project Structure

```text
next-ssg-boilerplate/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── loading.tsx              # Loading component
├── assets/                      # Static assets
│   ├── animations/              # Animation configurations
│   ├── fonts/                   # Font definitions
│   └── icons/                   # SVG icon components
├── components/                  # React components
│   ├── common/                  # Shared components
│   │   ├── providers/           # Context providers
│   │   └── scripts/             # External scripts
│   ├── elements/                # Reusable UI elements
│   │   ├── Button/              # Button component
│   │   ├── Input/               # Form input with validation
│   │   ├── Textarea/            # Textarea component
│   │   ├── Form/                # Form wrapper
│   │   └── ...                  # Other UI elements
│   ├── forms/                   # Form components
│   │   └── ContactForm/         # Contact form implementation
│   ├── hoc/                     # Higher-Order Components
│   │   ├── withSidebar/         # Sidebar state management
│   │   ├── withScroll/          # Scroll tracking
│   │   ├── withScreenSize/      # Screen size detection
│   │   └── withThemeToggle/     # Theme switching
│   ├── layouts/                 # Layout components
│   │   ├── Root/                # Root layout
│   │   └── Page/                # Page layout wrapper
│   ├── modules/                 # Page-specific modules
│   │   └── Home/                # Home page module
│   └── units/                   # Feature units
│       ├── Header/              # Site header
│       ├── Footer/              # Site footer
│       ├── Hero/                # Hero section
│       ├── Features/            # Features section
│       ├── Sidebar/             # Mobile sidebar
│       └── ...                  # Other page sections
├── lib/                         # Utility libraries
│   ├── constants/               # Application constants
│   │   ├── theme.ts             # Theme definitions
│   │   ├── system.ts            # System routes and messages
│   │   └── screens.ts           # Screen breakpoints
│   ├── hooks/                   # Custom React hooks
│   │   ├── useForm.tsx          # Form handling hook
│   │   ├── useMediaQuery.tsx    # Media query hook
│   │   └── useScreen.tsx        # Screen size hook
│   ├── interfaces/              # TypeScript interfaces
│   │   ├── elements/            # UI element types
│   │   ├── forms/               # Form types
│   │   ├── hooks/               # Hook types
│   │   └── shared/              # Shared types
│   └── packages/                # Utility packages
│       ├── cn.ts                # Class name utility
│       ├── toaster.ts           # Toast configuration
│       └── tailwind.variants.ts # Tailwind variants
├── services/                    # API services
│   └── contact/                 # Contact form service
├── utils/                       # Utility functions
│   ├── adapters/                # Data adapters
│   ├── fetchers/                # Data fetching utilities
│   └── helpers/                 # Helper functions
└── public/                      # Static files
```

## 🛠️ Key Components

### Form System

- **Custom `useForm` hook** with react-hook-form integration
- **Yup validation** schemas
- **Input/Textarea components** with built-in validation
- **Contact form** with proper error handling

### Theme System

- **Dark/Light theme** toggle with next-themes
- **CSS variables** for consistent theming
- **Tailwind variants** for component styling

### HOCs (Higher-Order Components)

- **`withSidebar`**: Manages sidebar state and navigation
- **`withScroll`**: Tracks scroll position and direction
- **`withScreenSize`**: Provides responsive screen information
- **`withThemeToggle`**: Handles theme switching logic

### UI Elements

- **Button**: Multiple variants (primary, secondary, ghost)
- **Input**: Form inputs with validation and accessibility
- **Textarea**: Multi-line text inputs
- **Form**: Wrapper for form handling
- **SubmitButton**: Loading state button for forms

## 🎨 Design System

### Colors

- **Primary**: Brand colors
- **Secondary**: Supporting colors
- **Background**: Light/dark backgrounds
- **Foreground**: Text colors

### Typography

- **Inter font** for clean, modern look
- **Responsive text sizes** with Tailwind
- **Consistent spacing** and line heights

### Components

- **Consistent spacing** using Tailwind's spacing scale
- **Accessible focus states** for all interactive elements
- **Responsive design** with mobile-first approach

## 📱 Responsive Design

The boilerplate includes comprehensive responsive design features:

- **Mobile-first** approach
- **Breakpoint system** with Tailwind CSS
- **Flexible layouts** that adapt to screen sizes
- **Touch-friendly** interactive elements
- **Optimized typography** for different screen sizes

## 🔧 Development Setup

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd next-ssg-boilerplate

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm export       # Export static site
pnpm serve        # Serve static export
```

## 🏗️ Build Configuration

### Next.js Config

- **Static export** enabled for SSG
- **Image optimization** with multiple formats
- **Console removal** in production
- **TypeScript** and ESLint build-time checks disabled

### TypeScript

- **Strict mode** enabled
- **Path aliases** configured for clean imports
- **Module resolution** optimized for bundler

## 📦 Key Dependencies

### Core

- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type safety and developer experience

### Styling & UI

- **Tailwind CSS 4**: Utility-first CSS framework
- **Headless UI**: Accessible UI components
- **Heroicons**: Beautiful SVG icons
- **Motion**: Animation library

### Forms & Validation

- **react-hook-form**: Performant forms
- **Yup**: Schema validation
- **@hookform/resolvers**: Form validation resolvers

### Development

- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit linting

## 🚀 Deployment

### Static Export

```bash
pnpm build
pnpm export
```

The static export can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Environment Variables

```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `pnpm lint`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
