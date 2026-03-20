'use client';

import { Box, useTheme } from '@mui/material';

type StatusVariant = 'default' | 'success' | 'warning' | 'info' | 'error' | 'critical';

interface StatusBadgeProps {
  variant?: StatusVariant;
  label: string;
  showIndicator?: boolean;
  customColor?: {
    bg?: string;
    border?: string;
    color?: string;
    indicator?: string;
  };
}

export default function StatusBadge({ 
  variant = 'default', 
  label, 
  showIndicator = true,
  customColor 
}: StatusBadgeProps) {
  const theme = useTheme();
  
  const defaultColors = {
    success: {
      bg: 'rgba(22, 163, 74, 0.1)',
      border: 'rgba(22, 163, 74, 0.2)',
      color: '#166534',
      indicator: '#16a34a',
    },
    warning: {
      bg: 'rgba(217, 119, 6, 0.1)',
      border: 'rgba(217, 119, 6, 0.2)',
      color: '#92400e',
      indicator: '#d97706',
    },
    info: {
      bg: 'rgba(14, 165, 233, 0.1)',
      border: 'rgba(14, 165, 233, 0.3)',
      color: '#1e40af',
      indicator: '#0ea5e9',
    },
    error: {
      bg: 'rgba(239, 68, 68, 0.1)',
      border: 'rgba(239, 68, 68, 0.2)',
      color: '#dc2626',
      indicator: '#ef4444',
    },
    critical: {
      bg: 'rgba(239, 68, 68, 0.1)',
      color: '#dc2626',
      border: 'rgba(239, 68, 68, 0.2)',
      indicator: '#ef4444',
    },
    default: {
      bg: '#ffffff',
      border: 'rgb(225, 232, 231)',
      color: 'rgb(122, 158, 142)',
      indicator: 'rgb(122, 158, 142)',
    },
  };

  const colors = customColor || defaultColors[variant];
  const isCritical = variant === 'critical';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: '20px',
        padding: '2px 9px',
        fontSize: '10px',
        color: colors.color,
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      {showIndicator && !isCritical && (
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: colors.indicator,
            flexShrink: 0,
          }}
        />
      )}
      {label}
    </Box>
  );
}
