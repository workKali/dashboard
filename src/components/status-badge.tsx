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
      bg: (theme.palette.primary as any)[50],
      border: (theme.palette.primary as any)[200],
      color: (theme.palette.primary as any)[700],
      indicator: (theme.palette.primary as any)[500],
    },
    warning: {
      bg: (theme.palette.secondary as any)[100],
      border: (theme.palette.secondary as any)[200],
      color: (theme.palette.secondary as any)[700],
      indicator: (theme.palette.secondary as any)[500],
    },
    info: {
      bg: (theme.palette.info as any)[50],
      border: (theme.palette.info as any)[300],
      color: (theme.palette.info as any)[700],
      indicator: (theme.palette.info as any)[500],
    },
    error: {
      bg: (theme.palette.error as any)[100],
      border: (theme.palette.error as any)[200],
      color: (theme.palette.error as any)[600],
      indicator: (theme.palette.error as any)[500],
    },
    critical: {
      bg: (theme.palette.error as any)[100],
      color: (theme.palette.error as any)[600],
      border: (theme.palette.error as any)[200],
      indicator: (theme.palette.error as any)[500],
    },
    default: {
      bg: theme.palette.background.paper,
      border: theme.palette.divider,
      color: theme.palette.text.secondary,
      indicator: theme.palette.text.secondary,
    },
  };

  const colors = customColor || defaultColors[variant];
  const isCritical = variant === 'critical';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: (theme as any)?.custom?.spacing?.xs || '4px',
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        borderRadius: `${(theme as any)?.custom?.borderRadius?.pill || 20}px`,
        padding: '2px 9px',
        fontSize: (theme as any)?.custom?.typography?.badge?.fontSize || 'var(--font-size-sm)',
        color: colors.color,
        fontWeight: (theme as any)?.custom?.typography?.badge?.fontWeight || 600,
        whiteSpace: 'nowrap',
      }}
    >
      {showIndicator && !isCritical && (
        <span
          style={{
            width: `${(theme as any)?.custom?.sizes?.badge?.width || 5}px`,
            height: `${(theme as any)?.custom?.sizes?.badge?.height || 5}px`,
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
