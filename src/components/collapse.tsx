'use client';

import { useState } from 'react';
import { Box, Typography, useTheme, Collapse as MuiCollapse } from '@mui/material';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export default function Collapse({ 
  title, 
  children, 
  defaultOpen = false,
  onToggle 
}: CollapseProps) {
  const theme = useTheme();
  const [open, setOpen] = useState(defaultOpen);

  const handleToggle = () => {
    const newOpen = !open;
    setOpen(newOpen);
    onToggle?.(newOpen);
  };

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(15,31,20,0.04)',
      }}
    >
      {/* Header */}
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          cursor: 'pointer',
          userSelect: 'none',
          borderBottom: open ? `1px solid ${theme.palette.divider}` : 'none',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 'var(--font-size-md)',
            fontWeight: 700,
            color: theme.palette.text.primary,
                        textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </Typography>
        
        <Typography
          sx={{
            fontSize: '18px',
            color: theme.palette.text.secondary,
                        lineHeight: 1,
            fontWeight: 300,
          }}
        >
          {open ? '−' : '+'}
        </Typography>
      </Box>

      {/* Content with smooth animation */}
      <MuiCollapse in={open} timeout={300} easing="ease-in-out">
        <Box
          sx={{
            padding: '0 16px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {children}
        </Box>
      </MuiCollapse>
    </Box>
  );
}
