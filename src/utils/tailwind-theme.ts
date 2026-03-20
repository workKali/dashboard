/**
 * Utility functions to sync Tailwind CSS with MUI theme
 * This provides a bridge between Tailwind classes and MUI theme tokens
 */

// Design token colors that match both MUI and Tailwind
export const colors = {
  primary: {
    50: 'rgb(240, 253, 244)',
    100: 'rgb(220, 252, 231)',
    200: 'rgb(187, 247, 208)',
    300: 'rgb(134, 239, 172)',
    400: 'rgb(74, 222, 128)',
    500: 'rgb(34, 197, 94)',
    600: 'rgb(22, 163, 74)',
    main: 'rgb(22, 163, 74)',
    light: 'rgb(187, 247, 208)',
    dark: 'rgb(22, 101, 52)',
  },
  secondary: {
    50: 'rgb(250, 240, 230)',
    100: 'rgb(254, 223, 213)',
    200: 'rgb(253, 211, 195)',
    300: 'rgb(251, 191, 165)',
    400: 'rgb(245, 158, 104)',
    500: 'rgb(234, 126, 61)',
    600: 'rgb(217, 119, 6)',
    main: 'rgb(217, 119, 6)',
    light: 'rgb(253, 211, 195)',
    dark: 'rgb(146, 64, 14)',
  },
  error: {
    50: 'rgb(254, 242, 242)',
    100: 'rgb(254, 226, 226)',
    200: 'rgb(252, 165, 165)',
    300: 'rgb(248, 113, 113)',
    400: 'rgb(239, 68, 68)',
    500: 'rgb(220, 38, 38)',
    600: 'rgb(185, 28, 28)',
    main: 'rgb(220, 38, 38)',
    light: 'rgb(252, 165, 165)',
    dark: 'rgb(127, 29, 29)',
  },
  warning: {
    50: 'rgb(255, 251, 235)',
    100: 'rgb(254, 243, 199)',
    200: 'rgb(253, 230, 138)',
    300: 'rgb(252, 211, 77)',
    400: 'rgb(251, 191, 36)',
    500: 'rgb(245, 158, 11)',
    600: 'rgb(217, 119, 6)',
    main: 'rgb(245, 158, 11)',
    light: 'rgb(253, 230, 138)',
    dark: 'rgb(146, 64, 14)',
  },
  info: {
    50: 'rgb(239, 246, 255)',
    100: 'rgb(219, 234, 254)',
    200: 'rgb(191, 219, 254)',
    300: 'rgb(147, 197, 253)',
    400: 'rgb(96, 165, 250)',
    500: 'rgb(59, 130, 246)',
    600: 'rgb(37, 99, 235)',
    main: 'rgb(59, 130, 246)',
    light: 'rgb(191, 219, 254)',
    dark: 'rgb(30, 64, 175)',
  },
  success: {
    50: 'rgb(240, 253, 244)',
    100: 'rgb(220, 252, 231)',
    200: 'rgb(187, 247, 208)',
    300: 'rgb(134, 239, 172)',
    400: 'rgb(74, 222, 128)',
    500: 'rgb(34, 197, 94)',
    600: 'rgb(22, 163, 74)',
    main: 'rgb(22, 163, 74)',
    light: 'rgb(187, 247, 208)',
    dark: 'rgb(22, 101, 52)',
  },
  text: {
    primary: 'rgb(17, 24, 39)',
    secondary: 'rgb(75, 85, 99)',
    disabled: 'rgb(156, 163, 175)',
  },
  background: {
    default: 'rgb(255, 255, 255)',
    paper: 'rgb(255, 255, 255)',
  },
  divider: 'rgb(229, 231, 235)',
};

// Enhanced font sizes that match design tokens
export const fontSizes = {
  xs: '9.5px',   // UI elements, captions
  sm: '10px',    // Small buttons, labels
  base: '10.5px', // Default text
  md: '11px',    // Medium text
  lg: '13px',    // Large text
  xl: '22px',    // Headers
  '2xl': '24px', // Large headers
  '3xl': '30px', // Hero text
  '4xl': '36px', // Display text
};

// Enhanced font weights for better control
export const fontWeights = {
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

// Optimized line heights for readability
export const lineHeights = {
  none: 1,
  tight: 1,
  snug: 1.05,
  normal: 1.1,
  relaxed: 1.25,
  loose: 1.5,
  // Line heights for specific font sizes
  xs: 1.2,
  sm: 1.15,
  base: 1.1,
  md: 1.2,
  lg: 1.3,
  xl: 1.4,
};

// Enhanced letter spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '0.06em',
  normal: '0',
  wide: '0.08em',
  wider: '0.1em',
  widest: '0.15em',
};

// Spacing tokens
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  '5xl': '48px',
  '6xl': '64px',
};

// Border radius tokens
export const borderRadius = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  full: '9999px',
  pill: '20px',
  button: '8px',
  card: '12px',
};

// Shadow tokens
export const shadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 4px rgba(15,31,20,0.04)',
  md: '0 4px 6px rgba(15,31,20,0.07)',
  lg: '0 4px 8px rgba(15,31,20,0.08)',
  xl: '0 4px 10px rgba(15,31,20,0.09)',
  '2xl': '0 4px 14px rgba(15,31,20,0.1)',
  '3xl': '0 4px 18px rgba(15,31,20,0.11)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
};

// Utility function to get Tailwind class from MUI color
export const getTailwindColor = (muiColor: string, shade: string = 'main') => {
  const [colorName] = muiColor.split('.');
  const color = colors[colorName as keyof typeof colors];
  
  if (color && typeof color === 'object' && shade in color) {
    return color[shade as keyof typeof color];
  }
  
  return color || muiColor;
};

// Utility function to convert MUI sx props to Tailwind classes
export const sxToTailwind = (sx: Record<string, any>): string[] => {
  const classes: string[] = [];
  
  Object.entries(sx).forEach(([key, value]) => {
    switch (key) {
      case 'color':
        if (typeof value === 'string') {
          const colorName = value.replace('rgb(', '').replace(')', '').split(', ').map(Number);
          classes.push(`text-[${value}]`);
        }
        break;
      case 'backgroundColor':
        if (typeof value === 'string') {
          classes.push(`bg-[${value}]`);
        }
        break;
      case 'fontSize':
        if (typeof value === 'string') {
          const size = value.replace('var(--font-size-)', '');
          classes.push(`text-${size}`);
        }
        break;
      case 'padding':
      case 'p':
        if (typeof value === 'string') {
          const size = value.replace('var(--spacing-)', '').replace('px', '');
          classes.push(`p-${size}`);
        }
        break;
      case 'margin':
      case 'm':
        if (typeof value === 'string') {
          const size = value.replace('var(--spacing-)', '').replace('px', '');
          classes.push(`m-${size}`);
        }
        break;
      case 'borderRadius':
        if (typeof value === 'string') {
          const size = value.replace('var(--border-radius-)', '').replace('px', '');
          classes.push(`rounded-${size}`);
        }
        break;
      case 'border':
        if (typeof value === 'string' && value.includes('1px solid')) {
          const color = value.replace('1px solid ', '');
          classes.push(`border-[${color}]`);
        }
        break;
    }
  });
  
  return classes;
};

// Enhanced typography patterns for common use cases
export const typographyPatterns = {
  // Heading patterns
  heading: {
    display: 'text-4xl font-black leading-xl tracking-tight',
    hero: 'text-3xl font-bold leading-xl tracking-tight',
    section: 'text-2xl font-semibold leading-lg tracking-tight uppercase',
    subsection: 'text-xl font-semibold leading-lg tracking-tight',
    small: 'text-lg font-semibold leading-md tracking-normal',
    micro: 'text-md font-semibold leading-md tracking-normal',
  },
  
  // Body text patterns
  body: {
    default: 'text-base font-normal leading-base tracking-normal',
    medium: 'text-base font-medium leading-base tracking-normal',
    small: 'text-sm font-normal leading-sm tracking-normal',
    caption: 'text-xs font-normal leading-xs tracking-normal',
  },
  
  // Button patterns
  button: {
    primary: 'text-sm font-semibold leading-tight tracking-tight',
    small: 'text-xs font-semibold leading-tight tracking-tight',
    large: 'text-md font-semibold leading-snug tracking-tight',
  },
  
  // UI patterns
  ui: {
    label: 'text-sm font-medium leading-sm tracking-normal',
    input: 'text-base font-normal leading-base tracking-normal',
    nav: 'text-sm font-semibold leading-tight tracking-tight',
    badge: 'text-xs font-semibold leading-none tracking-wide uppercase',
  },
};

// Pre-defined Tailwind class combinations for common MUI patterns
export const tailwindPatterns = {
  // Button patterns
  button: {
    primary: 'bg-primary text-white rounded-button px-4 py-2 font-semibold hover:bg-primary-dark transition-colors',
    secondary: 'bg-secondary text-white rounded-button px-4 py-2 font-semibold hover:bg-secondary-dark transition-colors',
    error: 'bg-error text-white rounded-button px-4 py-2 font-semibold hover:bg-error-dark transition-colors',
    outlined: 'border border-primary text-primary rounded-button px-4 py-2 font-semibold hover:bg-primary hover:text-white transition-colors',
  },
  
  // Card patterns
  card: 'bg-background-paper rounded-card shadow-md border border-divider',
  
  // Input patterns
  input: 'border border-divider rounded-button px-3 py-2 text-sm focus:border-primary focus:outline-none transition-colors',
  
  // Typography patterns (updated with enhanced tokens)
  text: {
    h1: 'text-4xl font-bold leading-xl tracking-tight',
    h2: 'text-3xl font-bold leading-xl tracking-tight',
    h3: 'text-2xl font-semibold leading-lg tracking-tight uppercase',
    h4: 'text-xl font-semibold leading-lg tracking-tight',
    h5: 'text-lg font-semibold leading-md tracking-normal',
    h6: 'text-md font-semibold leading-md tracking-normal',
    subtitle1: 'text-md font-medium leading-normal tracking-normal',
    subtitle2: 'text-sm font-medium leading-sm tracking-normal',
    body1: 'text-base font-normal leading-base tracking-normal',
    body2: 'text-sm font-normal leading-sm tracking-normal',
    button: 'text-sm font-semibold leading-tight tracking-tight',
    caption: 'text-xs font-normal leading-xs tracking-normal',
    overline: 'text-xs font-semibold leading-none tracking-wide uppercase',
  },
  
  // Layout patterns
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  
  // Spacing patterns
  section: 'py-lg',
  subsection: 'py-md',
  element: 'py-sm',
};

// Export a combined theme object for easy access
export const theme = {
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacing,
  spacing,
  borderRadius,
  shadows,
  patterns: tailwindPatterns,
  typography: typographyPatterns,
  getTailwindColor,
  sxToTailwind,
};

export default theme;
