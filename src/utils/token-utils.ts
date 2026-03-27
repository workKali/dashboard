import { baseColors, semanticColors, textColors, domainColors } from '../theme/tokens'

export const getColorValue = (colorPath: string): string => {
  const paths = colorPath.split('.')
  let value: any = { baseColors, semanticColors, textColors, domainColors }
  
  for (const path of paths) {
    value = value[path]
    if (value === undefined) {
      console.warn(`Color path "${colorPath}" not found`)
      return '#000000'
    }
  }
  
  return value
}

export const getDomainColor = (domain: string, type: string, shade: string = 'main'): string => {
  const domainPath = `domainColors.${domain}.${type}.${shade}`
  return getColorValue(domainPath)
}

export const getStatusColor = (status: 'high' | 'medium' | 'low' | 'active' | 'inactive' | 'pending' | 'error'): string => {
  const statusColors = {
    high: semanticColors.error,
    medium: semanticColors.warning,
    low: semanticColors.success,
    active: semanticColors.success,
    inactive: textColors.tertiary,
    pending: semanticColors.warning,
    error: semanticColors.error,
  }
  
  return statusColors[status] || textColors.secondary
}

export const getRiskColor = (risk: 'Alto' | 'Medio' | 'Bajo'): string => {
  const riskColors = {
    Alto: semanticColors.error,
    Medio: semanticColors.warning,
    Bajo: semanticColors.success,
  }
  
  return riskColors[risk] || textColors.secondary
}

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

export const rgba = (hex: string, alpha: number): string => {
  const rgb = hexToRgb(hex)
  if (!rgb) return hex
  
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}
