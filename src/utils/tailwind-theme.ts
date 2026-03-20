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

// Font sizes that match design tokens
export const fontSizes = {
  xs: '9.5px',
  sm: '10px',
  base: '10.5px',
  md: '11px',
  lg: '13px',
  xl: '22px',
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

// Pre-defined Tailwind class combinations for common MUI patterns
export const tailwindPatterns = {
  // Button patterns
  button: {
    primary: 'bg-primary text-white rounded-button px-4 py-2 font-medium hover:bg-primary-dark transition-colors',
    secondary: 'bg-secondary text-white rounded-button px-4 py-2 font-medium hover:bg-secondary-dark transition-colors',
    error: 'bg-error text-white rounded-button px-4 py-2 font-medium hover:bg-error-dark transition-colors',
    outlined: 'border border-primary text-primary rounded-button px-4 py-2 font-medium hover:bg-primary hover:text-white transition-colors',
  },
  
  // Card patterns
  card: 'bg-background-paper rounded-card shadow-md border border-divider',
  
  // Input patterns
  input: 'border border-divider rounded-button px-3 py-2 text-sm focus:border-primary focus:outline-none transition-colors',
  
  // Typography patterns
  text: {
    h1: 'text-xl font-bold text-primary',
    h2: 'text-lg font-semibold text-primary',
    h3: 'text-md font-semibold text-primary',
    body1: 'text-base text-primary',
    body2: 'text-sm text-secondary',
    caption: 'text-xs text-secondary',
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
  spacing,
  borderRadius,
  shadows,
  patterns: tailwindPatterns,
  getTailwindColor,
  sxToTailwind,
};

export default theme;
