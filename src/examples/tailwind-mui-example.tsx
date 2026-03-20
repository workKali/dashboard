'use client';

import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Stack,
  Chip
} from '@mui/material';
import { theme } from '../utils/tailwind-theme';

export default function TailwindMuiExample() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="min-h-screen bg-background text-primary">
      {/* Header - Mixing Tailwind utilities with MUI components */}
      <header className="bg-primary text-white p-lg shadow-md">
        <div className={theme.patterns.container}>
          <div className={theme.patterns.flexBetween}>
            <Typography variant="h4" className="font-bold">
              Tailwind + MUI Integration
            </Typography>
            <div className="flex gap-sm">
              <Button 
                variant="outlined" 
                className="border-white text-white hover:bg-white hover:text-primary transition-colors"
              >
                Features
              </Button>
              <Button 
                className="bg-white text-primary hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={theme.patterns.container + ' py-xl'}>
        {/* Hero Section */}
        <section className="text-center mb-xl">
          <Typography 
            variant="h1" 
            className="text-4xl md:text-5xl font-bold mb-md bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Design System Synchronized
          </Typography>
          <Typography 
            variant="h3" 
            className="text-lg md:text-xl text-secondary mb-lg max-w-2xl mx-auto"
          >
            Tailwind CSS and Material-UI working together with shared design tokens
          </Typography>
          <div className="flex gap-md justify-center flex-wrap">
            <Button 
              size="large"
              className={theme.patterns.button.primary + ' px-lg py-md'}
              onClick={() => setCounter(counter + 1)}
            >
              Click Me ({counter})
            </Button>
            <Button 
              size="large"
              variant="outlined"
              className={theme.patterns.button.outlined + ' px-lg py-md'}
            >
              Learn More
            </Button>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="mb-xl">
          <Typography variant="h2" className="text-2xl font-bold text-center mb-lg">
            Key Features
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {/* Card 1 - Primary */}
            <Card className={theme.patterns.card + ' hover:shadow-lg transition-shadow'}>
              <CardContent className="p-lg">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-md">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <Typography variant="h3" className="text-lg font-semibold mb-sm">
                  Synchronized Colors
                </Typography>
                <Typography variant="body2" className="text-secondary">
                  Both Tailwind and MUI use the same color palette from your design tokens
                </Typography>
                <div className="mt-md flex gap-xs">
                  <Chip 
                    label="Primary" 
                    size="small"
                    className="bg-primary text-white"
                  />
                  <Chip 
                    label="Secondary" 
                    size="small"
                    className="bg-secondary text-white"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Card 2 - Secondary */}
            <Card className={theme.patterns.card + ' hover:shadow-lg transition-shadow'}>
              <CardContent className="p-lg">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-md">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <Typography variant="h3" className="text-lg font-semibold mb-sm">
                  Shared Typography
                </Typography>
                <Typography variant="body2" className="text-secondary">
                  Font sizes and families are consistent across both systems
                </Typography>
                <div className="mt-md space-y-xs">
                  <div className="text-xs">Extra Small Text (9.5px)</div>
                  <div className="text-sm">Small Text (10px)</div>
                  <div className="text-base">Base Text (10.5px)</div>
                  <div className="text-md">Medium Text (11px)</div>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 - Success */}
            <Card className={theme.patterns.card + ' hover:shadow-lg transition-shadow'}>
              <CardContent className="p-lg">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-md">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <Typography variant="h3" className="text-lg font-semibold mb-sm">
                  Utility Classes
                </Typography>
                <Typography variant="body2" className="text-secondary">
                  Use Tailwind utilities alongside MUI components for rapid development
                </Typography>
                <div className="mt-md flex gap-xs flex-wrap">
                  <span className="px-2 py-1 bg-info text-white text-xs rounded-pill">Info</span>
                  <span className="px-2 py-1 bg-warning text-white text-xs rounded-pill">Warning</span>
                  <span className="px-2 py-1 bg-error text-white text-xs rounded-pill">Error</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className={theme.patterns.card + ' p-xl'}>
          <Typography variant="h2" className="text-2xl font-bold mb-lg">
            Interactive Demo
          </Typography>
          
          <Stack spacing={3}>
            {/* Button Variants */}
            <div>
              <Typography variant="h4" className="text-md font-semibold mb-md">
                Button Variants
              </Typography>
              <div className="flex gap-md flex-wrap">
                <Button className={theme.patterns.button.primary}>
                  Primary
                </Button>
                <Button className={theme.patterns.button.secondary}>
                  Secondary
                </Button>
                <Button className={theme.patterns.button.error}>
                  Error
                </Button>
                <Button className={theme.patterns.button.outlined}>
                  Outlined
                </Button>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <Typography variant="h4" className="text-md font-semibold mb-md">
                Color Palette
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
                {Object.entries(theme.colors).map(([name, colors]) => {
                  if (typeof colors === 'object' && 'main' in colors) {
                    return (
                      <div key={name} className="text-center">
                        <div 
                          className="w-full h-12 rounded-button mb-xs"
                          style={{ backgroundColor: colors.main }}
                        />
                        <div className="text-xs text-secondary capitalize">{name}</div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Typography Scale */}
            <div>
              <Typography variant="h4" className="text-md font-semibold mb-md">
                Typography Scale
              </Typography>
              <div className="space-y-sm">
                <Typography className={theme.patterns.text.h1}>
                  Heading 1 (22px)
                </Typography>
                <Typography className={theme.patterns.text.h2}>
                  Heading 2 (13px)
                </Typography>
                <Typography className={theme.patterns.text.h3}>
                  Heading 3 (11px)
                </Typography>
                <Typography className={theme.patterns.text.body1}>
                  Body 1 (10.5px)
                </Typography>
                <Typography className={theme.patterns.text.body2}>
                  Body 2 (10px)
                </Typography>
                <Typography className={theme.patterns.text.caption}>
                  Caption (9.5px)
                </Typography>
              </div>
            </div>
          </Stack>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-divider py-lg mt-xl">
        <div className={theme.patterns.container}>
          <div className="text-center">
            <Typography variant="body2" className="text-secondary">
              © 2024 Tailwind + MUI Integration. All design tokens synchronized.
            </Typography>
            <Typography variant="caption" className="text-secondary mt-xs">
              Counter: {counter} clicks
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}
