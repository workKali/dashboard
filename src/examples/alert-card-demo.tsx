'use client';

import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import AlertCard from '../components/alert-card';

export default function AlertCardDemo() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Alert Card Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Alert Cards from full_dashboard.txt:
            </Typography>
            <Stack spacing={2}>
              <AlertCard 
                variant="critical" 
                title="Alto Riesgo"
              >
                <Typography variant="body2" sx={{ fontSize: '10px', color: 'rgb(122, 158, 142)' }}>
                  Se han detectado múltiples anomalías en el sistema que requieren atención inmediata.
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 700, color: '#ef4444', mt: 1 }}>
                  12
                </Typography>
                <Typography variant="caption" color="rgb(122, 158, 142)">
                  Casos críticos pendientes
                </Typography>
              </AlertCard>
              
              <AlertCard 
                variant="error" 
                title="Mora"
              >
                <Typography variant="body2" sx={{ fontSize: '10px', color: 'rgb(122, 158, 142)' }}>
                  Clientes con pagos retrasados más de 30 días.
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 700, color: '#ef4444', mt: 1 }}>
                  8.5%
                </Typography>
                <Typography variant="caption" color="rgb(122, 158, 142)">
                  Tasa de morosidad actual
                </Typography>
              </AlertCard>

              <AlertCard 
                variant="success" 
                title="Rendimiento"
              >
                <Typography variant="body2" sx={{ fontSize: '10px', color: 'rgb(122, 158, 142)' }}>
                  Métricas de rendimiento del último trimestre.
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: 700, color: '#16a34a', mt: 1 }}>
                  94.2%
                </Typography>
                <Typography variant="caption" color="rgb(122, 158, 142)">
                  Eficiencia operativa
                </Typography>
              </AlertCard>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Gradient Card:
            </Typography>
            <AlertCard 
              variant="gradient" 
              title="Dashboard General"
            >
              <Typography variant="body2" sx={{ fontSize: '10px', color: 'rgb(122, 158, 142)' }}>
                Vista combinada de todas las métricas del sistema.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 700 }}>
                    1,247
                  </Typography>
                  <Typography variant="caption" color="rgb(122, 158, 142)">
                    Usuarios activos
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 700 }}>
                    89.3%
                  </Typography>
                  <Typography variant="caption" color="rgb(122, 158, 142)">
                    Satisfacción
                  </Typography>
                </Box>
              </Stack>
            </AlertCard>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              All Variants:
            </Typography>
            <Stack spacing={2}>
              <AlertCard variant="default" title="Default">
                <Typography variant="body2">Tarjeta con estilo por defecto</Typography>
              </AlertCard>
              
              <AlertCard variant="success" title="Success">
                <Typography variant="body2">Tarjeta de éxito con borde verde</Typography>
              </AlertCard>
              
              <AlertCard variant="warning" title="Warning">
                <Typography variant="body2">Tarjeta de advertencia con borde ámbar</Typography>
              </AlertCard>
              
              <AlertCard variant="error" title="Error">
                <Typography variant="body2">Tarjeta de error con borde rojo</Typography>
              </AlertCard>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Custom Colors:
            </Typography>
            <Stack spacing={2}>
              <AlertCard 
                variant="custom"
                title="Personalizado"
                customColor={{
                  background: 'rgb(248, 250, 252)',
                  border: '1px solid rgb(203, 213, 225)',
                  topBorder: 'rgb(99, 102, 241)',
                }}
              >
                <Typography variant="body2">Tarjeta con colores personalizados</Typography>
              </AlertCard>
              
              <AlertCard 
                variant="custom"
                title="Gradiente Personalizado"
                customColor={{
                  background: 'linear-gradient(155deg, rgb(254, 243, 199) 0%, rgb(254, 226, 226) 100%)',
                  border: '1px solid rgb(253, 230, 138)',
                  topBorder: 'linear-gradient(90deg, rgb(217, 119, 6), rgb(239, 68, 68))',
                }}
              >
                <Typography variant="body2">Tarjeta con gradiente personalizado</Typography>
              </AlertCard>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Without Top Border:
            </Typography>
            <AlertCard 
              variant="success" 
              title="Sin Borde Superior"
              showTopBorder={false}
            >
              <Typography variant="body2">Tarjeta sin el borde superior de 3px</Typography>
            </AlertCard>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Left Border Variant:
            </Typography>
            <Stack spacing={2}>
              <AlertCard 
                variant="warning" 
                title="Advertencia"
                showTopBorder={false}
                showLeftBorder={true}
              >
                <Typography variant="body2">Tarjeta con borde izquierdo ámbar</Typography>
              </AlertCard>
              
              <AlertCard 
                variant="error" 
                title="Error"
                showTopBorder={false}
                showLeftBorder={true}
              >
                <Typography variant="body2">Tarjeta con borde izquierdo rojo</Typography>
              </AlertCard>
              
              <AlertCard 
                variant="success" 
                title="Éxito"
                showTopBorder={false}
                showLeftBorder={true}
              >
                <Typography variant="body2">Tarjeta con borde izquierdo verde</Typography>
              </AlertCard>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Left Border with Header Style:
            </Typography>
            <AlertCard 
              variant="warning"
              showTopBorder={false}
              showLeftBorder={true}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '10px 18px',
                cursor: 'pointer'
              }}>
                <Typography variant="body2" sx={{ fontSize: '10px' }}>
                  Notificación importante
                </Typography>
                <Typography variant="caption" color="rgb(122, 158, 142)">
                  →
                </Typography>
              </Box>
            </AlertCard>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
            <Typography variant="caption" color="rgb(122, 158, 142)">
              Alert Card replica exactly the design patterns from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="rgb(122, 158, 142)">
                • Border radius: 12px (consistent across all cards)
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="rgb(122, 158, 142)">
                • Top border: 3px height with color variants
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="rgb(122, 158, 142)">
                • Left border: 3px width (alternative to top border)
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="rgb(122, 158, 142)">
                • Padding: 14px 16px, gap: 6px between elements
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="rgb(122, 158, 142)">
                • Critical variant: uppercase title with letter spacing
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
