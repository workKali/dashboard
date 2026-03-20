import type { Config } from "tailwindcss";
import designTokens from "./design-tokens.json";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        blue: designTokens.colors.blue,
        red: designTokens.colors.red,
        neutral: designTokens.colors.neutral,
        semantic: {
          success: designTokens.colors.semantic.success,
          warning: designTokens.colors.semantic.warning,
          error: designTokens.colors.semantic.error,
          info: designTokens.colors.semantic.info,
          surface: designTokens.colors.semantic.surface,
          "surface-alt": designTokens.colors.semantic.surfaceAlt,
          background: designTokens.colors.semantic.background,
          border: designTokens.colors.semantic.border,
          "border-strong": designTokens.colors.semantic.borderStrong,
        },
        text: designTokens.colors.text,
        domain: designTokens.colors.domain,
      },
      fontFamily: {
        primary: designTokens.typography.fontFamily.primary,
      },
      fontSize: {
        'xs': designTokens.typography.fontSize.xs,
        'sm': designTokens.typography.fontSize.sm,
        'base': designTokens.typography.fontSize.base,
        'md': designTokens.typography.fontSize.md,
        'lg': designTokens.typography.fontSize.lg,
        'xl': designTokens.typography.fontSize.xl,
      },
      fontWeight: {
        'light': designTokens.typography.fontWeight.light,
        'medium': designTokens.typography.fontWeight.medium,
        'semibold': designTokens.typography.fontWeight.semibold,
      },
      lineHeight: {
        'tight': designTokens.typography.lineHeight.tight,
        'normal': designTokens.typography.lineHeight.normal,
      },
      letterSpacing: {
        'tight': designTokens.typography.letterSpacing.tight,
        'wide': designTokens.typography.letterSpacing.wide,
      },
      spacing: {
        '0': designTokens.spacing['0'],
        '1': designTokens.spacing['1'],
        '2': designTokens.spacing['2'],
        '3': designTokens.spacing['3'],
        '4': designTokens.spacing['4'],
        '5': designTokens.spacing['5'],
        '6': designTokens.spacing['6'],
        '8': designTokens.spacing['8'],
        '10': designTokens.spacing['10'],
        '12': designTokens.spacing['12'],
        '14': designTokens.spacing['14'],
        '16': designTokens.spacing['16'],
        '20': designTokens.spacing['20'],
      },
      borderRadius: {
        'sm': designTokens.borderRadius.sm,
        'md': designTokens.borderRadius.md,
        'lg': designTokens.borderRadius.lg,
        'xl': designTokens.borderRadius.xl,
        '2xl': designTokens.borderRadius['2xl'],
        '3xl': designTokens.borderRadius['3xl'],
        '4xl': designTokens.borderRadius['4xl'],
      },
      boxShadow: {
        'sm': designTokens.shadows.sm,
        'md': designTokens.shadows.md,
      },
    },
  },
  plugins: [],
};

export default config;
