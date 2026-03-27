# Theme Refactoring for Scalable GenericButton

Plan para crear configuraciones de tema MUI escalables que eliminen código inline y soporten variantes, tipografías, tamaños y colores de dominio globalmente.

## Objetivo Principal
Refactorizar el tema MUI y el GenericButton para usar configuraciones globales en lugar de estilos inline, haciendo el sistema más mantenible y accesible.

## Cambios Propuestos

### 1. Ampliar Theme Provider
- **Nuevas variantes de botón**: `export`, `toggle`, `action`, `pill`, `filter`, `modal`, `inline`
- **Nuevos tamaños**: `xs` (8px), `lg` (16px) además de los existentes
- **Colores de dominio**: hydric, carbon, forest con sus variantes
- **Tipografías extendidas**: usar tokens de design-tokens.json
- **Estados específicos**: loading, active, disabled

### 2. Actualizar Design Tokens
- Agregar configuraciones específicas para cada variante de botón
- Definir espaciado y bordes consistentes
- Incluir colores de dominio en palette extendida

### 3. Refactorizar GenericButton
- Reemplazar estilos inline con variantes de tema
- Usar `variant="export"` en lugar de `template="export"`
- Implementar sistema de tamaños y colores de dominio
- Mantener compatibilidad con props existentes

### 4. Configuraciones Específicas
- **Variantes**: Cada plantilla actual como variante MUI
- **Tipografías**: Integrar fontSize, fontWeight, fontFamily de tokens
- **Colores**: Soporte completo para colores semánticos y de dominio
- **Accesibilidad**: Estados hover, focus, disabled consistentes

## Archivos a Modificar
1. `src/components/theme-provider.tsx` - Configuración principal del tema
2. `design-tokens.json` - Agregar configuraciones de botones
3. `src/components/GenericButton.tsx` - Refactorización completa
4. `src/examples/generic-button-showcase.tsx` - Actualizar ejemplos

## Beneficios
- Código más limpio y mantenible
- Consistencia global en todos los botones
- Fácil extensión para nuevas variantes
- Mejor accesibilidad y experiencia de desarrollador
