/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Import design tokens to sync with MUI theme
      colors: {
        // Primary colors from design tokens
        primary: {
          50: 'rgb(240, 253, 244)',
          100: 'rgb(220, 252, 231)',
          200: 'rgb(187, 247, 208)',
          300: 'rgb(134, 239, 172)',
          400: 'rgb(74, 222, 128)',
          500: 'rgb(34, 197, 94)',
          600: 'rgb(22, 163, 74)',
          700: 'rgb(21, 128, 61)',
          800: 'rgb(22, 101, 52)',
          900: 'rgb(20, 83, 45)',
          950: 'rgb(5, 25, 15)',
          main: 'rgb(22, 163, 74)',
          light: 'rgb(187, 247, 208)',
          dark: 'rgb(22, 101, 52)',
        },
        // Secondary colors
        secondary: {
          50: 'rgb(250, 240, 230)',
          100: 'rgb(254, 223, 213)',
          200: 'rgb(253, 211, 195)',
          300: 'rgb(251, 191, 165)',
          400: 'rgb(245, 158, 104)',
          500: 'rgb(234, 126, 61)',
          600: 'rgb(217, 119, 6)',
          700: 'rgb(180, 83, 9)',
          800: 'rgb(146, 64, 14)',
          900: 'rgb(120, 53, 15)',
          950: 'rgb(67, 30, 7)',
          main: 'rgb(217, 119, 6)',
          light: 'rgb(253, 211, 195)',
          dark: 'rgb(146, 64, 14)',
        },
        // Error colors
        error: {
          50: 'rgb(254, 242, 242)',
          100: 'rgb(254, 226, 226)',
          200: 'rgb(252, 165, 165)',
          300: 'rgb(248, 113, 113)',
          400: 'rgb(239, 68, 68)',
          500: 'rgb(220, 38, 38)',
          600: 'rgb(185, 28, 28)',
          700: 'rgb(153, 27, 27)',
          800: 'rgb(127, 29, 29)',
          900: 'rgb(113, 23, 23)',
          950: 'rgb(74, 12, 12)',
          main: 'rgb(220, 38, 38)',
          light: 'rgb(252, 165, 165)',
          dark: 'rgb(127, 29, 29)',
        },
        // Warning colors
        warning: {
          50: 'rgb(255, 251, 235)',
          100: 'rgb(254, 243, 199)',
          200: 'rgb(253, 230, 138)',
          300: 'rgb(252, 211, 77)',
          400: 'rgb(251, 191, 36)',
          500: 'rgb(245, 158, 11)',
          600: 'rgb(217, 119, 6)',
          700: 'rgb(180, 83, 9)',
          800: 'rgb(146, 64, 14)',
          900: 'rgb(120, 53, 15)',
          950: 'rgb(69, 26, 3)',
          main: 'rgb(245, 158, 11)',
          light: 'rgb(253, 230, 138)',
          dark: 'rgb(146, 64, 14)',
        },
        // Info colors
        info: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
          950: 'rgb(23, 37, 84)',
          main: 'rgb(59, 130, 246)',
          light: 'rgb(191, 219, 254)',
          dark: 'rgb(30, 64, 175)',
        },
        // Success colors (using primary green)
        success: {
          50: 'rgb(240, 253, 244)',
          100: 'rgb(220, 252, 231)',
          200: 'rgb(187, 247, 208)',
          300: 'rgb(134, 239, 172)',
          400: 'rgb(74, 222, 128)',
          500: 'rgb(34, 197, 94)',
          600: 'rgb(22, 163, 74)',
          700: 'rgb(21, 128, 61)',
          800: 'rgb(22, 101, 52)',
          900: 'rgb(20, 83, 45)',
          950: 'rgb(5, 25, 15)',
          main: 'rgb(22, 163, 74)',
          light: 'rgb(187, 247, 208)',
          dark: 'rgb(22, 101, 52)',
        },
        // Text colors
        text: {
          primary: 'rgb(17, 24, 39)',
          secondary: 'rgb(75, 85, 99)',
          disabled: 'rgb(156, 163, 175)',
        },
        // Background colors
        background: {
          default: 'rgb(255, 255, 255)',
          paper: 'rgb(255, 255, 255)',
        },
        // Divider colors
        divider: 'rgb(229, 231, 235)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif'], // Override default sans-serif
      },
      fontSize: {
        // Design token font sizes
        'xs': '9.5px',
        'sm': '10px',
        'base': '10.5px',
        'md': '11px',
        'lg': '13px',
        'xl': '22px',
      },
      spacing: {
        // Design token spacing
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '48px',
        '6xl': '64px',
      },
      borderRadius: {
        // Design token border radius
        'none': '0',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        'full': '9999px',
        'pill': '20px', // For badges
        'button': '8px',
        'card': '12px',
      },
      boxShadow: {
        // Design token shadows
        'none': 'none',
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 4px rgba(15,31,20,0.04)',
        'md': '0 4px 6px rgba(15,31,20,0.07)',
        'lg': '0 4px 8px rgba(15,31,20,0.08)',
        'xl': '0 4px 10px rgba(15,31,20,0.09)',
        '2xl': '0 4px 14px rgba(15,31,20,0.1)',
        '3xl': '0 4px 18px rgba(15,31,20,0.11)',
        'inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
      },
      // Custom component-specific styles
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.15s ease-in-out',
        'slide-up': 'slide-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
  // Ensure dark mode works properly
  darkMode: 'class',
}
