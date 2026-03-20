'use client';

import { Box, Typography, useTheme } from '@mui/material';

interface TitledSectionProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  children: React.ReactNode;
  showBottomBorder?: boolean;
}

export default function TitledSection({ 
  sectionTitle, 
  sectionSubtitle, 
  children, 
  showBottomBorder = true 
}: TitledSectionProps) {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      {(sectionTitle || sectionSubtitle) && (
        <Box
          sx={{
            marginBottom: '12px',
            paddingBottom: showBottomBorder ? '10px' : 0,
            borderBottom: showBottomBorder ? `1px solid ${theme.palette.divider}` : 'none',
          }}
        >
          {sectionTitle && (
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 'var(--font-size-md)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              {sectionTitle}
            </Typography>
          )}
          
          {sectionSubtitle && (
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 'var(--font-size-base)',
                fontWeight: 300,
                margin: '2px 0 0',
              }}
            >
              {sectionSubtitle}
            </Typography>
          )}
        </Box>
      )}
      
      {children}
    </Box>
  );
}
