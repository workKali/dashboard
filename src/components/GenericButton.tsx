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

export default function GenericButton({ 
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
          border: '1px solid rgb(225, 232, 231)',
          borderRadius: '8px',
          padding: '4px 12px',
          color: 'rgb(15, 31, 20)',
          fontSize: '10px',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          textTransform: 'none',
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
          borderBottom: '2px solid accent',
          padding: '9px 14px',
          cursor: 'pointer',
          color: theme.palette.text.primary,
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }

      case 'action':
        // Colored background for actions (enable/disable all)
        return {
          background: '#16a34a',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          padding: '3px 10px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: theme.palette.success.dark,
            borderColor: theme.palette.success.dark,
          },
        }

      case 'pill':
        // Rounded pill style for badges
        return {
          background: '#fee2e2',
          color: '#991b1b',
          borderRadius: '20px',
          padding: '2px 10px',
          fontSize: '10.5px',
          fontWeight: 600,
          textTransform: 'none',
          border: 'none',
          '&:hover': {
            backgroundColor: theme.palette.error.main,
            color: 'white',
          },
        }

      case 'filter':
        // Filter button with hover states
        return {
          background: '#f0fdf4',
          border: '1px solid #e1e8e7',
          borderRadius: '8px',
          padding: '5px 10px',
          fontSize: '10.5px',
          fontWeight: 600,
          textTransform: 'none',
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderColor: theme.palette.primary.main,
          },
        }

      case 'modal':
        // Full-width modal button
        return {
          background: '#16a34a',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          padding: '11px',
          width: '100%',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
          },
        }

      case 'inline':
        // Small inline button
        return {
          background: '#dcfce7',
          color: '#166534',
          border: '1px solid #bbf7d0',
          borderRadius: '6px',
          padding: '2px 7px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
          },
        }

      case 'primary':
        // Primary colored button
        return {
          background: '#16a34a',
          color: 'white',
          border: '1px solid #16a34a',
          borderRadius: '8px',
          padding: '4px 12px',
          fontSize: '10px',
          fontWeight: 600,
          textTransform: 'none',
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
