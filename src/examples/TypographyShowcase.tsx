import React from 'react'
import { Typography, Box, Paper } from '@mui/material'
import { muiTheme } from '../theme/mui/theme'

export const TypographyShowcase: React.FC = () => {
  const typographyVariants = [
    { variant: 'h1', label: 'Heading 1', description: '36px - Display text, hero sections' },
    { variant: 'h2', label: 'Heading 2', description: '30px - Large headers, page titles' },
    { variant: 'h3', label: 'Heading 3', description: '24px - Section headers, uppercase' },
    { variant: 'h4', label: 'Heading 4', description: '22px - Subsection headers' },
    { variant: 'h5', label: 'Heading 5', description: '13px - Small headers' },
    { variant: 'h6', label: 'Heading 6', description: '11px - Micro headers' },
    { variant: 'subtitle1', label: 'Subtitle 1', description: '11px - Medium subtitles' },
    { variant: 'subtitle2', label: 'Subtitle 2', description: '10px - Small subtitles' },
    { variant: 'body1', label: 'Body 1', description: '10.5px - Default body text' },
    { variant: 'body2', label: 'Body 2', description: '10px - Secondary body text' },
    { variant: 'button', label: 'Button', description: '10px - Button text, no transform' },
    { variant: 'caption', label: 'Caption', description: '9.5px - UI captions, labels' },
    { variant: 'overline', label: 'Overline', description: '9.5px - Uppercase labels' },
  ] as const

  const fontWeights = [
    { weight: 'extralight', value: 200, label: 'Extra Light' },
    { weight: 'light', value: 300, label: 'Light' },
    { weight: 'normal', value: 400, label: 'Normal' },
    { weight: 'medium', value: 500, label: 'Medium' },
    { weight: 'semibold', value: 600, label: 'Semibold' },
    { weight: 'bold', value: 700, label: 'Bold' },
    { weight: 'extrabold', value: 800, label: 'Extra Bold' },
    { weight: 'black', value: 900, label: 'Black' },
  ] as const

  const lineHeights = [
    { height: 'none', value: 1, label: 'None (1.0)' },
    { height: 'tight', value: 1, label: 'Tight (1.0)' },
    { height: 'snug', value: 1.05, label: 'Snug (1.05)' },
    { height: 'normal', value: 1.1, label: 'Normal (1.1)' },
    { height: 'relaxed', value: 1.25, label: 'Relaxed (1.25)' },
    { height: 'loose', value: 1.5, label: 'Loose (1.5)' },
  ] as const

  const fontSizes = [
    { size: 'xs', value: '9.5px', label: 'Extra Small' },
    { size: 'sm', value: '10px', label: 'Small' },
    { size: 'base', value: '10.5px', label: 'Base' },
    { size: 'md', value: '11px', label: 'Medium' },
    { size: 'lg', value: '13px', label: 'Large' },
    { size: 'xl', value: '22px', label: 'Extra Large' },
    { size: '2xl', value: '24px', label: '2X Large' },
    { size: '3xl', value: '30px', label: '3X Large' },
    { size: '4xl', value: '36px', label: '4X Large' },
  ] as const

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        Typography System Showcase
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 6 }}>
        Comprehensive typography system with standardized font sizes, weights, and line heights 
        that scale seamlessly across MUI and Tailwind CSS.
      </Typography>

      {/* MUI Typography Variants */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>MUI Typography Variants</Typography>
        <Box sx={{ display: 'grid', gap: 3 }}>
          {typographyVariants.map(({ variant, label, description }) => (
            <Box key={variant}>
              <Typography variant={variant as any} sx={{ mb: 1 }}>
                {label} - Sample Text
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Font Weights */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Font Weights</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
          {fontWeights.map(({ weight, value, label }) => (
            <Box key={weight}>
              <Typography sx={{ fontWeight: value, mb: 1 }}>
                {label} ({value}) - The quick brown fox jumps
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Font Sizes */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Font Sizes</Typography>
        <Box sx={{ display: 'grid', gap: 2 }}>
          {fontSizes.map(({ size, value, label }) => (
            <Box key={size}>
              <Typography sx={{ fontSize: value, mb: 1 }}>
                {label} ({value}) - Sample text
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Line Heights */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Line Heights</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
          {lineHeights.map(({ height, value, label }) => (
            <Box key={height}>
              <Typography sx={{ lineHeight: value, mb: 1 }}>
                {label} - This is sample text to demonstrate line height. 
                Multiple lines show how the spacing affects readability and visual hierarchy.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>

      {/* Tailwind CSS Examples */}
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Tailwind CSS Equivalents</Typography>
        <Box sx={{ display: 'grid', gap: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Font Sizes:</Typography>
            <code className="block bg-gray-100 p-2 rounded text-sm mb-2">
              text-xs → text-sm → text-base → text-md → text-lg → text-xl → text-2xl → text-3xl → text-4xl
            </code>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Font Weights:</Typography>
            <code className="block bg-gray-100 p-2 rounded text-sm mb-2">
              font-extralight → font-light → font-normal → font-medium → font-semibold → font-bold → font-extrabold → font-black
            </code>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Line Heights:</Typography>
            <code className="block bg-gray-100 p-2 rounded text-sm mb-2">
              leading-none → leading-tight → leading-snug → leading-normal → leading-relaxed → leading-loose
            </code>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Letter Spacing:</Typography>
            <code className="block bg-gray-100 p-2 rounded text-sm mb-2">
              tracking-tighter → tracking-tight → tracking-normal → tracking-wide → tracking-wider → tracking-widest
            </code>
          </Box>
        </Box>
      </Paper>

      {/* Usage Examples */}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h3" sx={{ mb: 3 }}>Usage Examples</Typography>
        <Box sx={{ display: 'grid', gap: 3 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>MUI Component Usage:</Typography>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`<Typography variant="h1">Display Heading</Typography>
<Typography variant="body1" sx={{ fontWeight: 'medium' }}>
  Medium weight body text
</Typography>
<Typography variant="button" sx={{ letterSpacing: 'tight' }}>
  Button Text
</Typography>`}
            </pre>
          </Box>
          
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>Tailwind CSS Usage:</Typography>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`<h1 className="text-4xl font-bold leading-xl tracking-tight">
  Display Heading
</h1>
<p className="text-base font-medium leading-base">
  Medium weight body text
</p>
<button className="text-sm font-semibold leading-tight tracking-tight">
  Button Text
</button>`}
            </pre>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
