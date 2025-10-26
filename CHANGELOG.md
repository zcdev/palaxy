## [1.0.2] - 2025-10-26
### ✨ Post-Launch Hotfixes(2)

- Integrated Vercel Web Analytics for real-time performance and UX insight.
- Adjusted Wave Prism design to use thinner, uniform strokes for consistent rendering across browsers.
- Switched modal overlay to a solid black background for stronger focus and visual clarity.
- Refined paragraph ragging with invisible non-breaking spaces for smoother text flow.
- Removed `overflow: hidden` from the Transmission section container to prevent top text and button cutoff.
- Improved mobile scroll behavior and layout spacing for smoother navigation.
- Radically reduced and proportionally scaled image assets to optimize load speed and maintain perfect 100/100 Lighthouse scores on both desktop and mobile.

## [v1.0.1] – 2025-10-25
### ✨ Post-Launch Hotfixes(1)

- Fixed Open Graph image path for social preview
- Adjusted mobile modal scroll behavior
- Minor typography and spacing refinements
- Verified production rendering consistency

## [v1.0.0] - 2025-10-25
### ✨ Official Launch Release

- Completed full UI/UX polish across all components and pages
- Verified 100/100 Lighthouse scores for Performance, Accessibility, Best Practices, and SEO
- Finalized avatar logic, force map interactions, and survey flow
- Integrated scroll-to-top, return navigation, and smooth transitions
- Added complete SEO metadata, canonical URLs, and Open Graph previews
- Deployed under custom domain https://palaxy.fun/
- Refined responsive layout and accessibility (ARIA labels, alt text, semantic HTML)
- Updated project documentation and portfolio-ready README
- Conducted final QA and production verification

## [v0.9.3] - 2025-10-25
### ✨ SEO & Metadata Implementation

- Added robots.txt to control crawler access
- Generated sitemap.ts for automated URL indexing
- Implemented meta description, keywords, and Open Graph tags
- Added Twitter Card metadata for rich social sharing
- Configured canonical URL via Next.js metadata to avoid duplicates
- Added favicon and verified OG preview image assets
- Introduced structured data (JSON-LD CreativeWork schema) for better search - context
- Updated site title, description, and theme color for consistent branding
- Confirmed 100/100 Lighthouse scores (Performance, Accessibility, Best - Practices, SEO)
- Validated metadata through open-graph.dev and Twitter Card preview
- Confirmed correct indexing paths via robots and sitemap test

## [v0.9.3] - 2025-10-25
### ✨ Minor Enhancements with UI Polish

- refactored handleDenyAvatar → handleReturnHome to unify navigation low
- added Return Home button with shared select phase + onReturn props
- implemented scroll-to-top on PulseSurvey and Transmission screens
- fixed shared ResponsiveImage component for auto width/height to revent layout shift
- standardized all import quotes to single quotes across project
- renamed asset group from palaxy group → palaxy pals for clarity
- refined layout spacing, pixel alignment, and code comments
- improved copywriting consistency and tone

## [v0.9.2] - 2025-10-24 
### ✨ Final UX Polish

- Routing: Moved main page from /palaxy to root (/) for clean URLs.
- UI Enhancements: Added Palaxy Pals’ Words for friendly flavor text.
- Form Fix: Resolved auto-submit issue by defaulting Button to type="button".
- Scroll Behavior: Implemented scroll-to-top on page load for smoother transitions.
- Accessibility & Styling: Verified ARIA labels, color contrast, and responsive padding.
- Backgrounds: Ensured fixed-position star layers render consistently across routes.

## [v0.9.1] - 2025-10-24  
### ✨ Transmission Animation Enhancement (Wave Prism)

- Added Wave Prism–inspired animated background to the Transmission page using Motion One and simplex-noise    
- Refined layout spacing, alignment, and visual rhythm for a more balanced composition  
- Replaced `<div>` wrappers with semantic `<section>` tags for clarity and accessibility  
- Styled canvas and adjusted z-index layering to integrate cleanly with the shared cosmic starfield  
- Pixel-level UI adjustments and visual polish pass
- New dependencies: `motion`, `simplex-noise`, `clsx`, and `tailwind-merge`  
- Maintains performance consistency across devices with GPU-accelerated motion  
- Prepares the codebase for v0.9.2 UX polish milestone and v1.0.0 final release

## [v0.9.0] - 2025-10-23
### ✨ Zod Form Validation + Supabase Integration 

- Added Zod schema-based validation for all survey questions with custom error messages. Strengthens data integrity between frontend and backend.
- Introduced Supabase client setup and survey submission insert logic. Survey results now submit securely to the backend.
- Moved `onSubmit` logic from the button to the form for better semantics and state management. Fixed progress calculation and validation flow.
- Updated prop types and refined `data-state` handling with `clsx` for cleaner, type-safe UI patterns for the button component.
- Improved spacing and typography for cleaner layouts.
- Adjusted ragging and responsive alignment on the Transmission section.
- Verified consistent behavior on both mobile and desktop.
- Preserved keyboard navigation and focus management from earlier builds.
- Confirmed full compatibility post-validation refactor.

