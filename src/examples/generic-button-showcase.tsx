'use client'
import GenericButton from '../components/GenericButton'
import { Box, Typography, Stack, Paper } from '@mui/material'

export default function GenericButtonShowcase() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h3" gutterBottom>
        Generic Button Component Templates
      </Typography>
      
      <Typography variant="body2" sx={{ mb: 4, color: 'rgb(122, 158, 142)' }}>
        All button templates found in full_dashboard.txt, recreated with MUI and global theme.
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        
        {/* Export Template */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Export Template
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgb(122, 158, 142)' }}>
              Transparent with border - like Exportar button
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="export">Exportar</GenericButton>
              <GenericButton template="export">Export Data</GenericButton>
              <GenericButton template="export">Download</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: transparent;
border: 1px solid rgb(225, 232, 231);
border-radius: 8px;
padding: 4px 12px;
color: rgb(15, 31, 20);
font-size: 10px;
font-weight: 600;`}
              </code>
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
              Tab-style with bottom border for navigation
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <GenericButton template="toggle">Activos</GenericButton>
              <GenericButton template="toggle">Inactivos</GenericButton>
              <GenericButton template="toggle">Todos</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: transparent;
border: none;
border-bottom: 2px solid accent;
padding: 9px 14px;
cursor: pointer;`}
              </code>
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
              Colored background for bulk actions
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="action">Activar todos</GenericButton>
              <GenericButton template="action" disabled>Disabled</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #16a34a;
color: white;
border: none;
border-radius: 6px;
padding: 3px 10px;
font-size: 10px;`}
              </code>
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
              Rounded pill style for badges and status
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="pill">Alerta</GenericButton>
              <GenericButton template="pill">Riesgo</GenericButton>
              <GenericButton template="pill">Crítico</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #fee2e2;
color: #991b1b;
border-radius: 20px;
padding: 2px 10px;
font-size: 10.5px;`}
              </code>
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
              Filter button with hover states
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="filter">Filtros</GenericButton>
              <GenericButton template="filter">Limpiar</GenericButton>
              <GenericButton template="filter">Aplicar</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #f0fdf4;
border: 1px solid #e1e8e7;
border-radius: 8px;
padding: 5px 10px;
font-size: 10.5px;`}
              </code>
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
              Full-width modal button
            </Typography>
            <Box sx={{ width: '100%' }}>
              <GenericButton template="modal">Configurar Tablero</GenericButton>
            </Box>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #16a34a;
color: white;
border: none;
border-radius: 10px;
padding: 11px;
width: 100%;
font-weight: 600;`}
              </code>
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
              Small inline button for actions
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="inline">↗ Ficha</GenericButton>
              <GenericButton template="inline">Ver más</GenericButton>
              <GenericButton template="inline">Editar</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #dcfce7;
color: #166534;
border: 1px solid #bbf7d0;
border-radius: 6px;
padding: 2px 7px;
font-size: 10px;`}
              </code>
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
              Primary colored button for main actions
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <GenericButton template="primary">Guardar</GenericButton>
              <GenericButton template="primary">Enviar</GenericButton>
              <GenericButton template="primary" disabled>Disabled</GenericButton>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <code style={{ 
                display: 'block', 
                padding: 2, 
                backgroundColor: 'grey.100', 
                borderRadius: 1,
                fontSize: '11px',
                whiteSpace: 'pre-wrap'
              }}>
{`background: #16a34a;
color: white;
border: 1px solid #16a34a;
border-radius: 8px;
padding: 4px 12px;
font-size: 10px;`}
              </code>
            </Box>
          </Paper>
        </Box>

        {/* Usage Examples */}
        <Box sx={{ flex: '1 1 100%' }}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Usage Examples
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'rgb(122, 158, 142)' }}>
              Common combinations and real-world usage patterns
            </Typography>
            
            <Stack spacing={3}>
              {/* Export Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Export Actions
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButton template="export">Exportar</GenericButton>
                  <GenericButton template="export" startIcon="📊">Exportar Datos</GenericButton>
                  <GenericButton template="export" disabled>Exportando...</GenericButton>
                </Stack>
              </Box>

              {/* Filter Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Filter Controls
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButton template="filter">Filtros</GenericButton>
                  <GenericButton template="filter">Limpiar</GenericButton>
                  <GenericButton template="action">Aplicar Todo</GenericButton>
                </Stack>
              </Box>

              {/* Navigation Section */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Navigation Tabs
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <GenericButton template="toggle">Resumen</GenericButton>
                  <GenericButton template="toggle">Detalles</GenericButton>
                  <GenericButton template="toggle">Análisis</GenericButton>
                </Stack>
              </Box>

              {/* Status Badges */}
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  Status Indicators
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                  <GenericButton template="pill">Activo</GenericButton>
                  <GenericButton template="pill">Pendiente</GenericButton>
                  <GenericButton template="pill">Crítico</GenericButton>
                </Stack>
              </Box>
            </Stack>
          </Paper>
        </Box>

      </Box>
    </Box>
  )
}
