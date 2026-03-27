# Design System Implementation Guide

## Architecture Overview

This design system eliminates inline styles and provides a centralized token-based approach for consistent UI components.

## ✅ What's Allowed

### Tailwind CSS Usage
- **Layout**: flex, grid, spacing, positioning
- **Responsive design**: responsive utilities
- **Typography classes**: font-primary, text-sm, font-semibold
- **Spacing**: p-4, m-2, gap-3 (using token-based values)
- **Colors**: bg-primary-500, text-secondary, border-border

### MUI Component Usage
- **Component variants**: Use `variant="appExport"`, `variant="appToggle"`, etc.
- **Theme overrides**: All styling done through theme configuration
- **Component props**: size, disabled, onClick, etc.

### Token References
- **Colors**: semanticColors.success, baseColors.primary[500]
- **Spacing**: spacing.md, spacing.lg
- **Typography**: typography.fontSize.sm, typography.fontWeight.semibold

## ❌ What's Prohibited

### Never Use
- `styled()` from MUI
- `sx` prop inline styles (except exceptional cases)
- Arbitrary Tailwind classes (`w-[237px]`, `h-[123px]`)
- Hardcoded colors (`#16a34a`, `#ffffff`)
- Hardcoded spacing (`padding: 10px`)
- Inline style objects

## Component Variants

### AppButton Variants
```typescript
type AppButtonVariant = 
  | 'appExport'      // Transparent with border
  | 'appToggle'      // Tab-style with bottom border  
  | 'appAction'      // Colored background for actions
  | 'appPill'        // Rounded pill style
  | 'appFilter'      // Filter button style
  | 'appModal'       // Full-width modal button
  | 'appInline'      // Small inline button
  | 'appPrimary'     // Primary colored button
  | 'appNavigation'  // Pagination controls
  | 'appDrilldown'   // Drill-down links
  | 'appClose'       // Close icon buttons
```

## Usage Examples

### ✅ Correct Usage
```typescript
// Use variant system
<AppButton variant="appExport">Exportar</AppButton>
<AppButton variant="appAction">Activar todos</AppButton>
<AppButton variant="appModal">Aplicar y cerrar</AppButton>

// Use Tailwind for layout
<div className="flex gap-3 p-4">
  <AppButton variant="appPrimary">Primary</AppButton>
</div>

// Use token utilities
const riskColor = getRiskColor('Alto') // Returns semantic error color
```

### ❌ Incorrect Usage
```typescript
// Never use sx prop
<Button sx={{ backgroundColor: '#16a34a' }}>Wrong</Button>

// Never use styled components
const StyledButton = styled(Button)`background: #16a34a`

// Never use arbitrary classes
<div className="w-[237px]">Wrong</div>

// Never hardcode values
<div style={{ padding: '10px' }}>Wrong</div>
```

## Token Structure

### Base Tokens
- `baseColors`: primary, secondary, blue, red, neutral palettes
- `semanticColors`: success, warning, error, info, surface colors
- `textColors`: primary, secondary, tertiary, quaternary
- `typography`: font sizes, weights, line heights
- `spacing`: 0-20 scale
- `borderRadius`: sm to 4xl
- `shadows`: sm, md variants

### Component Tokens
- `buttonTokens`: All 11 button variant styles
- `cardTokens`: Default card styling
- `tooltipTokens`: Tooltip styling

## Migration Strategy

1. **Replace GenericButtonRefactored** with AppButton
2. **Convert sx props** to variant props
3. **Replace inline styles** with Tailwind classes
4. **Use token utilities** for dynamic colors
5. **Remove hardcoded values** from components

## File Structure

```
/src
├── theme/
│   ├── tokens/           # Centralized design tokens
│   ├── mui/             # MUI theme configuration
│   └── tailwind/        # Tailwind theme extension
├── components/
│   ├── ui/              # Base UI components (AppButton, AppCard)
│   └── domain/          # Domain-specific components
└── utils/
    └── token-utils.ts    # Token transformation utilities
```

This system ensures consistency, maintainability, and eliminates all prohibited styling practices.
