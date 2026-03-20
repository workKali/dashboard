# Design System Implementation

## Overview

Se ha implementado un sistema de diseño completo basado en el análisis del archivo `full_dashboard.txt`. El sistema incluye:

## 📁 Archivos Creados

### 1. `design-tokens.json`
- **Tokens de color**: Paleta agroclimática completa con colores primarios, secundarios, semánticos y de dominio
- **Tipografía**: Familia Poppins con pesos y tamaños definidos
- **Espaciado**: Escala modular consistente (2px - 20px)
- **Bordes**: Radios desde 2px hasta 14px
- **Sombras**: Niveles sm y md
- **Componentes**: Tokens predefinidos para cards, buttons, tooltips y toggles

### 2. `tailwind.config.ts`
- Extensión del theme de Tailwind con todos los design tokens
- Configuración de colores, tipografía, espaciado y bordes
- Ready para usar con las clases de utilidad de Tailwind

### 3. `src/components/theme-provider.tsx`
- Theme provider de MUI completamente configurado
- Paleta de colores personalizada
- Tipografía con Poppins
- Componentes MUI estilizados (Card, Button, Tooltip)

### 4. `src/components/design-showcase.tsx`
- Componente de demostración del sistema de diseño
- Muestra todos los colores, tipografía y componentes
- Ejemplos prácticos de uso

## 🎨 Colores Disponibles

### Primarios (Agroclimático)
- `primary.50` a `primary.900`: Escala de verdes
- `secondary.50` a `secondary.900`: Escala de ámbar
- `blue.50` a `blue.700`: Escala de azules

### Semánticos
- `success`: Verde (#16a34a)
- `warning`: Ámbar (#d97706)
- `error`: Rojo (#ef4444)
- `info`: Azul sky (#0ea5e9)

### Dominio Específico
- `domain.hydric`: Colores para indicadores hídricos
- `domain.carbon`: Colores para métricas de carbono
- `domain.forest`: Colores para indicadores forestales

## 📝 Tipografía

### Familia
- `font-primary`: Poppins, sans-serif

### Tamaños
- `xs`: 9.5px (caption)
- `sm`: 10px (body2, labels)
- `base`: 10.5px (body1)
- `md`: 11px (h3, headers)
- `lg`: 13px (h2)
- `xl`: 22px (h1)

### Pesos
- `light`: 300
- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700

## 🎯 Uso con MUI

```tsx
import { Button, Card, Typography } from '@mui/material';

// Los colores automáticamente usan los tokens
<Button variant="contained" color="primary">Primary Button</Button>
<Button variant="outlined" color="secondary">Secondary Button</Button>

// Cards con estilos consistentes
<Card>
  <CardContent>
    <Typography variant="h3">Card Title</Typography>
    <Typography variant="body1">Card content</Typography>
  </CardContent>
</Card>
```

## 🎯 Uso con Tailwind

```tsx
// Clases disponibles basadas en tokens
<div className="bg-primary-500 text-white">Primary background</div>
<div className="text-secondary-600">Secondary text</div>
<div className="border-border rounded-3xl shadow-sm">Card style</div>
<div className="p-4 gap-2">Spacing utilities</div>
```

## 🚀 Próximos Pasos

1. **Explorar el showcase**: Visita `http://localhost:3000` para ver todos los componentes
2. **Usar en componentes**: Aplica los tokens en tus componentes personalizados
3. **Extender si es necesario**: Agrega nuevos tokens siguiendo la estructura existente
4. **Mantener consistencia**: Usa siempre los tokens definidos en lugar de valores hardcodeados

## 🔧 Configuración Técnica

- **Next.js 16.2.0** con App Router
- **MUI v5** con theme personalizado
- **Tailwind CSS v4** con configuración extendida
- **TypeScript** para type safety
- **Design tokens centralizados** en JSON

El sistema está listo para producción y es completamente escalable.
