# Typography System Guide

A comprehensive, scalable typography system that works seamlessly across both MUI and Tailwind CSS components.

## Overview

The typography system is built on a centralized token-based approach that ensures consistency and scalability across the entire dashboard application.

## Font Sizes

### Scale Definition

| Size | Value | Use Case | Tailwind Class |
|------|-------|----------|----------------|
| xs | 9.5px | UI elements, captions | `text-xs` |
| sm | 10px | Small buttons, labels | `text-sm` |
| base | 10.5px | Default body text | `text-base` |
| md | 11px | Medium text | `text-md` |
| lg | 13px | Large text | `text-lg` |
| xl | 22px | Headers | `text-xl` |
| 2xl | 24px | Large headers | `text-2xl` |
| 3xl | 30px | Hero text | `text-3xl` |
| 4xl | 36px | Display text | `text-4xl` |

### Usage Guidelines

- **xs (9.5px)**: Use for captions, labels, and very small UI elements
- **sm (10px)**: Default for buttons, form labels, and secondary information
- **base (10.5px)**: Primary body text for content
- **md (11px)**: Emphasized body text and small headings
- **lg (13px)**: Subheadings and important UI elements
- **xl (22px)**: Page headings and section titles
- **2xl+ (24px+)**: Hero sections, display text, and marketing content

## Font Weights

### Weight Scale

| Weight | Value | Use Case | Tailwind Class |
|--------|-------|----------|----------------|
| extralight | 200 | Minimal emphasis | `font-extralight` |
| light | 300 | Subtle emphasis | `font-light` |
| normal | 400 | Default text | `font-normal` |
| medium | 500 | Moderate emphasis | `font-medium` |
| semibold | 600 | Strong emphasis | `font-semibold` |
| bold | 700 | Heavy emphasis | `font-bold` |
| extrabold | 800 | Very heavy emphasis | `font-extrabold` |
| black | 900 | Maximum emphasis | `font-black` |

### Usage Guidelines

- **normal (400)**: Default for body text and content
- **medium (500)**: Form labels and secondary emphasis
- **semibold (600)**: Buttons, navigation, and UI elements
- **bold (700)**: Headings and important information
- **extralight/light (200-300)**: Stylistic use only
- **extrabold/black (800-900)**: Display headings and special cases

## Line Heights

### Line Height Scale

| Height | Value | Use Case | Tailwind Class |
|--------|-------|----------|----------------|
| none | 1.0 | Compact UI | `leading-none` |
| tight | 1.0 | Compact UI | `leading-tight` |
| snug | 1.05 | Slightly relaxed | `leading-snug` |
| normal | 1.1 | Default text | `leading-normal` |
| relaxed | 1.25 | Comfortable reading | `leading-relaxed` |
| loose | 1.5 | Spacious text | `leading-loose` |

### Size-Specific Line Heights

| Font Size | Recommended Line Height |
|-----------|------------------------|
| xs (9.5px) | 1.2 |
| sm (10px) | 1.15 |
| base (10.5px) | 1.1 |
| md (11px) | 1.2 |
| lg (13px) | 1.3 |
| xl (22px) | 1.4 |

### Usage Guidelines

- **tight/none (1.0)**: Buttons, compact UI elements
- **snug (1.05)**: Navigation, tight layouts
- **normal (1.1)**: Default body text and content
- **relaxed (1.25)**: Long-form content, articles
- **loose (1.5)**: Educational content, special cases

## Letter Spacing

### Letter Spacing Scale

| Spacing | Value | Use Case | Tailwind Class |
|---------|-------|----------|----------------|
| tighter | -0.05em | Condensed text | `tracking-tighter` |
| tight | 0.06em | Default emphasis | `tracking-tight` |
| normal | 0 | Default text | `tracking-normal` |
| wide | 0.08em | Relaxed text | `tracking-wide` |
| wider | 0.1em | Very relaxed | `tracking-wider` |
| widest | 0.15em | Maximum spacing | `tracking-widest` |

### Usage Guidelines

- **tighter (-0.05em)**: Space-constrained environments
- **tight (0.06em)**: Default for headings and buttons
- **normal (0)**: Body text and content
- **wide (0.08em)**: Large headings and display text
- **wider/widest (0.1-0.15em)**: Special cases and stylistic use

## MUI Typography Variants

The system provides comprehensive MUI typography variants:

```typescript
{
  h1: { fontSize: '36px', fontWeight: 700, lineHeight: 1.4, letterSpacing: '0.06em' },
  h2: { fontSize: '30px', fontWeight: 700, lineHeight: 1.4, letterSpacing: '0.06em' },
  h3: { fontSize: '24px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '0.06em', textTransform: 'uppercase' },
  h4: { fontSize: '22px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '0.06em' },
  h5: { fontSize: '13px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '0' },
  h6: { fontSize: '11px', fontWeight: 600, lineHeight: 1.2, letterSpacing: '0' },
  body1: { fontSize: '10.5px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '0' },
  body2: { fontSize: '10px', fontWeight: 400, lineHeight: 1.15, letterSpacing: '0' },
  button: { fontSize: '10px', fontWeight: 600, lineHeight: 1.0, letterSpacing: '0.06em', textTransform: 'none' },
  caption: { fontSize: '9.5px', fontWeight: 400, lineHeight: 1.2, letterSpacing: '0' },
  overline: { fontSize: '9.5px', fontWeight: 600, lineHeight: 1.0, letterSpacing: '0.15em', textTransform: 'uppercase' }
}
```

## Tailwind CSS Equivalents

### Font Size Classes
```css
text-xs    /* 9.5px */
text-sm    /* 10px */
text-base  /* 10.5px */
text-md    /* 11px */
text-lg    /* 13px */
text-xl    /* 22px */
text-2xl   /* 24px */
text-3xl   /* 30px */
text-4xl   /* 36px */
```

### Font Weight Classes
```css
font-extralight  /* 200 */
font-light       /* 300 */
font-normal      /* 400 */
font-medium      /* 500 */
font-semibold    /* 600 */
font-bold        /* 700 */
font-extrabold   /* 800 */
font-black       /* 900 */
```

### Line Height Classes
```css
leading-none     /* 1.0 */
leading-tight    /* 1.0 */
leading-snug     /* 1.05 */
leading-normal   /* 1.1 */
leading-relaxed  /* 1.25 */
leading-loose    /* 1.5 */
```

### Letter Spacing Classes
```css
tracking-tighter /* -0.05em */
tracking-tight   /* 0.06em */
tracking-normal  /* 0 */
tracking-wide    /* 0.08em */
tracking-wider   /* 0.1em */
tracking-widest  /* 0.15em */
```

## Usage Examples

### MUI Components
```tsx
<Typography variant="h1">Display Heading</Typography>
<Typography variant="body1" sx={{ fontWeight: 'medium' }}>
  Medium weight body text
</Typography>
<Typography variant="button">
  Button Text
</Typography>
```

### Tailwind CSS
```html
<h1 className="text-4xl font-bold leading-xl tracking-tight">
  Display Heading
</h1>
<p className="text-base font-medium leading-base tracking-normal">
  Medium weight body text
</p>
<button className="text-sm font-semibold leading-tight tracking-tight">
  Button Text
</button>
```

### Predefined Patterns
```typescript
// Using utility patterns
import { typographyPatterns } from '../utils/tailwind-theme'

const headingClass = typographyPatterns.heading.display  // "text-4xl font-black leading-xl tracking-tight"
const bodyClass = typographyPatterns.body.default        // "text-base font-normal leading-base tracking-normal"
```

## Best Practices

### 1. Consistency
- Always use predefined tokens instead of arbitrary values
- Stick to the established scale for consistency
- Use semantic variants (h1, h2, body1, etc.) in MUI

### 2. Accessibility
- Maintain adequate contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Use appropriate font sizes for readability (minimum 10px for body text)
- Ensure line height provides good readability (1.1-1.5 for most text)

### 3. Responsive Design
- Consider scaling font sizes appropriately for different screen sizes
- Use relative units when appropriate for better responsiveness
- Test typography across different devices and browsers

### 4. Performance
- Use the predefined classes to minimize CSS generation
- Avoid inline styles and arbitrary values
- Leverage the token system for maintainability

## Migration Guide

### From Arbitrary Values
```css
/* Before */
font-size: 12px;
font-weight: 600;
line-height: 1.4;

/* After */
font-size: var(--font-size-sm);
font-weight: var(--font-weight-semibold);
line-height: var(--line-height-sm);
```

### From Inline Styles
```tsx
/* Before */
<div style={{ fontSize: '12px', fontWeight: 600 }}>

/* After */
<div className="text-sm font-semibold">
```

## Token Structure

The typography tokens are organized in a hierarchical structure:

```
src/theme/tokens/
├── base-tokens.ts          # Core typography definitions
├── component-tokens.ts     # Component-specific typography
└── semantic-tokens.ts      # Semantic color mappings
```

All typography values are sourced from `design-tokens.json` ensuring a single source of truth for the entire system.

## Testing

Use the `TypographyShowcase` component to visualize and test all typography variants:

```tsx
import { TypographyShowcase } from '../examples/TypographyShowcase'

// Render in your development environment
<TypographyShowcase />
```

This component provides a comprehensive overview of all typography tokens and their usage patterns.
