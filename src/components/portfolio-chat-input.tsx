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
        borderTop: showTopBorder ? '1px solid rgb(225, 232, 231)' : 'none',
        width: useFullWidth ? '100%' : 'auto',
      }}
    >
      <Box
        className="portfolio-input-glow"
        sx={{
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
          background: '#ffffff',
          borderRadius: '8px',
          border: '1px solid rgb(225, 232, 231)',
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
            fontSize: '10.5px',
            color: 'rgb(15, 31, 20)',
            background: 'transparent',
            '& .MuiInputBase-input': {
              padding: 0,
              '&::placeholder': {
                color: 'rgb(122, 158, 142)',
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
            background: '#16a34a',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 10px',
            cursor: isInputDisabled || !query.trim() ? 'not-allowed' : 'pointer',
            fontSize: '10px',
            fontWeight: 700,
            flexShrink: 0,
            minWidth: 'auto',
            '&:hover': {
              background: isInputDisabled || !query.trim() 
                ? '#16a34a' 
                : '#166534',
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
