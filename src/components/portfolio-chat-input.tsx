'use client';

import { useState } from 'react';
import { Box, InputBase, IconButton, useTheme } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

interface PortfolioChatInputProps {
  placeholder?: string;
  onPortfolioQuery?: (query: string) => void;
  isInputDisabled?: boolean;
  useFullWidth?: boolean;
  showTopBorder?: boolean;
}

export default function PortfolioChatInput({ 
  placeholder = "Pregunta sobre la cartera...",
  onPortfolioQuery,
  isInputDisabled = false,
  useFullWidth = true,
  showTopBorder = true
}: PortfolioChatInputProps) {
  const [query, setQuery] = useState('');
  const theme = useTheme();

  const handleQuerySubmit = () => {
    if (query.trim() && !isInputDisabled && onPortfolioQuery) {
      onPortfolioQuery(query.trim());
      setQuery('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleQuerySubmit();
    }
  };

  return (
    <Box
      sx={{
        padding: '8px 12px 12px',
        flexShrink: 0,
        borderTop: showTopBorder ? `1px solid ${theme.palette.divider}` : 'none',
        width: useFullWidth ? '100%' : 'auto',
      }}
    >
      <Box
        className="portfolio-input-glow"
        sx={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
          background: theme.palette.background.paper,
          borderRadius: '8px',
          border: `1px solid ${theme.palette.divider}`,
          padding: '4px 6px 4px 10px',
        }}
      >
        <InputBase
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isInputDisabled}
          sx={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: 'var(--font-size-md)',
            color: theme.palette.text.primary,
            background: 'transparent',
            '& .MuiInputBase-input': {
              padding: 0,
              '&::placeholder': {
                color: theme.palette.text.secondary,
                opacity: 0.7,
              },
            },
            '&.Mui-disabled': {
              opacity: 0.6,
            },
          }}
        />
        
        <IconButton
          onClick={handleQuerySubmit}
          disabled={isInputDisabled || !query.trim()}
          size="small"
          sx={{
            background: theme.palette.primary.main,
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 10px',
            cursor: isInputDisabled || !query.trim() ? 'not-allowed' : 'pointer',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 700,
            flexShrink: 0,
            minWidth: 'auto',
            '&:hover': {
              background: isInputDisabled || !query.trim() 
                ? theme.palette.primary.main 
                : theme.palette.primary.dark,
            },
            '&:disabled': {
              opacity: 0.6,
              cursor: 'not-allowed',
            },
          }}
        >
          <SendIcon sx={{ fontSize: 12 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
