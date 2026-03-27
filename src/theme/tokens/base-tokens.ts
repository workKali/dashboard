import designTokens from '../../../design-tokens.json'

export const baseColors = {
  primary: designTokens.colors.primary,
  secondary: designTokens.colors.secondary,
  blue: designTokens.colors.blue,
  red: designTokens.colors.red,
  neutral: designTokens.colors.neutral,
}

export const semanticColors = {
  success: designTokens.colors.semantic.success,
  warning: designTokens.colors.semantic.warning,
  error: designTokens.colors.semantic.error,
  info: designTokens.colors.semantic.info,
  surface: designTokens.colors.semantic.surface,
  surfaceAlt: designTokens.colors.semantic.surfaceAlt,
  background: designTokens.colors.semantic.background,
  border: designTokens.colors.semantic.border,
  borderStrong: designTokens.colors.semantic.borderStrong,
}

export const textColors = {
  primary: designTokens.colors.text.primary,
  secondary: designTokens.colors.text.secondary,
  tertiary: designTokens.colors.text.tertiary,
  quaternary: designTokens.colors.text.quaternary,
}

export const domainColors = {
  hydric: designTokens.colors.domain.hydric,
  carbon: designTokens.colors.domain.carbon,
  forest: designTokens.colors.domain.forest,
}

export const typography = {
  fontFamily: {
    primary: designTokens.typography.fontFamily.primary,
  },
  fontSize: {
    // Extended scale for better scalability
    xs: designTokens.typography.fontSize.xs,     // 9.5px - UI elements, captions
    sm: designTokens.typography.fontSize.sm,     // 10px - Small buttons, labels
    base: designTokens.typography.fontSize.base, // 10.5px - Default text
    md: designTokens.typography.fontSize.md,     // 11px - Medium text
    lg: designTokens.typography.fontSize.lg,     // 13px - Large text
    xl: designTokens.typography.fontSize.xl,     // 22px - Headers
    // Extended scale for better hierarchy
    '2xl': '24px',  // Large headers
    '3xl': '30px',  // Hero text
    '4xl': '36px',  // Display text
  },
  fontWeight: {
    light: designTokens.typography.fontWeight.light,     // 300
    normal: designTokens.typography.fontWeight.normal,   // 400
    medium: designTokens.typography.fontWeight.medium,   // 500
    semibold: designTokens.typography.fontWeight.semibold, // 600
    bold: designTokens.typography.fontWeight.bold,       // 700
    // Extended weights for better control
    extralight: 200,
    extrabold: 800,
    black: 900,
  },
  lineHeight: {
    // Optimized line heights for readability
    none: 1,
    tight: designTokens.typography.lineHeight.tight,     // 1.0 - Compact UI
    snug: 1.05,  // Slightly more breathing room
    normal: designTokens.typography.lineHeight.normal,   // 1.1 - Default
    relaxed: 1.25, // Comfortable reading
    loose: 1.5,   // Spacious text
    // Line heights for specific font sizes
    'xs': 1.2,    // Small text needs more line height
    'sm': 1.15,   
    'base': 1.1,  
    'md': 1.2,
    'lg': 1.3,
    'xl': 1.4,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: designTokens.typography.letterSpacing.tight,  // 0.06em
    normal: '0',
    wide: designTokens.typography.letterSpacing.wide,    // 0.08em
    wider: '0.1em',
    widest: '0.15em',
  },
}

export const spacing = {
  0: designTokens.spacing['0'],
  1: designTokens.spacing['1'],
  2: designTokens.spacing['2'],
  3: designTokens.spacing['3'],
  4: designTokens.spacing['4'],
  5: designTokens.spacing['5'],
  6: designTokens.spacing['6'],
  8: designTokens.spacing['8'],
  10: designTokens.spacing['10'],
  12: designTokens.spacing['12'],
  14: designTokens.spacing['14'],
  16: designTokens.spacing['16'],
  20: designTokens.spacing['20'],
}

export const borderRadius = {
  none: designTokens.borderRadius.none,
  sm: designTokens.borderRadius.sm,
  md: designTokens.borderRadius.md,
  lg: designTokens.borderRadius.lg,
  xl: designTokens.borderRadius.xl,
  '2xl': designTokens.borderRadius['2xl'],
  '3xl': designTokens.borderRadius['3xl'],
  '4xl': designTokens.borderRadius['4xl'],
}

export const shadows = {
  sm: designTokens.shadows.sm,
  md: designTokens.shadows.md,
}
