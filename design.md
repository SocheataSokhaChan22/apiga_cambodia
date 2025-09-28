# APIGA Cambodia Website Design Style Guide

## Design Philosophy

### Visual Language
The design embodies Cambodia's rich cultural heritage while projecting a modern, professional image appropriate for an internet governance academy. The aesthetic balances traditional Cambodian elements with contemporary digital design principles, creating an authoritative yet approachable visual identity.

### Color Palette
- **Primary**: Deep Teal (#0F4C5C) - Representing trust, stability, and Cambodia's connection to water and growth
- **Secondary**: Warm Gold (#D4AF37) - Inspired by Cambodian temple architecture and royal heritage
- **Accent**: Coral (#FF6B6B) - Modern energy representing innovation and youth engagement
- **Neutral**: Charcoal (#2C3E50) - Professional text and interface elements
- **Background**: Soft Cream (#FEFEFE) - Clean, readable base

### Typography
- **Display Font**: "Playfair Display" - Elegant serif for headings, conveying authority and tradition
- **Body Font**: "Inter" - Clean, modern sans-serif for optimal readability
- **Accent Font**: "Source Code Pro" - Monospace for technical content and code snippets

## Visual Effects

### Used Libraries
- **Anime.js**: Smooth micro-interactions and page transitions
- **ECharts.js**: Interactive data visualizations for policy tracking and network diagrams
- **p5.js**: Creative coding for background effects and particle systems
- **Splide.js**: Elegant image carousels and content sliders
- **Pixi.js**: Advanced visual effects for hero sections

### Effect Implementation

#### Header Background Effect
- Subtle particle system using p5.js creating floating geometric patterns inspired by Cambodian textile designs
- Gentle movement suggesting connectivity and network flow
- Color transitions between primary and secondary colors

#### Text Effects
- **Hero Headings**: Color cycling emphasis between primary and accent colors
- **Section Titles**: Split-by-letter stagger animation on scroll reveal
- **Interactive Elements**: Subtle glow effect on hover using CSS filters

#### Image Effects
- **Hero Images**: Ken Burns pan/zoom effect for dynamic presentation
- **Gallery Images**: Displacement-hover reveal with Cambodian pattern overlays
- **Profile Images**: Circular crop with animated border on hover

#### Scroll Motion
- **Reveal Animations**: Content slides up with 20px translation and fade-in
- **Parallax Elements**: Background images move at 0.5x scroll speed
- **Progress Indicators**: Animated progress bars for policy implementation tracking

### Animation Principles
- **Timing**: All animations use consistent easing (cubic-bezier(0.4, 0, 0.2, 1))
- **Duration**: Micro-interactions 200-300ms, page transitions 500-600ms
- **Stagger**: 50ms delays between sequential elements
- **Performance**: All animations respect reduced motion preferences

## Layout & Composition

### Grid System
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters  
- **Mobile**: 4-column grid with 16px gutters

### Spacing Scale
- **Base Unit**: 8px
- **Micro**: 4px (tight spacing)
- **Small**: 16px (component padding)
- **Medium**: 32px (section spacing)
- **Large**: 64px (major section breaks)
- **XL**: 128px (page section dividers)

### Visual Hierarchy
- **H1**: 48px Playfair Display, Deep Teal
- **H2**: 36px Playfair Display, Charcoal
- **H3**: 24px Inter Bold, Charcoal
- **Body**: 16px Inter Regular, Charcoal
- **Caption**: 14px Inter Regular, muted

## Component Styling

### Navigation
- **Style**: Transparent background with backdrop blur
- **Hover**: Subtle underline animation with gold accent
- **Active**: Bold weight with primary color

### Buttons
- **Primary**: Deep Teal background, white text, subtle shadow
- **Secondary**: Gold border, transparent background, teal text
- **Hover**: Lift effect with increased shadow depth

### Cards
- **Style**: Clean white background with subtle border
- **Hover**: Gentle lift with shadow expansion
- **Content**: Proper padding with consistent spacing

### Forms
- **Inputs**: Clean borders with focus states in primary color
- **Validation**: Coral for errors, teal for success
- **Buttons**: Consistent with global button styles

## Cultural Integration

### Cambodian Elements
- **Patterns**: Subtle integration of traditional Cambodian motifs in decorative elements
- **Icons**: Custom iconography inspired by Angkor Wat architectural elements
- **Photography**: Authentic imagery showcasing Cambodia's digital transformation journey

### Accessibility
- **Contrast**: All text maintains 4.5:1 contrast ratio minimum
- **Focus States**: Clear, high-contrast focus indicators
- **Motion**: Respects user preferences for reduced motion
- **Screen Readers**: Semantic HTML with proper ARIA labels

## Responsive Behavior

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large**: 1440px+

### Adaptive Elements
- **Navigation**: Collapses to hamburger menu on mobile
- **Images**: Scale proportionally with maintained aspect ratios
- **Typography**: Scales appropriately across devices
- **Interactions**: Touch-friendly sizing on mobile devices