# Configuración Escalable del Tema MUI

## 🎯 Objetivo
Crear un sistema de diseño escalable y mantenible que elimine código inline y centralice todas las configuraciones en el tema MUI.

## 📁 Archivos Modificados

### 1. `design-tokens.json`
- **Nuevas variantes de botón**: export, toggle, action, pill, filter, modal, inline, primary
- **Tamaños extendidos**: xs, sm, md, lg para diferentes escalas
- **Configuraciones específicas**: padding, fontSize, fontWeight, borderRadius por variante

### 2. `src/components/theme-provider.tsx`
- **Colores de dominio**: hydric, carbon, forest integrados en palette
- **Tipografías extendidas**: fontSize, fontWeight, lineHeight, letterSpacing desde tokens
- **Componentes MUI**: Configuraciones específicas para cada variante de botón

### 3. `src/components/GenericButtonRefactored.tsx`
- **Sin código inline**: Todas las configuraciones usan theme.palette
- **8 templates**: export, toggle, action, pill, filter, modal, inline, primary
- **Accesibilidad**: Estados hover, active, disabled consistentes

## 🎨 Configuraciones del Tema

### Variantes de Botón

```typescript
// Export - Transparente con borde
template="export"
backgroundColor: 'transparent'
borderColor: theme.palette.divider
color: theme.palette.text.primary

// Toggle - Tab con borde inferior
template="toggle"  
borderBottom: `2px solid ${theme.palette.primary.main}`

// Action - Fondo coloreado
template="action"
backgroundColor: theme.palette.success.main

// Pill - Redondeado para badges
template="pill"
borderRadius: 20
backgroundColor: theme.palette.error.light

// Filter - Con hover states
template="filter"
backgroundColor: theme.palette.grey[50]

// Modal - Ancho completo
template="modal"
width: '100%'

// Inline - Pequeño inline
template="inline"
minWidth: 'auto'

// Primary - Botón primario
template="primary"
backgroundColor: theme.palette.primary.main
```

### Colores de Dominio

```typescript
// Disponibles en theme.palette.domain
hydric: theme.palette.domain.hydric.main
carbon: theme.palette.domain.carbon.main  
forest: theme.palette.domain.forest.main
```

### Tipografías

```typescript
// Desde design-tokens.json
fontSize: {
  xs: '9.5px',
  sm: '10px', 
  base: '10.5px',
  md: '11px',
  lg: '13px',
  xl: '22px'
}

fontWeight: {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
}
```

### Bordes y Espaciado

```typescript
// Desde design-tokens.json
borderRadius: {
  none: '0px',
  sm: '2px', 
  md: '6px',
  lg: '8px',
  xl: '10px',
  '2xl': '11px',
  '3xl': '12px',
  '4xl': '14px'
}

spacing: {
  0: '0px',
  1: '2px',
  2: '3px', 
  3: '4px',
  4: '5px',
  5: '6px',
  6: '8px',
  8: '10px',
  10: '12px'
}
```

## 🚀 Uso en Componentes

### Importación
```typescript
import GenericButtonRefactored from '../components/GenericButtonRefactored'
```

### Uso Básico
```typescript
<GenericButtonRefactored template="export">Exportar</GenericButtonRefactored>
<GenericButtonRefactored template="action">Activar todos</GenericButtonRefactored>
<GenericButtonRefactored template="pill">Alerta</GenericButtonRefactored>
```

### Con Props Adicionales
```typescript
<GenericButtonRefactored 
  template="export"
  startIcon="📊"
  disabled={loading}
  onClick={handleExport}
>
  Exportar Datos
</GenericButtonRefactored>
```

## ✅ Beneficios

### Mantenibilidad
- **Centralizado**: Todas las configuraciones en un solo lugar
- **Consistente**: Mismos colores y tipografías en toda la app
- **Predecible**: Sin sorpresas en diferentes componentes

### Escalabilidad  
- **Nuevas variantes**: Agregar template sin modificar código existente
- **Temas múltiples**: Fácil cambiar colores globales
- **Componentes reutilizables**: Configuración compartida automática

### Accesibilidad
- **Estados consistentes**: hover, focus, active, disabled
- **Transiciones suaves**: 0.15s ease-in-out
- **Contraste adecuado**: Colores del tema optimizados

### Desarrollo
- **TypeScript**: Tipado completo para todas las variantes
- **IntelliSense**: Autocompletado en VS Code
- **Debug fácil**: Configuraciones centralizadas

## 🔧 Extensión Futura

### Agregar Nueva Variante
1. Agregar configuración en `design-tokens.json`
2. Agregar caso en `GenericButtonRefactored.tsx`
3. Actualizar showcase con ejemplos

### Soporte de Colores
```typescript
// Ejemplo para agregar soporte de warning
template="warning"
backgroundColor: theme.palette.warning.main
```

### Tamaños Personalizados
```typescript
// Ejemplo para agregar tamaño xl
size="xl"
padding: theme.spacing(4)
fontSize: theme.typography.fontSize.lg
```

## 📋 Checklist de Implementación

- [x] Design tokens actualizados
- [x] Theme provider extendido  
- [x] GenericButton refactorizado
- [x] Showcase completo
- [x] Documentación detallada
- [x] Ejemplos de uso real
- [ ] Tests unitarios
- [ ] Storybook documentation
- [ ] Migración de componentes existentes

## 🎉 Conclusión

El sistema ahora es completamente escalable con:

- **8 variantes de botón** listas para usar
- **Configuración global** sin código inline
- **Colores de dominio** para diferentes contextos
- **Tipografías consistentes** desde design tokens
- **Accesibilidad mejorada** con estados properios
- **Fácil extensión** para futuras necesidades

Todo manteniendo la compatibilidad con el ecosistema MUI y las mejores prácticas de React.
