# Tailwind CSS + Material-UI Integration

Este proyecto tiene una configuración completa que sincroniza Tailwind CSS con Material-UI (MUI) usando design tokens compartidos.

## 🎨 **Configuración Sincronizada**

### **Design Tokens Compartidos**
- **Colores**: Mismo palette en ambos sistemas
- **Tipografía**: Font sizes y familias sincronizadas  
- **Espaciado**: Valores consistentes
- **Border Radius**: Mismos valores en ambos
- **Sombras**: Estilos unificados

### **Archivos de Configuración**

#### 1. **`tailwind.config.js`**
```js
// Configuración completa con design tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { /* Mismo palette que MUI */ },
        secondary: { /* Mismo palette que MUI */ },
        // ... todos los colores sincronizados
      },
      fontSize: {
        xs: '9.5px',    // --font-size-xs
        sm: '10px',     // --font-size-sm  
        base: '10.5px', // --font-size-base
        md: '11px',     // --font-size-md
        lg: '13px',     // --font-size-lg
        xl: '22px',     // --font-size-xl
      }
      // ... más configuraciones sincronizadas
    }
  }
}
```

#### 2. **`src/utils/tailwind-theme.ts`**
```ts
// Utilidades para sincronización
import { theme } from '../utils/tailwind-theme';

// Usar patrones predefinidos
<button className={theme.patterns.button.primary}>
  Primary Button
</button>

// Convertir sx props a Tailwind
const tailwindClasses = theme.sxToTailwind({
  color: 'rgb(22, 163, 74)',
  fontSize: 'var(--font-size-md)',
  padding: 'var(--spacing-md)'
});
```

#### 3. **`src/app/globals.css`**
```css
/* CSS variables que ambos sistemas usan */
:root {
  --color-primary: rgb(22, 163, 74);
  --color-secondary: rgb(217, 119, 6);
  --font-size-md: 11px;
  --spacing-md: 12px;
  /* ... más variables */
}

/* Clases utility personalizadas */
.text-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }
```

## 🚀 **Uso Práctico**

### **Componentes MUI con Clases Tailwind**
```tsx
import { Button } from '@mui/material';

// Combinar MUI props con clases Tailwind
<Button 
  className="bg-primary hover:bg-primary-dark transition-colors rounded-lg px-6 py-3"
  sx={{ 
    fontFamily: 'Poppins, sans-serif',
    fontSize: 'var(--font-size-md)'
  }}
>
  Botón Híbrido
</Button>
```

### **Layout con Tailwind, Componentes con MUI**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
  <Card className="shadow-lg hover:shadow-xl transition-shadow">
    <CardContent className="p-6">
      <Typography variant="h3" className="text-lg font-semibold mb-4">
        Título de Tarjeta
      </Typography>
      <Typography className="text-sm text-gray-600">
        Contenido con estilos mixtos
      </Typography>
    </CardContent>
  </Card>
</div>
```

### **Patrones Predefinidos**
```tsx
import { theme } from '../utils/tailwind-theme';

// Botones
<button className={theme.patterns.button.primary}>Primary</button>
<button className={theme.patterns.button.outlined}>Outlined</button>

// Tarjetas
<div className={theme.patterns.card}>CardContent</div>

// Tipografía
<h1 className={theme.patterns.text.h1}>Título Principal</h1>
<p className={theme.patterns.text.body2}>Texto secundario</p>

// Layout
<div className={theme.patterns.container}>Contenido centrado</div>
<div className={theme.patterns.flexCenter}>Centrado</div>
<div className={theme.patterns.flexBetween}>Espaciado</div>
```

## 🎯 **Ejemplos de Uso**

### **1. Botones con Estados**
```tsx
// Solo Tailwind
<button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
  Tailwind Only
</button>

// Solo MUI  
<Button variant="contained" color="primary">
  MUI Only
</Button>

// Híbrido (recomendado)
<Button 
  className="shadow-md hover:shadow-lg transition-shadow"
  variant="contained" 
  color="primary"
>
  Best of Both
</Button>
```

### **2. Tarjetas Interactivas**
```tsx
<Card className="hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
  <CardContent className="p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">1</span>
      </div>
      <Typography variant="h3" className="text-lg font-semibold">
        Feature Title
      </Typography>
    </div>
    <Typography className="text-sm text-gray-600 leading-relaxed">
      Description text with consistent spacing and typography.
    </Typography>
  </CardContent>
</Card>
```

### **3. Formularios**
```tsx
<Stack spacing={3} className="max-w-md mx-auto p-6">
  <TextField
    className="w-full"
    label="Email"
    variant="outlined"
    InputProps={{
      className: "rounded-lg"
    }}
  />
  
  <Button 
    className="w-full py-3 rounded-lg font-medium"
    variant="contained"
    size="large"
  >
    Submit
  </Button>
</Stack>
```

## 🌈 **Sistema de Colores**

### **Uso en Tailwind**
```html
<!-- Colores principales -->
<div className="bg-primary text-white">Primary</div>
<div className="bg-secondary text-white">Secondary</div>
<div className="bg-error text-white">Error</div>
<div className="bg-warning text-white">Warning</div>
<div className="bg-info text-white">Info</div>
<div className="bg-success text-white">Success</div>

<!-- Colores de texto -->
<p className="text-primary">Primary text</p>
<p className="text-secondary">Secondary text</p>
<p className="text-disabled">Disabled text</p>

<!-- Bordes -->
<div className="border border-primary">Primary border</div>
<div className="border border-divider">Divider border</div>
```

### **Uso en MUI**
```tsx
<Typography color="primary">Primary text</Typography>
<Button color="secondary">Secondary button</Button>
<Alert severity="error">Error message</Alert>
```

## 📏 **Tipografía Sincronizada**

### **Font Sizes**
```tsx
<!-- Tailwind -->
<p className="text-xs">9.5px</p>
<p className="text-sm">10px</p>
<p className="text-base">10.5px</p>
<p className="text-md">11px</p>
<p className="text-lg">13px</p>
<p className="text-xl">22px</p>

<!-- MUI -->
<Typography variant="caption">9.5px</Typography>
<Typography variant="body2">10px</Typography>
<Typography variant="body1">10.5px</Typography>
<Typography variant="h3">11px</Typography>
<Typography variant="h2">13px</Typography>
<Typography variant="h1">22px</Typography>
```

## 🔄 **Conversión entre Sistemas**

### **MUI sx → Tailwind**
```tsx
import { theme } from '../utils/tailwind-theme';

const muiSx = {
  color: 'rgb(22, 163, 74)',
  backgroundColor: 'rgb(240, 253, 244)',
  padding: '12px',
  borderRadius: '8px'
};

// Convertir automáticamente
const tailwindClasses = theme.sxToTailwind(muiSx);
// Resultado: ['text-[rgb(22,163,74)]', 'bg-[rgb(240,253,244)]', 'p-md', 'rounded-md']
```

### **Tailwind → MUI Colors**
```tsx
import { theme } from '../utils/tailwind-theme';

// Obtener color de Tailwind para MUI
const primaryColor = theme.getTailwindColor('primary', 'main');
// Resultado: 'rgb(22, 163, 74)'

const primaryLight = theme.getTailwindColor('primary', 'light');
// Resultado: 'rgb(187, 247, 208)'
```

## 🎭 **Ejemplo Completo**

Visita `/tailwind-demo` para ver un ejemplo completo de integración.

## 📝 **Buenas Prácticas**

1. **Usa Tailwind para layout**: Grid, flexbox, espaciado general
2. **Usa MUI para componentes**: Botones, inputs, cards complejos
3. **Combina ambos**: Usa clases Tailwind en componentes MUI
4. **Mantén consistencia**: Usa los design tokens compartidos
5. **Aprovecha patrones**: Usa `theme.patterns` para estilos comunes

## 🛠️ **Extensión del Sistema**

Para agregar nuevos design tokens:

1. **Actualizar `design-tokens.json`**
2. **Actualizar `tailwind.config.js`**
3. **Actualizar `src/utils/tailwind-theme.ts`**
4. **Actualizar CSS variables en `globals.css`**

Esto asegura que ambos sistemas permanezcan sincronizados.
