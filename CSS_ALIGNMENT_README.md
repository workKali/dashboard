# CSS Property Alignment Summary

## Overview
This document summarizes the CSS property alignment across **ALL components** in the `/src/components` AND `/src/examples` folders. All components now use the exact CSS properties specified in their respective showcase code blocks.

## Complete Component List - All Updated (26 Total)

### Components Folder (11 components) ✅

### Examples Folder (15 components) ✅

## Component Details

### /src/components/ - Core Components

### 1. GenericButton Component - Full CSS Alignment ✅

### Export Template
```css
background: transparent;
border: 1px solid rgb(225, 232, 231);
border-radius: 8px;
padding: 4px 12px;
color: rgb(15, 31, 20);
font-size: 10px;
font-weight: 600;
```

### Toggle Template
```css
background: transparent;
border: none;
border-bottom: 2px solid accent;
padding: 9px 14px;
cursor: pointer;
```

### Action Template
```css
background: #16a34a;
color: white;
border: none;
border-radius: 6px;
padding: 3px 10px;
font-size: 10px;
```

### Pill Template
```css
background: #fee2e2;
color: #991b1b;
border-radius: 20px;
padding: 2px 10px;
font-size: 10.5px;
```

### Filter Template
```css
background: #f0fdf4;
border: 1px solid #e1e8e7;
border-radius: 8px;
padding: 5px 10px;
font-size: 10.5px;
```

### Modal Template
```css
background: #16a34a;
color: white;
border: none;
border-radius: 10px;
padding: 11px;
width: 100%;
font-weight: 600;
```

### Inline Template
```css
background: #dcfce7;
color: #166534;
border: 1px solid #bbf7d0;
border-radius: 6px;
padding: 2px 7px;
font-size: 10px;
```

### Primary Template
```css
background: #16a34a;
color: white;
border: 1px solid #16a34a;
border-radius: 8px;
padding: 4px 12px;
font-size: 10px;
```

### 2. AgroButton Component - Full CSS Alignment ✅

### Styled Tab Button
```css
padding: 9px 14px;
min-width: auto;
background: transparent;
border-bottom: 2px solid #16a34a;
color: #16a34a;
font-weight: 600;
border-radius: 0;
font-size: 10px;
text-transform: none;
cursor: pointer;
```

### Styled Toggle Button
```css
background: #16a34a;
color: white;
border-radius: 6px;
padding: 3px 10px;
font-size: 10px;
text-transform: none;
font-weight: 600;
border: none;
```

### Close Button
```css
color: rgb(15, 31, 20);
font-size: 18px;
padding: 2px;
line-height: 1;
background: transparent;
border: none;
cursor: pointer;
```

### Variants (Primary, Secondary, Success, Warning, Ghost)
```css
/* Primary */
bgcolor: #16a34a;
color: white;
font-weight: 700;
border: none;

/* Secondary */
bgcolor: rgba(59, 130, 246, 0.05);
border: 1px solid rgba(59, 130, 246, 0.2);
color: #3b82f6;
font-size: 9.5px;

/* Success */
bgcolor: rgba(22, 163, 74, 0.05);
border: 1px solid rgba(22, 163, 74, 0.2);
color: #16a34a;
font-size: 9.5px;

/* Warning */
bgcolor: rgba(239, 68, 68, 0.05);
border: 1px solid rgba(239, 68, 68, 0.2);
color: #ef4444;
border-radius: 8px;

/* Ghost */
bgcolor: transparent;
color: rgb(15, 31, 20);
```

### 3. Collapse Component - Full CSS Alignment ✅

### Container
```css
background: #ffffff;
border: 1px solid rgb(225, 232, 231);
border-radius: 12px;
overflow: hidden;
box-shadow: 0 1px 4px rgba(15,31,20,0.04);
```

### Header
```css
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px 16px;
cursor: pointer;
user-select: none;
border-bottom: 1px solid rgb(225, 232, 231);
```

### Title Typography
```css
font-size: 11px;
font-weight: 700;
color: rgb(15, 31, 20);
text-transform: uppercase;
letter-spacing: 0.06em;
```

### Toggle Icon
```css
font-size: 18px;
color: rgb(122, 158, 142);
line-height: 1;
font-weight: 300;
```

### 4. DomainActionButton Component - Full CSS Alignment ✅

### Domain Variants
```css
/* Hydric Deficit */
bg: rgba(59, 130, 246, 0.05);
border: rgba(59, 130, 246, 0.2);
color: #3b82f6;
hoverBg: rgba(59, 130, 246, 0.1);
badgeBg: #3b82f6;

/* Risk Assessment */
bg: rgba(239, 68, 68, 0.05);
border: rgba(239, 68, 68, 0.2);
color: #ef4444;
hoverBg: rgba(239, 68, 68, 0.1);
badgeBg: #ef4444;

/* Payment Overdue */
bg: rgba(239, 68, 68, 0.05);
border: rgba(239, 68, 68, 0.2);
color: #ef4444;
hoverBg: rgba(239, 68, 68, 0.1);
badgeBg: #ef4444;

/* Carbon Emission */
bg: rgb(248, 250, 252);
border: rgb(203, 213, 225);
color: rgb(100, 116, 139);
hoverBg: rgb(203, 213, 225);
badgeBg: rgb(100, 116, 139);

/* Deforestation Alert */
bg: rgb(255, 241, 241);
border: rgb(252, 165, 165);
color: rgb(248, 113, 113);
hoverBg: rgb(252, 165, 165);
badgeBg: #ef4444;

/* Default */
bg: #ffffff;
border: rgb(225, 232, 231);
color: #16a34a;
hoverBg: rgba(15, 31, 20, 0.04);
badgeBg: #16a34a;
```

### Base Button Styles
```css
border-radius: 8px;
padding: 5px 0;
font-size: 10px;
font-weight: 600;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
text-transform: none;
```

### 5. FilterToggleButton Component - Full CSS Alignment ✅

### Button Styles
```css
display: flex;
align-items: center;
gap: 5px;
background: rgb(240, 253, 244);
border: 1px solid rgb(22, 163, 74);
border-radius: 8px;
padding: 4px 12px;
cursor: pointer;
color: rgb(22, 163, 74);
font-size: 10px;
font-weight: 600;
transition: 0.15s;
white-space: nowrap;
text-transform: none;
```

### Hover States
```css
background: rgba(22, 163, 74, 0.04);
border-color: rgb(22, 163, 74);
```

### 6. PortfolioChatInput Component - Full CSS Alignment ✅

### Container
```css
padding: 8px 12px 12px;
flex-shrink: 0;
border-top: 1px solid rgb(225, 232, 231);
width: 100%;
```

### Input Container
```css
display: flex;
gap: 6px;
align-items: center;
background: #ffffff;
border-radius: 8px;
border: 1px solid rgb(225, 232, 231);
padding: 4px 6px 4px 10px;
```

### Input Field
```css
font-size: 10.5px;
color: rgb(15, 31, 20);
background: transparent;
```

### Placeholder
```css
color: rgb(122, 158, 142);
opacity: 0.7;
```

### Send Button
```css
background: #16a34a;
color: #fff;
border: none;
border-radius: 6px;
padding: 4px 10px;
cursor: pointer;
font-size: 10px;
font-weight: 700;
flex-shrink: 0;
min-width: auto;
```

### 7. StatusBadge Component - Full CSS Alignment ✅

### Badge Container
```css
display: flex;
align-items: center;
gap: 4px;
border-radius: 20px;
padding: 2px 9px;
font-size: 10px;
font-weight: 600;
white-space: nowrap;
```

### Color Variants
```css
/* Success */
bg: rgba(22, 163, 74, 0.1);
border: rgba(22, 163, 74, 0.2);
color: #166534;
indicator: #16a34a;

/* Warning */
bg: rgba(217, 119, 6, 0.1);
border: rgba(217, 119, 6, 0.2);
color: #92400e;
indicator: #d97706;

/* Info */
bg: rgba(14, 165, 233, 0.1);
border: rgba(14, 165, 233, 0.3);
color: #1e40af;
indicator: #0ea5e9;

/* Error */
bg: rgba(239, 68, 68, 0.1);
border: rgba(239, 68, 68, 0.2);
color: #dc2626;
indicator: #ef4444;

/* Critical */
bg: rgba(239, 68, 68, 0.1);
color: #dc2626;
border: rgba(239, 68, 68, 0.2);
indicator: #ef4444;

/* Default */
bg: #ffffff;
border: rgb(225, 232, 231);
color: rgb(122, 158, 142);
indicator: rgb(122, 158, 142);
```

### Indicator Dot
```css
width: 5px;
height: 5px;
border-radius: 50%;
background: variant-color;
flex-shrink: 0;
```

### 8. Tabs Component - Full CSS Alignment ✅

### Tab Styles
```css
padding: 0 16px;
border-bottom: 2px solid #16a34a;
cursor: pointer;
background: transparent;
color: #16a34a;
font-size: 10px;
font-weight: 600;
white-space: nowrap;
transition: color 0.15s;
position: relative;
flex-shrink: 0;
text-transform: none;
min-height: auto;
```

### Active State
```css
border-bottom: 2px solid #16a34a;
color: #16a34a;
font-weight: 600;
```

### Inactive State
```css
border-bottom: 2px solid transparent;
color: rgb(15, 31, 20);
font-weight: 400;
```

### Hover States
```css
/* Active Hover */
color: #166534;

/* Inactive Hover */
color: rgb(15, 31, 20);
```

### 9. TitledSection Component - Full CSS Alignment ✅

### Section Header
```css
margin-bottom: 12px;
padding-bottom: 10px;
border-bottom: 1px solid rgb(225, 232, 231);
```

### Title Typography
```css
color: rgb(122, 158, 142);
font-size: 11px;
font-weight: 600;
letter-spacing: 0.06em;
text-transform: uppercase;
margin: 0;
```

### Subtitle Typography
```css
color: rgb(122, 158, 142);
font-size: 10.5px;
font-weight: 300;
margin: 2px 0 0;
```

### 10. StatCard Component - Full CSS Alignment ✅

### Base Container
```css
background: #ffffff;
border: 1px solid rgb(225, 232, 231);
border-radius: 12px;
padding: 12px 14px;
box-shadow: 0 1px 4px rgba(15,31,20,0.04);
```

### Label Typography
```css
font-size: 10px;
text-transform: uppercase;
letter-spacing: 0.08em;
color: rgb(122, 158, 142);
font-weight: 500;
margin-bottom: 4px;
```

### Value Typography
```css
font-size: 22px;
font-weight: 700;
color: variant-color;
line-height: 1;
```

### Unit Typography
```css
font-size: 11px;
color: rgb(122, 158, 142);
font-weight: 300;
```

### 11. AlertCard Component - Full CSS Alignment ✅

### Base Container
```css
background: variant-background;
border: variant-border;
border-radius: 12px;
padding: 14px 16px;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 6px;
box-shadow: 0 1px 4px rgba(15,31,20,0.04);
min-width: 0;
max-width: 100%;
width: 100%;
box-sizing: border-box;
```

### Title Typography
```css
margin: 0;
font-size: 10.5px;
font-weight: 600;
color: rgb(122, 158, 142);
text-transform: variant-specific;
letter-spacing: variant-specific;
```

### Border Elements
```css
/* Top Border */
position: absolute;
top: 0;
left: 0;
right: 0;
height: 3px;
background: variant-color;
border-radius: 12px 12px 0 0;

/* Left Border */
position: absolute;
top: 0;
left: 0;
bottom: 0;
width: 3px;
background: variant-color;
border-radius: 12px 0 0 12px;
```

### /src/examples/ - Demo Components

### 12. AgroButtonShowcase Component - Full CSS Alignment ✅

### Container
```css
padding: 20px;
background: #ffffff;
min-height: 100vh;
font-family: 'Poppins', sans-serif;
```

### Typography
```css
color: rgb(15, 31, 20);
font-weight: 700;
```

### Paper Containers
```css
padding: 12px;
border-radius: 12px;
border: 1px solid rgb(225, 232, 231);
```

### Caption Typography
```css
color: rgb(122, 158, 142);
font-weight: 600;
```

### Tab Container
```css
border-bottom: 1px solid rgb(225, 232, 231);
```

### Toggle Container
```css
background: #ffffff;
border: 1px solid rgb(225, 232, 231);
padding: 12px;
border-radius: 8px;
```

### 13. GenericButtonShowcase Component - Full CSS Alignment ✅

### Container
```css
padding: 16px;
max-width: 1200px;
margin: 0 auto;
```

### Typography
```css
color: rgb(122, 158, 142);
```

### Paper Containers
```css
padding: 12px;
```

### Code Blocks
```css
display: block;
padding: 8px;
background: #f5f5f5;
border-radius: 4px;
font-size: 11px;
white-space: pre-wrap;
```

### 14. ActionButtonDemo Component - Full CSS Alignment ✅

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### Caption Typography
```css
color: rgb(122, 158, 142);
```

### 15. AlertCardDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Error Colors
```css
color: #ef4444;
```

### Success Colors
```css
color: #16a34a;
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 16. ChatInputDemo Component - Full CSS Alignment ✅

### Chat Container
```css
border: 1px solid rgb(225, 232, 231);
border-radius: 8px;
height: 200px;
display: flex;
flex-direction: column;
```

### Placeholder Typography
```css
color: rgb(122, 158, 142);
text-align: center;
margin-top: 32px;
```

### 17. FormStyledDemo Component - Full CSS Alignment ✅

### Input Styles
```css
background: #ffffff;
border: 1px solid rgb(225, 232, 231);
border-radius: 8px;
padding: 6px 10px;
color: rgb(15, 31, 20);
```

### Placeholder Styles
```css
color: rgb(122, 158, 142);
opacity: 0.7;
```

### Select Styles
```css
background: #ffffff;
border: 1px solid rgb(225, 232, 231);
color: rgb(15, 31, 20);
```

### Label Styles
```css
color: rgb(122, 158, 142);
font-size: 10px;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.06em;
```

### Divider Styles
```css
height: 1px;
background: rgb(225, 232, 231);
```

### Code Containers
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 18. TabsDemo Component - Full CSS Alignment ✅

### Content Containers
```css
background: #ffffff;
border-radius: 4px;
padding: 8px;
min-height: 100px;
display: flex;
align-items: center;
justify-content: center;
```

### Typography
```css
color: rgb(122, 158, 142);
```

### Border Styles
```css
border: 1px solid rgb(225, 232, 231);
```

### 19. StatusBadgeDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 20. StatCardDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 21. CollapseDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 22. FilterDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 23. SectionBlockDemo Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 24. GenericButtonRefactoredShowcase Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 25. TailwindMUIExample Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

### 26. DesignShowcase Component - Full CSS Alignment ✅

### Typography Colors
```css
color: rgb(122, 158, 142);
```

### Info Container
```css
background: #ffffff;
padding: 8px;
border-radius: 4px;
```

## Common CSS Patterns Across ALL Components

### Consistent Color System
- **Primary Green**: #16a34a, #166534 (hover)
- **Error Red**: #ef4444, #dc2626
- **Success Green**: #166534, #dcfce7, #f0fdf4
- **Border Colors**: rgb(225, 232, 231), #e1e8e7, #bbf7d0
- **Text Colors**: rgb(15, 31, 20), rgb(122, 158, 142)
- **Background**: #ffffff

### Consistent Spacing Scale
- **Padding**: 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 12px, 14px, 16px, 20px
- **Border Radius**: 4px, 6px, 8px, 10px, 12px, 20px
- **Font Sizes**: 9.5px, 10px, 10.5px, 11px, 12px, 16px, 18px, 22px
- **Font Weights**: 300, 400, 500, 600, 700

### Consistent Box Shadow
- **Standard**: 0 1px 4px rgba(15,31,20,0.04)

### Consistent Transitions
- **Standard**: 0.15s, all 0.15s
- **Color**: color 0.15s

## Complete Alignment Verification

✅ **Components Folder (11/11)**: All core components match showcase CSS exactly  
✅ **Examples Folder (15/15)**: All demo components aligned with exact CSS  
✅ **GenericButton**: All 8 templates match showcase CSS exactly  
✅ **AgroButton**: All styled components and variants aligned  
✅ **Collapse**: Container, typography, and interactions aligned  
✅ **DomainActionButton**: All domain variants aligned  
✅ **FilterToggleButton**: Filter-specific styles aligned  
✅ **PortfolioChatInput**: Input container and send button aligned  
✅ **StatusBadge**: All status variants and indicators aligned  
✅ **Tabs**: Tab navigation and states aligned  
✅ **TitledSection**: Header and typography aligned  
✅ **StatCard**: Container and value display aligned  
✅ **AlertCard**: Container, borders, and typography aligned  
✅ **All Demo Components**: Typography, colors, and containers aligned  

## Benefits of Complete Alignment

1. **Visual Consistency**: All 26 components render exactly as shown in showcases
2. **Design System Integrity**: CSS properties follow established patterns across all components
3. **Maintainability**: Centralized CSS properties make updates easier
4. **Developer Experience**: Predictable styling across entire component library
5. **Performance**: Optimized CSS with minimal redundancy
6. **Scalability**: Consistent patterns for future component development
7. **Documentation**: Complete reference for all component styles

## Usage Guidelines

- Use the exact CSS properties specified for each component
- Maintain the consistent spacing scale and color system
- Follow the established font size and weight patterns
- Use the standardized hover states and transitions
- Apply the consistent border radius and shadow patterns
- Reference this document for any styling questions

This complete alignment ensures that **ALL 26 components** in both `/src/components` and `/src/examples` folders render exactly as shown in their respective showcases while maintaining a cohesive design system across the entire application.
