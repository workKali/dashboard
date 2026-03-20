'use client';

import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import StatusBadge from '../components/status-badge';

export default function StatusBadgeDemo() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Status Badge Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Filter Status Badges (From full_dashboard.txt):
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="warning" 
                  label="Estado: Aprobado" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Ámbar - Estado de solicitud)
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="success" 
                  label="Región: Cajamarca" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Verde - Ubicación geográfica)
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="success" 
                  label="Sucursal: Principal" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Verde - Oficina/sucursal)
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="success" 
                  label="Agente: Juan Pérez" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Verde - Agente asignado)
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="info" 
                  label="2024-01-15 - 2024-12-31" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Azul - Rango de fechas)
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Critical Status Badges (No indicator):
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="critical" 
                  label="Crítico" 
                  showIndicator={false}
                />
                <Typography variant="caption" color="text.secondary">
                  (Rojo - Sin indicador, padding diferente)
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                <StatusBadge 
                  variant="error" 
                  label="Error" 
                  showIndicator={true}
                />
                <Typography variant="caption" color="text.secondary">
                  (Rojo - Con indicador)
                </Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              All Variants:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <StatusBadge variant="default" label="Default" />
              <StatusBadge variant="success" label="Success" />
              <StatusBadge variant="warning" label="Warning" />
              <StatusBadge variant="info" label="Info" />
              <StatusBadge variant="error" label="Error" />
              <StatusBadge variant="critical" label="Critical" />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Custom Colors:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <StatusBadge 
                variant="default"
                label="Custom Purple"
                customColor={{
                  bg: 'rgb(243, 232, 255)',
                  border: 'rgb(221, 214, 254)',
                  color: 'rgb(109, 40, 217)',
                  indicator: 'rgb(124, 58, 237)',
                }}
              />
              <StatusBadge 
                variant="default"
                label="Custom Pink"
                customColor={{
                  bg: 'rgb(253, 242, 248)',
                  border: 'rgb(252, 231, 243)',
                  color: 'rgb(190, 18, 60)',
                  indicator: 'rgb(236, 72, 153)',
                }}
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Status Badge replicates exactly the design patterns found in full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Border radius: 20px (pill shape)
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Gap: 4px between indicator and text
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Font: Poppins, 10px, weight 600
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
