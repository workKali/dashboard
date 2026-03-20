'use client';

import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import TitledSection from '../components/titled-section';

export default function TitledSectionDemo() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Section Block Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Section Blocks from full_dashboard.txt:
            </Typography>
            <Stack spacing={2}>
              <TitledSection 
                sectionTitle="Hato Ganadero"
                sectionSubtitle="Total: 22,080 cabezas"
              >
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: 2 
                }}>
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="h6">Propósito del Hato</Typography>
                    <Typography variant="body2">22,080 cabezas</Typography>
                  </Box>
                  <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                    <Typography variant="h6">Mix de Razas</Typography>
                    <Typography variant="body2">5 razas principales</Typography>
                  </Box>
                </Box>
              </TitledSection>
              
              <TitledSection 
                sectionTitle="Manejo de Pastos"
                sectionSubtitle="Total: 1,250 ha"
              >
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                  <Typography variant="body2">
                    Información detallada sobre manejo de pastos y áreas de cultivo.
                  </Typography>
                </Box>
              </TitledSection>
              
              <TitledSection 
                sectionTitle="Manejo Integrado de Plagas"
                sectionSubtitle="Total: 450 fincas"
              >
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                  <Typography variant="body2">
                    Control integrado de plagas en las fincas monitoreadas.
                  </Typography>
                </Box>
              </TitledSection>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Variants:
            </Typography>
            <Stack spacing={2}>
              <TitledSection 
                sectionTitle="Título Solamente"
                sectionSubtitle=""
                showBottomBorder={true}
              >
                <Typography variant="body2">
                  Contenido con solo título y borde inferior.
                </Typography>
              </TitledSection>
              
              <TitledSection 
                sectionTitle="Sin Borde"
                sectionSubtitle="Este no tiene borde inferior"
                showBottomBorder={false}
              >
                <Typography variant="body2">
                  Contenido sin línea divisoria entre título y contenido.
                </Typography>
              </TitledSection>
              
              <TitledSection 
                sectionTitle=""
                sectionSubtitle="Solo subtítulo"
              >
                <Typography variant="body2">
                  Contenido con solo subtítulo y borde.
                </Typography>
              </TitledSection>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Empty State:
            </Typography>
            <TitledSection>
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                Contenido vacío del TitledSection
              </Typography>
            </TitledSection>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Complex Content:
            </Typography>
            <TitledSection 
              sectionTitle="Dashboard Completo"
              sectionSubtitle="Métricas generales del sistema"
            >
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box sx={{ flex: 1, p: 2, bgcolor: 'primary.50', borderRadius: 1 }}>
                    <Typography variant="h6" color="primary.main">1,234</Typography>
                    <Typography variant="caption">Usuarios activos</Typography>
                  </Box>
                  <Box sx={{ flex: 1, p: 2, bgcolor: 'success.50', borderRadius: 1 }}>
                    <Typography variant="h6" color="success.main">89.3%</Typography>
                    <Typography variant="caption">Satisfacción</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                  <Typography variant="body2">
                    Información adicional con múltiples elementos y métricas del sistema.
                  </Typography>
                </Box>
              </Stack>
            </TitledSection>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Section Block replica exactly the design from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Border radius: 14px (exactamente como en el original)
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Title: 11px, weight 600, uppercase, letter-spacing 0.06em
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • SubsectionTitle: 10.5px, weight 300, margin-top 2px
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Header border: Optional, 1px solid, padding-bottom 10px
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
