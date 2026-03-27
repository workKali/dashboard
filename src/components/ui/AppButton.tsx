'use client'
import { Button, ButtonProps } from '@mui/material'

export type AppButtonVariant = 
  | 'appExport'      // Transparent with border, small (Exportar style)
  | 'appToggle'      // Tab-style with bottom border
  | 'appAction'      // Colored background (green/red for actions)
  | 'appPill'        // Rounded pill style for badges
  | 'appFilter'      // Filter button with hover states
  | 'appModal'       // Full-width modal button
  | 'appInline'      // Small inline button
  | 'appPrimary'     // Primary colored button
  | 'appNavigation'  // Pagination navigation buttons
  | 'appDrilldown'   // Drill-down links (Ver ficha)
  | 'appClose'       // Close icon buttons

interface AppButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: AppButtonVariant
  children: React.ReactNode
}

export default function AppButton({ 
  variant = 'appExport', 
  children, 
  ...props 
}: AppButtonProps) {
  return (
    <Button
      variant={variant as any}
      size="small"
      {...props}
    >
      {children}
    </Button>
  )
}
