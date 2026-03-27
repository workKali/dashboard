'use client'
import { Card, CardProps } from '@mui/material'

interface AppCardProps extends CardProps {
  children: React.ReactNode
}

export default function AppCard({ 
  children, 
  ...props 
}: AppCardProps) {
  return (
    <Card
      variant="outlined"
      {...props}
    >
      {children}
    </Card>
  )
}
