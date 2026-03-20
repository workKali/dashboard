'use client';

import { Box, Typography, useTheme } from '@mui/material';

type StatVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'error';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  variant?: StatVariant;
  color?: string;
  formatValue?: boolean;
}

export default function StatCard({ 
  label, 
  value, 
  unit, 
  variant = 'primary',
  color,
  formatValue = true
}: StatCardProps) {
  const theme = useTheme();
  
  const getVariantColor = () => {
    if (color) return color;
    
    switch (variant) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'success':
        return (theme.palette.primary as any)[500]; // Green
      case 'warning':
        return theme.palette.secondary.main;
      case 'info':
        return theme.palette.info.main;
      case 'error':
        return theme.palette.error.main;
      default:
        return theme.palette.primary.main;
    }
  };

  const displayValue = formatValue && typeof value === 'number' 
    ? value.toLocaleString() 
    : value;

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        padding: '12px 14px',
        boxShadow: '0 1px 4px rgba(15,31,20,0.04)',
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontSize: 'var(--font-size-sm)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: theme.palette.text.secondary,
          fontWeight: 500,
                    marginBottom: '4px',
        }}
      >
        {label}
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: '5px' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            color: getVariantColor(),
                        lineHeight: 1,
          }}
        >
          {displayValue}
        </Typography>
        
        {unit && (
          <Typography
            variant="caption"
            sx={{
              fontSize: 'var(--font-size-md)',
              color: theme.palette.text.secondary,
              fontWeight: 300,
                          }}
          >
            {unit}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
