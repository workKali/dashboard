'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, Stack, Box, Button } from '@mui/material';
import Collapse from '../components/collapse';
import StatCard from '../components/stat-card';

export default function CollapseDemo() {
  const [carbonoOpen, setCarbonoOpen] = useState(true);
  const [forestalOpen, setForestalOpen] = useState(false);
  const [aguaOpen, setAguaOpen] = useState(true);

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Collapse Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Collapses from full_dashboard.txt:
            </Typography>
            <Stack spacing={2}>
              <Collapse 
                title="Balance de Carbono"
                defaultOpen={true}
                onToggle={(open) => setCarbonoOpen(open)}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                    <StatCard 
                      label="CO₂ Capturado"
                      value={1250}
                      unit="toneladas"
                      variant="success"
                    />
                    <StatCard 
                      label="CO₂ Emitido"
                      value={850}
                      unit="toneladas"
                      variant="warning"
                    />
                    <StatCard 
                      label="Balance Neto"
                      value={400}
                      unit="toneladas"
                      variant="primary"
                    />
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="body2">
                      Análisis detallado del balance de carbono en las fincas monitoreadas.
                    </Typography>
                  </Box>
                </Stack>
              </Collapse>

              <Collapse 
                title="Cobertura Forestal"
                defaultOpen={false}
                onToggle={(open) => setForestalOpen(open)}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                    <StatCard 
                      label="Área Forestal"
                      value={850}
                      unit="hectáreas"
                      variant="success"
                    />
                    <StatCard 
                      label="Cobertura Actual"
                      value={92.5}
                      unit="%"
                      variant="primary"
                    />
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="body2">
                      Monitoreo de la cobertura forestal y análisis de deforestación.
                    </Typography>
                  </Box>
                </Stack>
              </Collapse>

              <Collapse 
                title="Gestión del Agua"
                defaultOpen={true}
                onToggle={(open) => setAguaOpen(open)}
              >
                <Stack spacing={2}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                    <StatCard 
                      label="Consumo Total"
                      value={2500}
                      unit="m³"
                      variant="primary"
                    />
                    <StatCard 
                      label="Eficiencia"
                      value={87.3}
                      unit="%"
                      variant="success"
                    />
                    <StatCard 
                      label="Fuentes Activas"
                      value={12}
                      unit="fuentes"
                      variant="info"
                    />
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="body2">
                      Sistema de gestión y monitoreo del recurso hídrico.
                    </Typography>
                  </Box>
                </Stack>
              </Collapse>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Different States:
            </Typography>
            <Stack spacing={2}>
              <Collapse title="Por defecto cerrado">
                <Typography variant="body2">
                  Este collapse está cerrado por defecto.
                </Typography>
              </Collapse>

              <Collapse title="Por defecto abierto" defaultOpen={true}>
                <Typography variant="body2">
                  Este collapse está abierto por defecto.
                </Typography>
              </Collapse>

              <Collapse title="Con contenido complejo">
                <Stack spacing={2}>
                  <Typography variant="body2">
                    Este collapse contiene contenido más complejo con múltiples elementos.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined" size="small">
                      Acción 1
                    </Button>
                    <Button variant="contained" size="small">
                      Acción 2
                    </Button>
                  </Box>
                  
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="body2">
                      Contenido adicional dentro del collapse.
                    </Typography>
                  </Box>
                </Stack>
              </Collapse>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Interactive Demo:
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Estados actuales:
              </Typography>
              
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption" display="block">
                    Balance de Carbono
                  </Typography>
                  <Typography variant="h6" color={carbonoOpen ? 'success.main' : 'text.secondary'}>
                    {carbonoOpen ? 'ABIERTO' : 'CERRADO'}
                  </Typography>
                </Box>
                
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption" display="block">
                    Cobertura Forestal
                  </Typography>
                  <Typography variant="h6" color={forestalOpen ? 'success.main' : 'text.secondary'}>
                    {forestalOpen ? 'ABIERTO' : 'CERRADO'}
                  </Typography>
                </Box>
                
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1, textAlign: 'center' }}>
                  <Typography variant="caption" display="block">
                    Gestión del Agua
                  </Typography>
                  <Typography variant="h6" color={aguaOpen ? 'success.main' : 'text.secondary'}>
                    {aguaOpen ? 'ABIERTO' : 'CERRADO'}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Collapse replica exactly the design from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Container: background white, border-radius 12px, shadow 0 1px 4px rgba(15,31,20,0.04)
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Header: padding 12px 16px, flex space-between, cursor pointer
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Title: font-size 11px, weight 700, uppercase, letter-spacing 0.06em
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Toggle: font-size 18px, weight 300, shows "−" when open, "+" when closed
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Content: padding 0 16px 16px, gap 12px, only shown when open
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Border: bottom border only when content is open
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
