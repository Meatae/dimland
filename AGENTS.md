# Agent Guidelines for Dimland

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Testing
No test framework currently configured. Add Jest/Cypress/Vitest if needed.

## Code Style Guidelines

### Framework & Language
- Next.js 16 with React 19 and TypeScript (strict mode enabled)
- App Router with React Server Components
- Path aliases: `@/*` maps to `./src/*`

### Imports
- External libraries first, then internal imports with `@/` aliases
- React namespace import: `import * as React from "react"`
- Group related imports together

### Components
- Use shadcn/ui components with "new-york" style
- `cn()` utility from `@/lib/utils` for className merging (clsx + tailwind-merge)
- `class-variance-authority` for component variants
- `data-slot` attributes for component composition
- Export both component and variants: `export { Component, componentVariants }`

### Styling
- Tailwind CSS with CSS variables
- Lucide React icons
- Framer Motion for animations
- Responsive design with `md:`, `lg:` prefixes

### Naming Conventions
- Components: PascalCase (`Button`, `Card`)
- Functions/Variables: camelCase (`handleClick`, `isLoading`)
- Files: kebab-case for components (`button.tsx`), camelCase for utilities (`utils.ts`)

### TypeScript
- Strict mode enabled - no implicit any types
- Use `VariantProps<typeof componentVariants>` for variant types
- Proper interface definitions for props

### Error Handling
- TypeScript strict mode enforces type safety
- Use try/catch for async operations when needed
- Validate props with TypeScript interfaces

### File Structure
- `src/app/` - Next.js app router pages
- `src/components/ui/` - Reusable UI components (shadcn/ui)
- `src/components/` - Page-specific components
- `src/lib/` - Utilities and shared logic