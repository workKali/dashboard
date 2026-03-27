'use client'
import { Button, ButtonProps } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export type ButtonTemplate = 
  | 'export'           // Transparent with border, small (Exportar style)
  | 'toggle'           // Tab-style with bottom border
  | 'action'           // Colored background (green/red for actions)
  | 'pill'             // Rounded pill style for badges
  | 'filter'           // Filter button with hover states
  | 'modal'            // Full-width modal button
  | 'inline'           // Small inline button
  | 'primary'          // Primary colored button

interface GenericButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  template?: ButtonTemplate
  children: React.ReactNode
}

export default function GenericButtonRefactored({ 
  template = 'export', 
  children, 
  ...props 
}: GenericButtonProps) {
  const theme = useTheme()

  const getTemplateStyles = () => {
    switch (template) {
      case 'export':
        // Transparent with border - like Exportar button
        return {
          backgroundColor: 'transparent',
          borderColor: theme.palette.divider,
          color: theme.palette.text.primary,
          fontSize: '10px',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          textTransform: 'none',
          padding: '4px 12px',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderColor: theme.palette.text.secondary,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
        }

      case 'toggle':
        // Tab-style with bottom border
        return {
          backgroundColor: 'transparent',
          border: 'none',
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.text.primary,
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '9px 14px',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }

      case 'action':
        // Colored background for actions (enable/disable all)
        return {
          backgroundColor: theme.palette.success.main,
          borderColor: theme.palette.success.main,
          color: 'white',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '3px 10px',
          '&:hover': {
            backgroundColor: theme.palette.success.dark,
            borderColor: theme.palette.success.dark,
          },
        }

      case 'pill':
        // Rounded pill style for badges
        return {
          backgroundColor: theme.palette.error.light,
          borderColor: theme.palette.error.main,
          color: theme.palette.error.dark,
          fontSize: '10.5px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '2px 10px',
          borderRadius: 20,
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: 'white',
          },
        }

      case 'filter':
        // Filter button with hover states
        return {
          backgroundColor: theme.palette.grey[50],
          borderColor: theme.palette.divider,
          color: theme.palette.text.primary,
          fontSize: '10.5px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '5px 10px',
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderColor: theme.palette.primary.main,
          },
        }

      case 'modal':
        // Full-width modal button
        return {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          color: 'white',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '11px',
          width: '100%',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
        }

      case 'inline':
        // Small inline button
        return {
          backgroundColor: theme.palette.success.light,
          borderColor: theme.palette.success.main,
          color: theme.palette.success.dark,
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '2px 7px',
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        }

      case 'primary':
        // Primary colored button
        return {
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
          color: 'white',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          padding: '4px 12px',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
        }

      default:
        return {}
    }
  }

  const getVariant = (): ButtonProps['variant'] => {
    switch (template) {
      case 'action':
      case 'modal':
      case 'primary':
        return 'contained'
      case 'export':
      case 'filter':
      case 'inline':
      case 'pill':
        return 'outlined'
      case 'toggle':
        return 'text'
      default:
        return 'outlined'
    }
  }

  return (
    <Button
      variant={getVariant()}
      size="small"
      sx={getTemplateStyles()}
      {...props}
    >
      {children}
    </Button>
  )
}
