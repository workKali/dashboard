'use client'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import designTokens from '../../design-tokens.json';

const theme = createTheme({
  palette: {
    primary: {
      main: designTokens.colors.primary[500],
      light: designTokens.colors.primary[300],
      dark: designTokens.colors.primary[700],
      contrastText: '#ffffff',
      // Extended palette for all shades
      50: designTokens.colors.primary[50],
      100: designTokens.colors.primary[100],
      200: designTokens.colors.primary[200],
      300: designTokens.colors.primary[300],
      400: designTokens.colors.primary[400],
      500: designTokens.colors.primary[500],
      600: designTokens.colors.primary[600],
      700: designTokens.colors.primary[700],
      800: designTokens.colors.primary[800],
      900: designTokens.colors.primary[900],
    },
    secondary: {
      main: designTokens.colors.secondary[500],
      light: designTokens.colors.secondary[300],
      dark: designTokens.colors.secondary[700],
      contrastText: '#ffffff',
      // Extended palette
      50: designTokens.colors.secondary[50],
      100: designTokens.colors.secondary[100],
      200: designTokens.colors.secondary[200],
      300: designTokens.colors.secondary[300],
      400: designTokens.colors.secondary[400],
      500: designTokens.colors.secondary[500],
      600: designTokens.colors.secondary[600],
      700: designTokens.colors.secondary[700],
      800: designTokens.colors.secondary[800],
      900: designTokens.colors.secondary[900],
    },
    info: {
      main: designTokens.colors.blue[500],
      light: designTokens.colors.blue[300],
      dark: designTokens.colors.blue[700],
      contrastText: '#ffffff',
      // Extended palette
      50: designTokens.colors.blue[50],
      100: designTokens.colors.blue[100],
      200: designTokens.colors.blue[200],
      300: designTokens.colors.blue[300],
      400: designTokens.colors.blue[400],
      500: designTokens.colors.blue[500],
      600: designTokens.colors.blue[600],
      700: designTokens.colors.blue[700],
      800: designTokens.colors.blue[700],
      900: designTokens.colors.blue[700],
    },
    error: {
      main: designTokens.colors.red[500],
      light: designTokens.colors.red[300],
      dark: designTokens.colors.red[700],
      contrastText: '#ffffff',
      // Extended palette
      50: designTokens.colors.red[50],
      100: designTokens.colors.red[100],
      200: designTokens.colors.red[200],
      300: designTokens.colors.red[300],
      400: designTokens.colors.red[400],
      500: designTokens.colors.red[500],
      600: designTokens.colors.red[600],
      700: designTokens.colors.red[700],
      800: designTokens.colors.red[800],
      900: designTokens.colors.red[900],
    },
    warning: {
      main: designTokens.colors.semantic.warning,
      light: designTokens.colors.secondary[300],
      dark: designTokens.colors.secondary[700],
    },
    success: {
      main: designTokens.colors.semantic.success,
      light: designTokens.colors.primary[300],
      dark: designTokens.colors.primary[700],
    },
    background: {
      default: designTokens.colors.semantic.background,
      paper: designTokens.colors.semantic.surface,
    },
    text: {
      primary: designTokens.colors.text.primary,
      secondary: designTokens.colors.text.secondary,
    },
    divider: designTokens.colors.semantic.border,
  },
  typography: {
    fontFamily: designTokens.typography.fontFamily.primary,
    // Use MUI defaults for most typography, only override what's needed
    h3: {
      fontSize: 'var(--font-size-md)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
    caption: {
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
  shape: {
    borderRadius: 12, // Use standard value from design tokens
  },
  // Only add custom properties that don't exist in MUI
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Override MUI default uppercase
          fontFamily: designTokens.typography.fontFamily.primary,
          borderRadius: 8,
        },
        sizeSmall: {
          fontSize: '10px',
          padding: '4px 12px',
          fontWeight: 600,
        },
      },
    },
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0, 0, 0, 0.05)',
    '0 1px 4px rgba(15,31,20,0.04)',
    '0 4px 6px rgba(15,31,20,0.07)',
    '0 4px 8px rgba(15,31,20,0.08)',
    '0 4px 10px rgba(15,31,20,0.09)',
    '0 4px 14px rgba(15,31,20,0.1)',
    '0 4px 18px rgba(15,31,20,0.11)',
    '0 6px 10px rgba(15,31,20,0.12)',
    '0 6px 14px rgba(15,31,20,0.13)',
    '0 6px 18px rgba(15,31,20,0.14)',
    '0 6px 22px rgba(15,31,20,0.15)',
    '0 8px 16px rgba(15,31,20,0.12)',
    '0 8px 20px rgba(15,31,20,0.13)',
    '0 8px 24px rgba(15,31,20,0.14)',
    '0 10px 20px rgba(15,31,20,0.13)',
    '0 10px 24px rgba(15,31,20,0.14)',
    '0 10px 28px rgba(15,31,20,0.15)',
    '0 12px 24px rgba(15,31,20,0.14)',
    '0 12px 28px rgba(15,31,20,0.15)',
    '0 12px 32px rgba(15,31,20,0.16)',
    '0 14px 28px rgba(15,31,20,0.15)',
    '0 14px 32px rgba(15,31,20,0.16)',
    '0 14px 36px rgba(15,31,20,0.17)',
    '0 16px 32px rgba(15,31,20,0.16)',
  ],
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
