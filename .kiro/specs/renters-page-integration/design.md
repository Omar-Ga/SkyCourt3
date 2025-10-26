# Design Document

## Overview

This design document outlines the technical approach for integrating the standalone renters-page into the main SkyCourt Mall website. The integration will transform the existing rental page into a cohesive part of the main website while preserving its conversion-focused content and functionality.

The design focuses on three key areas:
1. **Component Migration**: Moving renters page components into the main website structure
2. **Design System Alignment**: Updating styling to match the main website's sophisticated aesthetic
3. **Navigation Integration**: Adding the rentals page to the existing React Router setup

## Architecture

### High-Level Architecture

```
Main Website (src/)
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Dining.tsx
│   ├── Cafes.tsx
│   ├── ContactUs.tsx
│   ├── Careers.tsx
│   └── Rentals.tsx (NEW)
├── components/
│   ├── Header.tsx (EXISTING - to be used)
│   ├── Footer.tsx (EXISTING - to be used)
│   └── rentals/ (NEW DIRECTORY)
│       ├── RentalsHero.tsx
│       ├── LocationSection.tsx
│       ├── VisualStatsGrid.tsx
│       ├── TenantTestimonials.tsx
│       ├── BenefitsTimeline.tsx
│       ├── FacilitiesGrid.tsx
│       ├── RentalsFAQ.tsx
│       ├── InquiryForm.tsx
│       └── FinalCTA.tsx
├── data/
│   └── rentals.ts (NEW - migrated from constants.ts)
└── hooks/
    └── useCountUp.ts (NEW - migrated from renters-page)
```

### Component Migration Strategy

1. **Remove Standalone Components**: Delete renters-page Header/Footer components
2. **Migrate Core Components**: Move all rental-specific components to src/components/rentals/
3. **Update Imports**: Change all component imports to use main website structure
4. **Integrate Navigation**: Add rentals route to main App.tsx router

## Components and Interfaces

### Page Component Structure

```typescript
// src/pages/Rentals.tsx
interface RentalsPageProps {}

export default function Rentals(): JSX.Element {
  return (
    <>
      <div className="grain-overlay" />
      <Header show={true} />
      <main>
        <RentalsHero onInquireClick={scrollToInquiry} />
        <LocationSection />
        <VisualStatsGrid />
        <TenantTestimonials />
        <BenefitsTimeline />
        <FacilitiesGrid />
        <RentalsFAQ />
        <InquiryForm ref={inquiryFormRef} />
        <FinalCTA onPrimaryClick={scrollToInquiry} />
      </main>
      <Footer />
      {/* Floating WhatsApp Button */}
    </>
  );
}
```

### Component Interfaces

```typescript
// Core component interfaces
interface RentalsHeroProps {
  onInquireClick: () => void;
}

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

interface TestimonialProps {
  logoUrl: string;
  quote: string;
  author: string;
  storeImageUrl: string;
  result: string;
}

interface FacilityProps {
  title: string;
  description: string;
  imageUrl: string;
  gridSpan: string;
}

interface TimelineItemProps {
  title: string;
  description: string;
  icon: React.ComponentType;
}
```

### Navigation Integration

```typescript
// src/App.tsx - Updated router configuration
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dining', element: <Dining /> },
  { path: '/cafes', element: <Cafes /> },
  { path: '/about', element: <About /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '/careers', element: <Careers /> },
  { path: '/rentals', element: <Rentals /> }, // NEW ROUTE
]);
```

```typescript
// src/data/navigation.ts - Updated navigation items
export const NAV_ITEMS: NavItem[] = [
  { key: 'nav.home', href: '#hero', sectionId: 'hero' },
  { key: 'nav.dining', href: '/dining', isRoute: true },
  { key: 'nav.cafes', href: '/cafes', isRoute: true },
  { key: 'nav.about', href: '/about', isRoute: true },
  { key: 'nav.rentals', href: '/rentals', isRoute: true }, // NEW ITEM
  { key: 'nav.contact', href: '/contact-us', isRoute: true },
  { key: 'nav.careers', href: '/careers', isRoute: true },
];
```

## Data Models

### Rental Data Structure

```typescript
// src/data/rentals.ts
export interface Testimonial {
  logoUrl: string;
  quote: string;
  author: string;
  storeImageUrl: string;
  result: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface StatItem {
  value: number;
  label: string;
  suffix: string;
  imageUrl: string;
}

export interface FacilityItem {
  title: string;
  description: string;
  imageUrl: string;
  gridSpan: string;
}

// Data exports
export const testimonials: Testimonial[] = [...];
export const faqItems: FaqItem[] = [...];
export const timelineItems: TimelineItem[] = [...];
export const statsItems: StatItem[] = [...];
export const facilities: FacilityItem[] = [...];
```

### Form Data Model

```typescript
// Inquiry form data structure
interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  businessType: string;
  spaceRequirement: 'small' | 'medium' | 'large' | 'undecided';
  message: string;
}
```

## Error Handling

### Component Error Boundaries

```typescript
// Error handling for rental components
interface RentalComponentErrorState {
  hasError: boolean;
  errorMessage?: string;
}

// Fallback UI for failed components
const RentalComponentFallback = ({ error }: { error: Error }) => (
  <div className="p-8 text-center">
    <p className="text-gray-600">عذراً، حدث خطأ في تحميل هذا القسم</p>
    <button onClick={() => window.location.reload()}>
      إعادة تحميل الصفحة
    </button>
  </div>
);
```

### Form Validation

```typescript
// Form validation schema
const inquiryFormValidation = {
  fullName: {
    required: true,
    minLength: 2,
    errorMessage: 'الاسم مطلوب ويجب أن يكون أكثر من حرفين'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'البريد الإلكتروني غير صحيح'
  },
  phone: {
    required: true,
    pattern: /^[+]?[\d\s-()]+$/,
    errorMessage: 'رقم الهاتف غير صحيح'
  }
};
```

## Testing Strategy

### Component Testing Approach

1. **Unit Tests**: Test individual rental components in isolation
2. **Integration Tests**: Test component interactions and data flow
3. **Visual Regression Tests**: Ensure design consistency with main website
4. **Accessibility Tests**: Verify WCAG compliance for all components

### Test Structure

```typescript
// Example test structure
describe('RentalsHero Component', () => {
  it('should render hero content correctly', () => {
    // Test hero rendering
  });
  
  it('should handle CTA click events', () => {
    // Test scroll-to-inquiry functionality
  });
  
  it('should animate stats counters on mount', () => {
    // Test useCountUp hook integration
  });
});

describe('InquiryForm Component', () => {
  it('should validate form inputs', () => {
    // Test form validation
  });
  
  it('should submit form data correctly', () => {
    // Test Web3Forms integration
  });
  
  it('should display success/error states', () => {
    // Test form feedback
  });
});
```

### Performance Testing

```typescript
// Performance considerations
const performanceMetrics = {
  // Lazy load images in galleries
  imageOptimization: 'lazy loading + WebP format',
  
  // Optimize animations
  animationOptimization: 'use transform/opacity only',
  
  // Bundle size monitoring
  bundleAnalysis: 'monitor component bundle impact',
  
  // Core Web Vitals
  coreWebVitals: {
    LCP: '< 2.5s', // Largest Contentful Paint
    FID: '< 100ms', // First Input Delay
    CLS: '< 0.1' // Cumulative Layout Shift
  }
};
```

## Design System Integration

### Color System Migration

```css
/* OLD (renters-page) */
.bg-highlight { background-color: #some-green; }
.text-highlight { color: #some-green; }

/* NEW (main website) */
.bg-scm-green { background-color: hsl(81, 70%, 37%); }
.text-scm-green { color: hsl(81, 70%, 37%); }
.bg-primary { background-color: hsl(279, 65%, 32%); }
.bg-accent { background-color: hsl(292, 71%, 49%); }
```

### Typography Migration

```css
/* Ensure consistent font usage */
.rental-heading {
  font-family: 'Alan Sans', sans-serif; /* Main website font */
  font-weight: 600;
}

/* Remove any custom font imports from renters-page */
```

### Component Styling Patterns

```typescript
// Consistent styling patterns
const rentalComponentStyles = {
  // Frosted glass backgrounds
  glassBackground: 'frosted-glass border border-black/5',
  
  // Consistent shadows
  cardShadow: 'shadow-lg hover:shadow-xl transition-shadow',
  
  // Button styles matching main website
  primaryButton: 'bg-primary text-white hover:bg-accent transition-colors',
  secondaryButton: 'bg-scm-green text-white hover:bg-green-700 transition-colors',
  
  // Consistent spacing
  sectionPadding: 'py-16 md:py-24',
  containerPadding: 'px-6 max-w-7xl mx-auto'
};
```

### Animation Integration

```typescript
// Consistent animation patterns
const animationVariants = {
  // Staggered reveals (matching About page)
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  },
  
  // Fade up items
  fadeUpItem: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  },
  
  // Parallax effects
  parallaxImage: {
    y: [0, -50],
    transition: { duration: 1, ease: 'linear' }
  }
};
```

## Implementation Phases

### Phase 1: Foundation Setup
1. Create src/pages/Rentals.tsx
2. Add rentals route to App.tsx
3. Update navigation data
4. Create src/components/rentals/ directory

### Phase 2: Component Migration
1. Migrate RentalsHero component
2. Migrate LocationSection component
3. Migrate VisualStatsGrid component
4. Update all styling to use main website classes

### Phase 3: Advanced Components
1. Migrate TenantTestimonials component
2. Migrate BenefitsTimeline component
3. Migrate FacilitiesGrid component
4. Implement proper animations

### Phase 4: Forms and Integration
1. Migrate InquiryForm component
2. Integrate with Web3Forms
3. Migrate RentalsFAQ component
4. Add FinalCTA component

### Phase 5: Polish and Testing
1. Add floating WhatsApp button
2. Implement responsive design
3. Add i18n support
4. Performance optimization
5. Testing and bug fixes

This design provides a comprehensive roadmap for successfully integrating the renters page while maintaining the sophisticated design and functionality of your main website.