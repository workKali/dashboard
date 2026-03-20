'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import Tabs from '../components/tabs';

export default function TabsDemo() {
  const [activeTab, setActiveTab] = useState('resumen');

  const basicTabs = [
    { id: 'resumen', label: 'Resumen' },
    { id: 'cartera', label: 'Cartera' },
    { id: 'monitoreo', label: 'Monitoreo' },
    { id: 'fincas', label: 'Fincas' },
  ];

  const extendedTabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'reports', label: 'Reportes' },
    { id: 'settings', label: 'Configuración' },
    { id: 'help', label: 'Ayuda' },
  ];

  const tabsWithDisabled = [
    { id: 'available', label: 'Disponible' },
    { id: 'disabled', label: 'Deshabilitado', disabled: true },
    { id: 'another', label: 'Otra pestaña' },
  ];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Tabs Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Basic Tabs (from your example):
            </Typography>
            <Stack spacing={2}>
              <Tabs 
                tabs={basicTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              
              <Box sx={{ 
                p: 2, 
                bgcolor: 'background.default', 
                borderRadius: 1,
                minHeight: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="body2" color="text.secondary">
                  Contenido activo: <strong>{activeTab}</strong>
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Extended Tabs:
            </Typography>
            <Stack spacing={2}>
              <Tabs 
                tabs={extendedTabs}
                activeTab="analytics"
                onTabChange={(tabId) => console.log('Tab changed:', tabId)}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Tabs with Disabled State:
            </Typography>
            <Stack spacing={2}>
              <Tabs 
                tabs={tabsWithDisabled}
                activeTab="available"
                onTabChange={(tabId) => console.log('Tab changed:', tabId)}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Not Full Width:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ width: 'fit-content' }}>
                <Tabs 
                  tabs={basicTabs.slice(0, 3)}
                  activeTab="cartera"
                  onTabChange={(tabId) => console.log('Tab changed:', tabId)}
                  fullWidth={false}
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Many Tabs (Horizontal Scroll):
            </Typography>
            <Stack spacing={2}>
              <Tabs 
                tabs={[
                  { id: 'tab1', label: 'Resumen General' },
                  { id: 'tab2', label: 'Análisis Detallado' },
                  { id: 'tab3', label: 'Reportes Financieros' },
                  { id: 'tab4', label: 'Monitoreo en Tiempo Real' },
                  { id: 'tab5', label: 'Configuración Avanzada' },
                  { id: 'tab6', label: 'Exportación de Datos' },
                  { id: 'tab7', label: 'Histórico de Cambios' },
                ]}
                activeTab="tab1"
                onTabChange={(tabId) => console.log('Tab changed:', tabId)}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Integration Example:
            </Typography>
            <Stack spacing={2}>
              <Tabs 
                tabs={basicTabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
              
              <Box sx={{ 
                p: 3, 
                bgcolor: 'background.default', 
                borderRadius: 1,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                {activeTab === 'resumen' && (
                  <Typography variant="body2">
                    Vista de resumen con métricas principales y estadísticas generales del sistema.
                  </Typography>
                )}
                {activeTab === 'cartera' && (
                  <Typography variant="body2">
                    Información detallada de la cartera de clientes y productos financieros.
                  </Typography>
                )}
                {activeTab === 'monitoreo' && (
                  <Typography variant="body2">
                    Panel de monitoreo con alertas y estado actual de todos los sistemas.
                  </Typography>
                )}
                {activeTab === 'fincas' && (
                  <Typography variant="body2">
                    Gestión de fincas con información detallada de cada ubicación.
                  </Typography>
                )}
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Tabs replica exactly the design from your example
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Active tab: border-bottom 2px solid primary color, font-weight 600
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Inactive tab: border-bottom 2px solid transparent, font-weight 400
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Typography: 11px, Poppins family, white-space nowrap
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Layout: flex, overflow-x auto, flex-shrink 0, horizontal scroll
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Transition: color 0.15s smooth animation
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
