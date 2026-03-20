'use client';

import { Button, Box, useTheme } from '@mui/material';
import { Warning as WarningIcon } from '@mui/icons-material';

// Domain-specific action variants for environmental/financial monitoring
type DomainActionType = 'default' | 'hydric-deficit' | 'risk-assessment' | 'payment-overdue' | 'carbon-emission' | 'deforestation-alert' | 'custom';

interface DomainActionButtonProps {
  actionType?: DomainActionType;
  label: string;
  alertCount?: number;
  showWarningIcon?: boolean;
  onActionClick?: () => void;
  customStyling?: {
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    hoverBackground?: string;
    alertBadgeBackground?: string;
  };
  useFullWidth?: boolean;
  isDisabled?: boolean;
}

export default function DomainActionButton({ 
  actionType = 'default', 
  label, 
  alertCount,
  showWarningIcon = false,
  onActionClick,
  customStyling,
  useFullWidth = true,
  isDisabled = false
}: DomainActionButtonProps) {
  const theme = useTheme();
  
  const getDomainActionStyles = () => {
    switch (actionType) {
      case 'hydric-deficit':
        return {
          bg: (theme.palette.info as any)[50],
          border: (theme.palette.info as any)[200],
          color: (theme.palette.info as any)[600],
          hoverBg: (theme.palette.info as any)[200],
          badgeBg: (theme.palette.info as any)[600],
        };
      case 'risk-assessment':
        return {
          bg: (theme.palette.error as any)[50],
          border: (theme.palette.error as any)[200],
          color: (theme.palette.error as any)[600],
          hoverBg: (theme.palette.error as any)[100],
          badgeBg: (theme.palette.error as any)[500],
        };
      case 'payment-overdue':
        return {
          bg: (theme.palette.error as any)[50],
          border: (theme.palette.error as any)[200],
          color: (theme.palette.error as any)[600],
          hoverBg: (theme.palette.error as any)[100],
          badgeBg: (theme.palette.error as any)[500],
        };
      case 'carbon-emission':
        return {
          bg: 'rgb(248, 250, 252)', // Carbon emission background
          border: 'rgb(203, 213, 225)', // Carbon emission border
          color: 'rgb(100, 116, 139)', // Carbon emission color
          hoverBg: 'rgb(203, 213, 225)', // Carbon emission border on hover
          badgeBg: 'rgb(100, 116, 139)', // Carbon emission badge
        };
      case 'deforestation-alert':
        return {
          bg: 'rgb(255, 241, 241)', // Deforestation alert background
          border: 'rgb(252, 165, 165)', // Deforestation alert border
          color: 'rgb(248, 113, 113)', // Deforestation alert color
          hoverBg: 'rgb(252, 165, 165)', // Deforestation alert border on hover
          badgeBg: (theme.palette.error as any)[500],
        };
      default:
        return {
          bg: theme.palette.background.paper,
          border: theme.palette.divider,
          color: theme.palette.primary.main,
          hoverBg: theme.palette.action.hover,
          badgeBg: theme.palette.primary.main,
        };
    }
  };

  const styles = customStyling ? {
    bg: customStyling.backgroundColor || theme.palette.background.paper,
    border: customStyling.borderColor || theme.palette.divider,
    color: customStyling.textColor || theme.palette.primary.main,
    hoverBg: customStyling.hoverBackground || theme.palette.action.hover,
    badgeBg: customStyling.alertBadgeBackground || theme.palette.primary.main,
  } : getDomainActionStyles();

  return (
    <Button
      variant="outlined"
      onClick={onActionClick}
      disabled={isDisabled}
      fullWidth={useFullWidth}
      sx={{
        marginTop: actionType === 'hydric-deficit' ? '10px' : 0,
        background: styles.bg,
        border: `1px solid ${styles.border}`,
        borderRadius: '8px',
        padding: '5px 0',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 600,
        color: styles.color,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        textTransform: 'none',
        '&:hover': {
          background: isDisabled ? styles.bg : styles.hoverBg,
          borderColor: styles.border,
        },
        '&:disabled': {
          opacity: 0.6,
        },
      }}
    >
      {showWarningIcon && (
        <WarningIcon sx={{ fontSize: 11 }} />
      )}
      
      {label}
      
      {alertCount !== undefined && alertCount > 0 && (
        <Box
          sx={{
            background: styles.badgeBg,
            color: '#fff',
            borderRadius: '10px',
            padding: '1px 6px',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 700,
            minWidth: '16px',
            textAlign: 'center',
          }}
        >
          {alertCount}
        </Box>
      )}
    </Button>
  );
}
