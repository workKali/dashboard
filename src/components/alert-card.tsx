'use client';

import { Box, Typography, useTheme } from '@mui/material';

type AlertVariant = 'default' | 'success' | 'warning' | 'error' | 'critical' | 'gradient' | 'custom';

interface AlertCardProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  gradientColors?: {
    start?: string;
    end?: string;
  };
  customColor?: {
    border?: string;
    topBorder?: string;
    leftBorder?: string;
    background?: string;
  };
  showTopBorder?: boolean;
  showLeftBorder?: boolean;
}

export default function AlertCard({ 
  variant = 'default', 
  title, 
  children,
  gradientColors,
  customColor,
  showTopBorder = true,
  showLeftBorder = false
}: AlertCardProps) {
  const theme = useTheme();
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          background: theme.palette.background.paper,
          border: `1px solid ${(theme.palette.primary as any)[200]}`,
          topBorder: (theme.palette.primary as any)[500],
          leftBorder: (theme.palette.primary as any)[500],
        };
      case 'warning':
        return {
          background: theme.palette.background.paper,
          border: `1px solid ${(theme.palette.secondary as any)[200]}`,
          topBorder: (theme.palette.secondary as any)[500],
          leftBorder: (theme.palette.secondary as any)[500],
        };
      case 'error':
        return {
          background: theme.palette.background.paper,
          border: `1px solid ${(theme.palette.error as any)[200]}`,
          topBorder: (theme.palette.error as any)[500],
          leftBorder: (theme.palette.error as any)[500],
        };
      case 'critical':
        return {
          background: theme.palette.background.paper,
          border: `1px solid ${(theme.palette.error as any)[200]}`,
          topBorder: (theme.palette.error as any)[400],
          leftBorder: (theme.palette.error as any)[400],
        };
      case 'gradient':
        return {
          background: `linear-gradient(155deg, ${(theme.palette.primary as any)[50]} 0%, ${(theme.palette.info as any)[50]} 100%)`,
          border: `1px solid ${theme.palette.divider}`,
          topBorder: `linear-gradient(90deg, ${(theme.palette.primary as any)[600]}, ${(theme.palette.info as any)[500]})`,
          leftBorder: (theme.palette.primary as any)[500],
        };
      default:
        return {
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          topBorder: (theme.palette.primary as any)[500],
          leftBorder: (theme.palette.primary as any)[500],
        };
    }
  };

  const styles = customColor || getVariantStyles();

  return (
    <Box
      sx={{
        background: styles.background,
        border: styles.border,
        borderRadius: '12px',
        padding: '14px 16px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        boxShadow: '0 1px 4px rgba(15,31,20,0.04)',
        minWidth: 0,
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {showTopBorder && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: styles.topBorder,
            borderRadius: '12px 12px 0 0',
          }}
        />
      )}
      
      {showLeftBorder && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '3px',
            background: styles.leftBorder,
            borderRadius: '12px 0 0 12px',
          }}
        />
      )}
      
      {title && (
        <Typography
          variant="h3"
          component="h4"
          sx={{
            margin: 0,
            fontSize: 'var(--font-size-base)',
            fontWeight: 600,
            color: theme.palette.text.secondary,
                        textTransform: variant === 'critical' ? 'uppercase' : 'none',
            letterSpacing: variant === 'critical' ? '0.06em' : 'normal',
          }}
        >
          {title}
        </Typography>
      )}
      
      {children}
    </Box>
  );
}
