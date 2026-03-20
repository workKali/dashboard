'use client';

import { Button, Box, useTheme } from '@mui/material';

interface FilterToggleButtonProps {
  areFiltersActive: boolean;
  onToggleFilters: () => void;
  hasActiveFilters?: boolean;
  children?: React.ReactNode;
}

export default function FilterToggleButton({
  areFiltersActive,
  onToggleFilters,
  hasActiveFilters = false,
  children = "Filtros"
}: FilterToggleButtonProps) {
  const theme = useTheme();
  
  return (
    <Button
      variant="outlined"
      onClick={onToggleFilters}
      endIcon={
        hasActiveFilters && (
          <span
            style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: 'rgb(217, 119, 6)',
              flexShrink: 0,
            }}
          />
        )
      }
      startIcon={
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M2 4h12M4 8h8M6 12h4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </Box>
      }
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        background: areFiltersActive ? 'rgb(240, 253, 244)' : 'transparent',
        border: areFiltersActive ? '1px solid rgb(22, 163, 74)' : '1px solid rgb(225, 232, 231)',
        borderRadius: '8px',
        padding: '4px 12px',
        cursor: 'pointer',
        color: areFiltersActive ? 'rgb(22, 163, 74)' : 'rgb(58, 82, 68)',
        fontSize: '10px',
        fontWeight: 600,
        transition: '0.15s',
        whiteSpace: 'nowrap',
        textTransform: 'none',
        '&:hover': {
          background: areFiltersActive ? 'rgba(22, 163, 74, 0.04)' : 'rgba(58, 82, 68, 0.04)',
          borderColor: areFiltersActive ? 'rgb(22, 163, 74)' : 'rgb(58, 82, 68)',
        },
      }}
    >
      {children}
    </Button>
  );
}
