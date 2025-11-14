# Frontend Design System - Audit Firms Dubai

## Design Philosophy

### Core Principles
1. **Trust Through Design**: Every element reinforces credibility and professionalism
2. **Clarity Over Creativity**: Clear communication trumps flashy design
3. **Performance-First**: Beautiful but blazing fast
4. **Conversion-Optimized**: Every pixel serves the business goal
5. **Cultural Sensitivity**: Respects both Western and Middle Eastern aesthetics

## Brand Identity

### Logo Specifications
```typescript
// components/brand/Logo.tsx
const logoVariants = {
  primary: {
    width: 180,
    height: 60,
    src: '/logo/elite-audit-primary.svg'
  },
  white: {
    width: 180,
    height: 60,
    src: '/logo/elite-audit-white.svg'
  },
  mark: {
    width: 40,
    height: 40,
    src: '/logo/elite-audit-mark.svg'
  }
}
```

### Color System
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary - Professional Blue
        primary: {
          50: '#EBF5FF',
          100: '#D1E7FF',
          200: '#A3CEFF',
          300: '#66ACFF',
          400: '#2987FF',
          500: '#0066FF', // Main brand color
          600: '#0052D9',
          700: '#003FB3',
          800: '#002E8C',
          900: '#001F66',
          950: '#001440'
        },
        // Secondary - Trust Gold
        secondary: {
          50: '#FFF9EB',
          100: '#FFF3D6',
          200: '#FFE7AD',
          300: '#FFDA85',
          400: '#FFCE5C',
          500: '#FFC233', // Accent color
          600: '#E6A91F',
          700: '#CC9100',
          800: '#997000',
          900: '#664A00'
        },
        // Neutral - Professional Grays
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712'
        },
        // Semantic Colors
        success: {
          light: '#10B981',
          DEFAULT: '#059669',
          dark: '#047857'
        },
        warning: {
          light: '#FCD34D',
          DEFAULT: '#F59E0B',
          dark: '#D97706'
        },
        error: {
          light: '#F87171',
          DEFAULT: '#EF4444',
          dark: '#DC2626'
        },
        // Dubai-Specific
        dubai: {
          gold: '#D4AF37',
          sand: '#F4E4C1',
          sky: '#87CEEB',
          desert: '#C19A6B'
        }
      }
    }
  }
}
```

### Typography System
```typescript
// styles/typography.ts
import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '700', '900']
})

// Typography Scale
export const typography = {
  // Display - For hero sections
  display: {
    xl: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
    lg: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
    md: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
    sm: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
  },
  // Headings
  heading: {
    h1: 'text-4xl md:text-5xl font-bold leading-tight',
    h2: 'text-3xl md:text-4xl font-bold leading-snug',
    h3: 'text-2xl md:text-3xl font-semibold leading-snug',
    h4: 'text-xl md:text-2xl font-semibold leading-normal',
    h5: 'text-lg md:text-xl font-medium leading-normal',
    h6: 'text-base md:text-lg font-medium leading-normal'
  },
  // Body
  body: {
    xl: 'text-xl leading-relaxed',
    lg: 'text-lg leading-relaxed',
    base: 'text-base leading-relaxed',
    sm: 'text-sm leading-relaxed',
    xs: 'text-xs leading-normal'
  },
  // Special
  lead: 'text-xl md:text-2xl text-neutral-600 leading-relaxed',
  quote: 'text-lg md:text-xl italic text-neutral-700 leading-relaxed',
  caption: 'text-sm text-neutral-500'
}
```

## Component Design System

### Button Hierarchy
```typescript
// components/ui/button-variants.tsx
export const buttonVariants = {
  // Primary CTA - Highest hierarchy
  primary: `
    bg-primary-500 text-white 
    hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5
    active:bg-primary-700 active:translate-y-0
    focus:outline-none focus:ring-4 focus:ring-primary-500/30
    disabled:bg-neutral-300 disabled:cursor-not-allowed
    transition-all duration-200
    font-semibold
  `,
  
  // Secondary CTA
  secondary: `
    bg-secondary-500 text-neutral-900
    hover:bg-secondary-400 hover:shadow-md
    active:bg-secondary-600
    focus:outline-none focus:ring-4 focus:ring-secondary-500/30
    transition-all duration-200
    font-semibold
  `,
  
  // Outline - Supporting actions
  outline: `
    border-2 border-primary-500 text-primary-600
    hover:bg-primary-50 hover:border-primary-600
    active:bg-primary-100
    focus:outline-none focus:ring-4 focus:ring-primary-500/20
    transition-all duration-200
    font-medium
  `,
  
  // Ghost - Tertiary actions
  ghost: `
    text-neutral-600
    hover:bg-neutral-100 hover:text-neutral-900
    active:bg-neutral-200
    focus:outline-none focus:ring-4 focus:ring-neutral-500/20
    transition-all duration-200
  `,
  
  // Sizes
  sizes: {
    xs: 'px-3 py-1.5 text-sm',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
    xl: 'px-10 py-4 text-xl'
  }
}
```

### Card Components
```typescript
// components/ui/card-styles.tsx
export const cardStyles = {
  // Service Card
  service: `
    group relative overflow-hidden
    bg-white rounded-2xl
    border border-neutral-200
    shadow-sm hover:shadow-xl
    transition-all duration-300
    hover:-translate-y-1
  `,
  
  // Testimonial Card
  testimonial: `
    bg-gradient-to-br from-white to-neutral-50
    rounded-2xl p-8
    border border-neutral-100
    shadow-md
    relative
    before:absolute before:top-4 before:left-6
    before:text-6xl before:text-primary-100
    before:content-['"'] before:font-serif
  `,
  
  // Stats Card
  stats: `
    bg-primary-500 text-white
    rounded-xl p-6
    relative overflow-hidden
    after:absolute after:top-0 after:right-0
    after:w-32 after:h-32
    after:bg-white/10 after:rounded-full
    after:translate-x-8 after:-translate-y-8
  `,
  
  // Pricing Card
  pricing: `
    bg-white rounded-2xl
    border-2 border-neutral-200
    hover:border-primary-500
    shadow-lg hover:shadow-2xl
    transition-all duration-300
    relative
    data-[popular=true]:border-primary-500
    data-[popular=true]:shadow-primary-500/20
  `
}
```

### Form Design
```typescript
// components/forms/input-styles.tsx
export const inputStyles = {
  base: `
    w-full px-4 py-3
    bg-white border border-neutral-300
    rounded-lg
    text-neutral-900 placeholder-neutral-400
    focus:outline-none focus:border-primary-500
    focus:ring-2 focus:ring-primary-500/20
    transition-all duration-200
    disabled:bg-neutral-50 disabled:text-neutral-500
  `,
  
  error: `
    border-error bg-error/5
    focus:border-error focus:ring-error/20
  `,
  
  success: `
    border-success bg-success/5
    focus:border-success focus:ring-success/20
  `,
  
  label: `
    block text-sm font-medium text-neutral-700 mb-1.5
  `,
  
  helper: `
    text-sm text-neutral-500 mt-1.5
  `,
  
  errorMessage: `
    text-sm text-error mt-1.5 flex items-center gap-1
  `
}
```

## Layout Patterns

### Hero Section Design
```typescript
// components/sections/HeroSection.tsx
export const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />
    </div>
    
    {/* Content */}
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              Ministry of Economy Approved
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
            Dubai's Most
            <span className="text-primary-500"> Trusted</span>
            <br />
            Audit Partner
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed">
            Professional audit services ensuring compliance and adding value. 
            Get your statutory audit completed in just 7 days.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Get Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-8 border-t border-neutral-200">
            <div>
              <div className="text-3xl font-bold text-primary-500">500+</div>
              <div className="text-sm text-neutral-600">Audits Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">7 Days</div>
              <div className="text-sm text-neutral-600">Average Turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-500">4.9/5</div>
              <div className="text-sm text-neutral-600">Client Rating</div>
            </div>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-3xl" />
          <Image
            src="/images/hero-visual.png"
            alt="Professional Audit Services"
            width={600}
            height={500}
            className="relative z-10"
            priority
          />
        </div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-6 h-6 text-neutral-400" />
    </div>
  </section>
)
```

### Grid System
```typescript
// lib/layout/grid.ts
export const gridPatterns = {
  // Service Grid - 3 columns desktop, responsive
  services: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
  
  // Feature Grid - 4 columns for icons
  features: 'grid grid-cols-2 md:grid-cols-4 gap-8',
  
  // Testimonial Grid - 2 columns
  testimonials: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  
  // Team Grid - 4 columns
  team: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6',
  
  // Blog Grid - 3 columns with featured
  blog: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  
  // Pricing Grid - 3 columns centered
  pricing: 'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto'
}
```

## Animation & Interactions

### Framer Motion Animations
```typescript
// lib/animations/variants.ts
export const animations = {
  // Fade In Up
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  },
  
  // Stagger Children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Scale on Hover
  scaleHover: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  },
  
  // Slide In from Right
  slideInRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  },
  
  // Count Up Animation for Stats
  countUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'backOut'
      }
    }
  }
}
```

### Micro-Interactions
```typescript
// components/ui/micro-interactions.tsx
export const microInteractions = {
  // Button Hover Effect
  buttonHover: `
    relative overflow-hidden
    before:absolute before:inset-0
    before:bg-white/20
    before:translate-x-[-100%]
    hover:before:translate-x-[100%]
    before:transition-transform before:duration-500
  `,
  
  // Link Underline Animation
  linkUnderline: `
    relative
    after:absolute after:bottom-0 after:left-0
    after:w-full after:h-0.5
    after:bg-current
    after:scale-x-0 after:origin-right
    hover:after:scale-x-100 hover:after:origin-left
    after:transition-transform after:duration-300
  `,
  
  // Card Lift
  cardLift: `
    transition-all duration-300
    hover:translate-y-[-4px]
    hover:shadow-xl
  `,
  
  // Icon Spin
  iconSpin: `
    transition-transform duration-300
    hover:rotate-12
  `
}
```

## Responsive Design

### Breakpoint System
```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    screens: {
      'xs': '475px',     // Small phones
      'sm': '640px',     // Large phones
      'md': '768px',     // Tablets
      'lg': '1024px',    // Laptops
      'xl': '1280px',    // Desktops
      '2xl': '1536px',   // Large screens
      '3xl': '1920px',   // Ultra-wide
    }
  }
}
```

### Mobile-First Components
```typescript
// components/responsive/ResponsiveNav.tsx
export const ResponsiveNav = () => (
  <nav className="relative">
    {/* Mobile Menu Button */}
    <button className="lg:hidden p-2" aria-label="Menu">
      <Menu className="w-6 h-6" />
    </button>
    
    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center gap-8">
      <Link href="/services" className="font-medium hover:text-primary-500">
        Services
      </Link>
      <Link href="/industries" className="font-medium hover:text-primary-500">
        Industries
      </Link>
      <Link href="/about" className="font-medium hover:text-primary-500">
        About
      </Link>
      <Link href="/resources" className="font-medium hover:text-primary-500">
        Resources
      </Link>
    </div>
    
    {/* Mobile Drawer */}
    <div className="lg:hidden fixed inset-0 bg-white z-50 transform translate-x-full">
      {/* Mobile menu content */}
    </div>
  </nav>
)
```

## Trust Signal Design

### Certification Badges
```typescript
// components/trust/CertificationBadges.tsx
export const CertificationBadges = () => (
  <div className="flex flex-wrap items-center gap-8 justify-center">
    <div className="group">
      <Image
        src="/badges/ministry-economy.svg"
        alt="Ministry of Economy Approved"
        width={120}
        height={60}
        className="opacity-70 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="group">
      <Image
        src="/badges/dfsa.svg"
        alt="DFSA Registered"
        width={100}
        height={60}
        className="opacity-70 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="group">
      <Image
        src="/badges/ifrs.svg"
        alt="IFRS Certified"
        width={110}
        height={60}
        className="opacity-70 group-hover:opacity-100 transition-opacity"
      />
    </div>
  </div>
)
```

### Social Proof Components
```typescript
// components/trust/SocialProof.tsx
export const testimonialCard = `
  relative bg-white rounded-2xl p-8 shadow-lg
  before:absolute before:top-6 before:left-8
  before:content-['"'] before:text-6xl
  before:text-primary-100 before:font-serif
  
  // Five star rating
  flex gap-0.5 text-secondary-500
  
  // Client avatar
  flex items-center gap-4
  w-12 h-12 rounded-full bg-neutral-100
`
```

## Loading States
```typescript
// components/ui/loading-states.tsx
export const LoadingStates = {
  // Skeleton Loader
  skeleton: `
    animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200
    bg-[length:200%_100%] animate-shimmer
  `,
  
  // Spinner
  spinner: `
    animate-spin rounded-full border-4 border-neutral-200
    border-t-primary-500 w-12 h-12
  `,
  
  // Progress Bar
  progress: `
    h-1 bg-neutral-200 rounded-full overflow-hidden
    relative after:absolute after:inset-y-0 after:left-0
    after:bg-primary-500 after:animate-progress
  `,
  
  // Dots Loader
  dots: `
    flex gap-1
    [&>*]:w-2 [&>*]:h-2 [&>*]:bg-primary-500 [&>*]:rounded-full
    [&>*]:animate-bounce
    [&>*:nth-child(2)]:animation-delay-100
    [&>*:nth-child(3)]:animation-delay-200
  `
}
```

## Dark Mode Support (Optional)
```typescript
// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode specific colors
        dark: {
          bg: '#0F172A',
          surface: '#1E293B',
          border: '#334155',
          text: '#F1F5F9'
        }
      }
    }
  }
}
```

## Accessibility Guidelines

### Focus States
```typescript
// Global focus styles
const focusStyles = `
  focus:outline-none 
  focus:ring-2 
  focus:ring-primary-500 
  focus:ring-offset-2
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-primary-500
`
```

### ARIA Labels
```typescript
// Accessibility patterns
const a11yPatterns = {
  navigation: 'role="navigation" aria-label="Main navigation"',
  search: 'role="search" aria-label="Search"',
  form: 'role="form" aria-label="Contact form"',
  button: 'aria-label="Submit" aria-pressed="false"',
  modal: 'role="dialog" aria-modal="true" aria-labelledby="modal-title"'
}
```

## Performance Optimizations

### Image Optimization
```typescript
// next.config.js image settings
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  }
}
```

### Font Loading Strategy
```typescript
// Font optimization
const fontOptimization = {
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true
}
```

## Component Library Index
```typescript
// components/index.ts
export * from './ui/Button'
export * from './ui/Card'
export * from './ui/Input'
export * from './ui/Modal'
export * from './ui/Tooltip'
export * from './ui/Dropdown'
export * from './ui/Badge'
export * from './ui/Alert'
export * from './ui/Tabs'
export * from './ui/Accordion'
export * from './sections/Hero'
export * from './sections/Services'
export * from './sections/Testimonials'
export * from './sections/CTA'
export * from './sections/Footer'
export * from './forms/ContactForm'
export * from './forms/QuoteForm'
export * from './forms/NewsletterForm'
```

## Style Documentation

### Naming Conventions
- Components: PascalCase (ServiceCard.tsx)
- Utilities: camelCase (formatDate.ts)
- CSS classes: kebab-case (service-card)
- Constants: UPPER_SNAKE_CASE (MAX_WIDTH)

### File Structure
```
/components
  /ui          - Reusable UI components
  /sections    - Page sections
  /forms       - Form components
  /layout      - Layout components
  /trust       - Trust signal components
/styles
  /globals.css - Global styles
  /animations.css - Animation classes
/lib
  /utils       - Utility functions
  /constants   - Design tokens
```

## Update Log
- 2024-11-14: Complete frontend design system
- Version: 1.0.0