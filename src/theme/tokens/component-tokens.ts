import { baseColors, semanticColors, textColors, typography, spacing, borderRadius, shadows } from './base-tokens'

export const buttonTokens = {
  // Based on full_dashboard.txt analysis
  appExport: {
    backgroundColor: 'transparent',
    border: `1px solid ${semanticColors.border}`,
    borderRadius: borderRadius.lg,
    padding: `${spacing['1']} ${spacing['3']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: textColors.primary,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: semanticColors.background,
      borderColor: textColors.secondary,
    },
    '&:active': {
      backgroundColor: semanticColors.surfaceAlt,
    },
    '&:disabled': {
      backgroundColor: 'transparent',
      borderColor: textColors.quaternary,
      color: textColors.quaternary,
    },
  },
  
  appToggle: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: `2px solid ${baseColors.primary[500]}`,
    borderRadius: borderRadius.none,
    padding: `${spacing['2']} ${spacing['4']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: textColors.primary,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: semanticColors.background,
    },
  },

  appAction: {
    backgroundColor: semanticColors.success,
    border: 'none',
    borderRadius: borderRadius.md,
    padding: `${spacing['1']} ${spacing['3']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: '#ffffff',
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: baseColors.primary[700],
    },
    '&:disabled': {
      backgroundColor: textColors.quaternary,
      color: textColors.secondary,
    },
  },

  appPill: {
    backgroundColor: baseColors.red[50],
    border: `1px solid ${baseColors.red[200]}`,
    borderRadius: '20px',
    padding: `${spacing['0']} ${spacing['3']}`,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: baseColors.red[700],
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: baseColors.red[500],
      color: '#ffffff',
    },
  },

  appFilter: {
    backgroundColor: baseColors.primary[50],
    border: `1px solid ${semanticColors.border}`,
    borderRadius: borderRadius.lg,
    padding: `${spacing['1']} ${spacing['3']}`,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: textColors.primary,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: baseColors.primary[100],
      borderColor: baseColors.primary[500],
    },
  },

  appModal: {
    backgroundColor: baseColors.primary[500],
    border: 'none',
    borderRadius: borderRadius.xl,
    padding: spacing['3'],
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: '#ffffff',
    textTransform: 'none' as const,
    width: '100%',
    '&:hover': {
      backgroundColor: baseColors.primary[700],
    },
  },

  appInline: {
    backgroundColor: baseColors.primary[50],
    border: `1px solid ${baseColors.primary[200]}`,
    borderRadius: borderRadius.md,
    padding: `${spacing['0']} ${spacing['2']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: baseColors.primary[700],
    textTransform: 'none' as const,
    minWidth: 'auto',
    '&:hover': {
      backgroundColor: baseColors.primary[500],
      color: '#ffffff',
    },
  },

  appPrimary: {
    backgroundColor: baseColors.primary[500],
    border: `1px solid ${baseColors.primary[500]}`,
    borderRadius: borderRadius.lg,
    padding: `${spacing['1']} ${spacing['3']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: '#ffffff',
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: baseColors.primary[700],
      borderColor: baseColors.primary[700],
    },
  },

  appNavigation: {
    backgroundColor: 'transparent',
    border: `1px solid ${semanticColors.border}`,
    borderRadius: borderRadius.md,
    padding: `${spacing['2']} ${spacing['4']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: textColors.primary,
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: semanticColors.background,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },

  appDrilldown: {
    backgroundColor: baseColors.primary[50],
    border: `1px solid ${baseColors.primary[200]}`,
    borderRadius: borderRadius.md,
    padding: `${spacing['0']} ${spacing['2']}`,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: baseColors.primary[700],
    textTransform: 'none' as const,
    '&:hover': {
      backgroundColor: baseColors.primary[100],
    },
  },

  appClose: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: borderRadius.none,
    padding: spacing['1'],
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    color: textColors.tertiary,
    textTransform: 'none' as const,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: semanticColors.background,
      color: textColors.primary,
    },
  },
}

export const cardTokens = {
  default: {
    backgroundColor: semanticColors.surface,
    border: `1px solid ${semanticColors.border}`,
    borderRadius: borderRadius['3xl'],
    padding: `${spacing['4']} ${spacing['4']}`,
    boxShadow: shadows.sm,
  }
}

export const tooltipTokens = {
  default: {
    backgroundColor: semanticColors.surface,
    border: `1px solid ${semanticColors.border}`,
    borderRadius: borderRadius.xl,
    color: textColors.primary,
    fontSize: typography.fontSize.md,
    padding: `${spacing['2']} ${spacing['3']}`,
    boxShadow: shadows.md,
  }
}
