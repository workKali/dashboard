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
          bg: 'rgba(59, 130, 246, 0.05)',
          border: 'rgba(59, 130, 246, 0.2)',
          color: '#3b82f6',
          hoverBg: 'rgba(59, 130, 246, 0.1)',
          badgeBg: '#3b82f6',
        };
      case 'risk-assessment':
        return {
          bg: 'rgba(239, 68, 68, 0.05)',
          border: 'rgba(239, 68, 68, 0.2)',
          color: '#ef4444',
          hoverBg: 'rgba(239, 68, 68, 0.1)',
          badgeBg: '#ef4444',
        };
      case 'payment-overdue':
        return {
          bg: 'rgba(239, 68, 68, 0.05)',
          border: 'rgba(239, 68, 68, 0.2)',
          color: '#ef4444',
          hoverBg: 'rgba(239, 68, 68, 0.1)',
          badgeBg: '#ef4444',
        };
      case 'carbon-emission':
        return {
          bg: 'rgb(248, 250, 252)',
          border: 'rgb(203, 213, 225)',
          color: 'rgb(100, 116, 139)',
          hoverBg: 'rgb(203, 213, 225)',
          badgeBg: 'rgb(100, 116, 139)',
        };
      case 'deforestation-alert':
        return {
          bg: 'rgb(255, 241, 241)',
          border: 'rgb(252, 165, 165)',
          color: 'rgb(248, 113, 113)',
          hoverBg: 'rgb(252, 165, 165)',
          badgeBg: '#ef4444',
        };
      default:
        return {
          bg: '#ffffff',
          border: 'rgb(225, 232, 231)',
          color: '#16a34a',
          hoverBg: 'rgba(15, 31, 20, 0.04)',
          badgeBg: '#16a34a',
        };
    }
  };

  const styles = customStyling ? {
    bg: customStyling.backgroundColor || '#ffffff',
    border: customStyling.borderColor || 'rgb(225, 232, 231)',
    color: customStyling.textColor || '#16a34a',
    hoverBg: customStyling.hoverBackground || 'rgba(15, 31, 20, 0.04)',
    badgeBg: customStyling.alertBadgeBackground || '#16a34a',
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
        fontSize: '10px',
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
            fontSize: '10px',
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
