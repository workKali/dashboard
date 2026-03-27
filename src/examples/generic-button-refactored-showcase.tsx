'use client'
import GenericButtonRefactored from '../components/GenericButtonRefactored'
import { Box, Typography, Stack, Paper } from '@mui/material'

export default function GenericButtonRefactoredShowcase() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        GenericButton Refactorizado - Configuración Global del Tema
      </Typography>
      
      <Typography variant="body2" sx={{ mb: 4, color: 'rgb(122, 158, 142)' }}>
        Botones que usan el tema MUI global sin código inline. Todas las configuraciones están centralizadas en el theme provider.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        
        {/* Export Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Export Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Transparente con borde - Estilo Exportar original
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="export">Exportar</GenericButtonRefactored>
              <GenericButtonRefactored template="export">Export Data</GenericButtonRefactored>
              <GenericButtonRefactored template="export" disabled>Disabled</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.divider para el borde
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.text.primary para el color
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Toggle Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Toggle Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Estilo tab con borde inferior
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <GenericButtonRefactored template="toggle">Activos</GenericButtonRefactored>
              <GenericButtonRefactored template="toggle">Inactivos</GenericButtonRefactored>
              <GenericButtonRefactored template="toggle">Todos</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.primary.main para el borde
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ BorderRadius 0 para estilo tab
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Action Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Action Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Fondo coloreado para acciones masivas
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="action">Activar todos</GenericButtonRefactored>
              <GenericButtonRefactored template="action" disabled>Disabled</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.success.main
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Hover con theme.palette.success.dark
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Pill Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pill Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Estilo redondeado para badges
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="pill">Alerta</GenericButtonRefactored>
              <GenericButtonRefactored template="pill">Riesgo</GenericButtonRefactored>
              <GenericButtonRefactored template="pill">Crítico</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.error.light/main/dark
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ BorderRadius 20px para estilo pill
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Filter Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Filter Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Botón de filtro con estados hover
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="filter">Filtros</GenericButtonRefactored>
              <GenericButtonRefactored template="filter">Limpiar</GenericButtonRefactored>
              <GenericButtonRefactored template="filter">Aplicar</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.grey[50]
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Hover con theme.palette.action.hover
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Modal Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Modal Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Botón de ancho completo para modales
            </Typography>
            <Box sx={{ width: '100%' }}>
              <GenericButtonRefactored template="modal">Configurar Tablero</GenericButtonRefactored>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Width 100% para botones de modal
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.primary.main
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Inline Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Inline Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Botón pequeño inline para acciones
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="inline">↗ Ficha</GenericButtonRefactored>
              <GenericButtonRefactored template="inline">Ver más</GenericButtonRefactored>
              <GenericButtonRefactored template="inline">Editar</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ MinWidth auto para tamaño contenido
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.success.light
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Primary Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Primary Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Botón primario para acciones principales
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButtonRefactored template="primary">Guardar</GenericButtonRefactored>
              <GenericButtonRefactored template="primary">Enviar</GenericButtonRefactored>
              <GenericButtonRefactored template="primary" disabled>Disabled</GenericButtonRefactored>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                ✅ Usa theme.palette.primary.main
              </Typography>
              <Typography variant="caption" color="text.secondary">
                ✅ Contained variant para botones primarios
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Combinaciones de Uso */}
        <Box sx={{ flex: '1 1 100%' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Combinaciones Escalables
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgb(122, 158, 142)' }}>
              Ejemplos de uso real con diferentes configuraciones
            </Typography>
            
            <Stack spacing={3}>
              {/* Export Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Acciones de Exportación
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButtonRefactored template="export">Exportar</GenericButtonRefactored>
                  <GenericButtonRefactored template="export" startIcon="📊">Exportar Datos</GenericButtonRefactored>
                  <GenericButtonRefactored template="export" disabled>Exportando...</GenericButtonRefactored>
                </Stack>
              </Box>

              {/* Filter Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Controles de Filtro
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButtonRefactored template="filter">Filtros</GenericButtonRefactored>
                  <GenericButtonRefactored template="filter">Limpiar</GenericButtonRefactored>
                  <GenericButtonRefactored template="action">Aplicar Todo</GenericButtonRefactored>
                </Stack>
              </Box>

              {/* Navigation Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Navegación por Tabs
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <GenericButtonRefactored template="toggle">Resumen</GenericButtonRefactored>
                  <GenericButtonRefactored template="toggle">Detalles</GenericButtonRefactored>
                  <GenericButtonRefactored template="toggle">Análisis</GenericButtonRefactored>
                </Stack>
              </Box>

              {/* Status Badges */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Indicadores de Estado
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButtonRefactored template="pill">Activo</GenericButtonRefactored>
                  <GenericButtonRefactored template="pill">Pendiente</GenericButtonRefactored>
                  <GenericButtonRefactored template="pill">Crítico</GenericButtonRefactored>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Box>

      </Box>

      {/* Resumen de Configuración Global */}
      <Box sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, backgroundColor: 'grey.50' }}>
          <Typography variant="h6" gutterBottom>
            🎨 Configuración Global del Tema
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Todas las configuraciones de botones están centralizadas en el tema MUI:
          </Typography>
          
          <Stack spacing={1}>
            <Typography variant="caption" color="text.secondary">
              • <strong>Colores:</strong> theme.palette.primary, theme.palette.success, theme.palette.error, theme.palette.grey
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • <strong>Tipografía:</strong> theme.palette.text.primary, fontSize, fontWeight del tema
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • <strong>Estados:</strong> theme.palette.action.hover, theme.palette.action.selected
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • <strong>Bordes:</strong> theme.palette.divider, theme.palette.primary.main
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • <strong>Accesibilidad:</strong> Transiciones consistentes, estados hover/active/disabled
            </Typography>
            <Typography variant="caption" color="text.secondary">
              • <strong>Escalabilidad:</strong> Fácil agregar nuevas variantes sin modificar componentes
            </Typography>
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}
