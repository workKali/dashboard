'use client';

import React from "react";
import { 
  Button, 
  IconButton, 
  Box, 
  styled, 
  useTheme,
  ButtonProps,
  Tooltip,
  Typography
} from "@mui/material";

export type ButtonVariant = 
  | 'primary'      // Solid green accent
  | 'secondary'    // Soft blue
  | 'success'      // Soft green
  | 'warning'      // Soft red
  | 'toggle'       // Header pill switch
  | 'tab'          // Underlined tab
  | 'close'        // simple icon x
  | 'ghost';       // transparent

interface AgroButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: ButtonVariant;
  active?: boolean;
  badge?: string | number;
  icon?: string; 
  title?: string;
}

// STYLED COMPONENTS for more complex behavior
const StyledTabButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  padding: "9px 14px",
  minWidth: 'auto',
  background: "transparent",
  borderBottom: active ? "2px solid #16a34a" : "2px solid transparent",
  color: active ? "#16a34a" : "rgb(15, 31, 20)",
  fontWeight: active ? 600 : 400,
  borderRadius: 0,
  fontSize: '10px',
  textTransform: 'none',
  fontFamily: 'inherit',
  whiteSpace: 'nowrap',
  transition: "all 0.15s",
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(22, 163, 74, 0.04)',
    borderBottom: active ? "2px solid #16a34a" : "2px solid rgb(225, 232, 231)",
  },
}));

const StyledToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => {
  return {
    background: active ? "#16a34a" : "transparent",
    color: active ? "white" : "rgb(15, 31, 20)",
    borderRadius: "6px",
    padding: "3px 10px",
    fontSize: '10px',
    minWidth: 'auto',
    textTransform: 'none',
    fontWeight: 600,
    fontFamily: 'inherit',
    transition: "all 0.15s",
    border: 'none',
    '&:hover': {
      background: active ? "#166534" : 'rgba(0,0,0,0.04)',
    },
  }
});

const AgroButton: React.FC<AgroButtonProps> = ({
  variant = 'primary',
  active = false,
  badge,
  icon,
  children,
  onClick,
  sx,
  title,
  fullWidth = false,
  ...props
}) => {
  const theme = useTheme();

  // WRAPPER FOR TOOLTIP IF TITLE IS PROVIDED
  const wrapTooltip = (component: React.ReactElement) => {
    if (title) {
      return (
        <Tooltip title={title} arrow placement="top">
          {component}
        </Tooltip>
      );
    }
    return component;
  };

  if (variant === 'close') {
    return wrapTooltip(
      <IconButton 
        onClick={onClick} 
        size="small"
        sx={{ 
          color: 'rgb(15, 31, 20)',
          fontSize: '18px',
          padding: '2px',
          lineHeight: 1,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          ...sx 
        }}
        {...props}
      >
        {children || '✕'}
      </IconButton>
    );
  }

  if (variant === 'tab') {
    return wrapTooltip(
      <StyledTabButton 
        active={active} 
        onClick={onClick} 
        disableRipple
        fullWidth={fullWidth}
        sx={sx}
        {...props}
      >
        {children}
      </StyledTabButton>
    );
  }

  if (variant === 'toggle') {
    return wrapTooltip(
      <StyledToggleButton 
        active={active} 
        onClick={onClick} 
        fullWidth={fullWidth}
        sx={sx}
        {...props}
      >
        {children}
      </StyledToggleButton>
    );
  }

  // Common styles for colored variants based on MUI theme
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bgcolor: '#16a34a',
          color: 'white',
          fontWeight: 700,
          border: 'none',
          '&:hover': { bgcolor: '#166534' },
        };
      case 'secondary':
        return {
          bgcolor: 'rgba(59, 130, 246, 0.05)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          color: '#3b82f6',
          fontSize: '9.5px',
          '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.1)' },
        };
      case 'success':
        return {
          bgcolor: 'rgba(22, 163, 74, 0.05)',
          border: '1px solid rgba(22, 163, 74, 0.2)',
          color: '#16a34a',
          fontSize: '9.5px',
          '&:hover': { bgcolor: 'rgba(22, 163, 74, 0.1)' },
        };
      case 'warning':
        return {
          bgcolor: 'rgba(239, 68, 68, 0.05)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          color: '#ef4444',
          borderRadius: '8px',
          '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.1)' },
        };
      case 'ghost':
        return {
          bgcolor: 'transparent',
          color: 'rgb(15, 31, 20)',
          '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' },
        };
      default:
        return {};
    }
  };

  return wrapTooltip(
    <Button
      onClick={onClick}
      startIcon={icon ? <Box component="span" sx={{ fontSize: variant === 'warning' ? '11px' : 'inherit' }}>{icon}</Box> : null}
      fullWidth={fullWidth}
      disableElevation
      sx={{
        textTransform: 'none',
        fontFamily: 'inherit',
        fontSize: '10px',
        fontWeight: 600,
        minWidth: 'auto',
        borderRadius: '6px',
        padding: '4px 12px',
        boxShadow: 'none',
        ...getVariantStyles(),
        ...sx,
      }}
      {...props}
    >
      <Typography variant="inherit" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {children}
      </Typography>
      {badge !== undefined && (
        <Box 
          component="span" 
          sx={{ 
            ml: 1,
            bgcolor: variant === 'warning' ? 'error.main' : (active ? 'rgba(255,255,255,0.3)' : 'divider'),
            color: (variant === 'warning' || active) ? "white" : "text.secondary",
            borderRadius: '10px',
            px: '6px',
            py: '1px',
            fontSize: '9.5px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {badge}
        </Box>
      )}
    </Button>
  );
};

export default AgroButton;
