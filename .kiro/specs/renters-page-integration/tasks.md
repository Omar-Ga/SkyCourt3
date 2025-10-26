# Implementation Plan

- [x] 1. Set up project structure and navigation integration






  - Create src/pages/Rentals.tsx with basic page structure using existing Header/Footer
  - Add rentals route to src/App.tsx router configuration
  - Update src/data/navigation.ts to include rentals menu item
  - _Requirements: 1.1, 1.2, 8.1, 8.6_

- [x] 2. Migrate core data and utilities





  - [x] 2.1 Create src/data/rentals.ts with migrated constants


    - Copy testimonials, faqItems, timelineItems, statsItems, and facilities data
    - Update TypeScript interfaces for all data structures
    - _Requirements: 8.4_

  - [x] 2.2 Create src/hooks/useCountUp.ts hook


    - Migrate the useCountUp hook from renters-page
    - Ensure compatibility with main website's React version
    - _Requirements: 3.2_


- [x] 3. Implement hero section with design system integration




  - [x] 3.1 Create src/components/rentals/RentalsHero.tsx


    - Migrate hero component with updated styling classes
    - Replace bg-highlight with bg-scm-green and other color updates
    - Integrate useCountUp hook for statistics animation
    - _Requirements: 2.1, 2.2, 4.1_

  - [x] 3.2 Implement scroll-to-section functionality


    - Add smooth scroll behavior for CTA buttons
    - Create ref forwarding for inquiry form section
    - _Requirements: 3.4_
-

- [x] 4. Create location and statistics sections









  - [x] 4.1 Create src/components/rentals/LocationSection.tsx


    - Migrate location section with frosted glass styling
    - Update typography to use Alan Sans font system
    - Implement parallax background effects
    - _Requirements: 2.3, 2.6, 4.2_

  - [x] 4.2 Create src/components/rentals/VisualStatsGrid.tsx


    - Migrate visual stats grid with updated color scheme
    - Implement Framer Motion animations for reveal effects
    - Add responsive grid layout for mobile devices
    - _Requirements: 2.1, 3.1, 5.3_
-


- [x] 5. Implement testimonials and timeline sections






  - [x] 5.1 Create src/components/rentals/TenantTestimonials.tsx


    - Migrate testimonials section with brand logos and quotes
    - Implement alternating layout pattern similar to About page StorySection
    - Add smooth reveal animations on scroll
    - _Requirements: 3.1, 4.3_

  - [x] 5.2 Create src/components/rentals/BenefitsTimeline.tsx


    - Migrate benefits timeline with updated styling
    - Implement vertical timeline design with animated progress line
    - Add icon integration and hover effects


    - _Requirements: 2.6, 3.3, 4.4_


- [x] 6. Create facilities and FAQ sections






  - [x] 6.1 Create src/components/rentals/FacilitiesGrid.tsx


    - Migrate facilities grid with bento-style layout
    - Implement responsive grid that stacks on mobile
    - Add hover effects and image parallax
    - _Requirements: 2.6, 4.5, 5.3_

  - [x] 6.2 Create src/components/rentals/RentalsFAQ.t



sx
    - Migrate FAQ section with accordion functionality
    - Implement smooth expand/collapse animations

    - Style with consistent typography and spacing
    - _Requirements: 4.6_

- [x] 7. Implement inquiry form with Web3Forms integration






  - [x] 7.1 Create src/components/rentals/InquiryForm.tsx


    - Migrate inquiry form with all required fields
    - Integrate with existing Web3Forms system from main website
    - Implement form validation with error messages


    - _Requirements: 7.1, 7.2, 7.5_

  - [x] 7.2 Add form success and error handling



    - Implement success confirmation display
    - Add proper error handling for form submission failures
    - Style feedback messages consistently with main website
    - _Requirements: 7.3_


- [x] 8. Create final CTA and floating elements







  - [x] 8.1 Create src/components/rentals/FinalCTA.tsx


    - Migrate final call-to-action section
    - Update styling to match main website gradient patterns

    - Implement prominent button styling with hover effects
    --_Requirements: 4.8_


  - [x] 8.2 Add floating WhatsApp button


    - Create floating WhatsApp CTA button for mobile
    - Position fixed at bottom-right with proper z-index
    - Add touch-friendly sizing and hover animations
    - _Requirements: 4.7, 5.4_

- [x] 9. Integrate all components in main Rentals page







  - [x] 9.1 Complete src/pages/Rentals.tsx implementation




    - Import and arrange all rental components in proper order
    - Add grain overlay and SmoothScroll wrapper
    - Implement scroll-to-inquiry functionality
    - _Requirements: 1.3, 1.4, 8.6_

  - [x] 9.2 Add responsive design and mobile optimizations


    - Ensure all sections stack properly on mobile devices
    - Implement touch-friendly button sizes (minimum 44px)
    - Test and optimize mobile layout and interactions
    - _Requirements: 5.1, 5.2, 5.3_
-

- [-] 10. Add internationalization support



  - [x] 10.1 Integrate with existing i18n system


    - Add rental page translations to i18n files
    - Implement language toggle functionality through Header
    - Ensure proper RTL text direction for Arabic content
    - _Requirements: 6.1, 6.2, 6.3_

  - [ ] 10.2 Preserve Arabic content and layout






    - Maintain all Arabic text from original renters page
    - Ensure proper text alignment and layout in both languages
    - Test language switching functionality
    - _Requirements: 6.4, 6.5_

- [ ]* 11. Testing and quality assurance
  - [ ]* 11.1 Write unit tests for rental components
    - Create tests for RentalsHero, InquiryForm, and other key components
    - Test form validation and submission functionality
    - Verify animation and interaction behaviors
    - _Requirements: All_

  - [ ]* 11.2 Perform integration testing
    - Test navigation integration and routing
    - Verify design system consistency across components
    - Test responsive behavior on various screen sizes
    - _Requirements: All_

  - [ ]* 11.3 Accessibility and performance testing
    - Verify WCAG compliance for all components
    - Test keyboard navigation and screen reader compatibility
    - Monitor bundle size impact and optimize if needed
    - _Requirements: All_