'use client';

import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import DomainActionButton from '../components/domain-action-button';

export default function DomainActionButtonDemo() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Action Button Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Action Buttons from full_dashboard.txt:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="hydric-deficit" 
                label="Ver fincas con déficit hídrico"
                alertCount={10}
                onActionClick={() => console.log('Hydric clicked')}
              />
              
              <DomainActionButton 
                actionType="payment-overdue" 
                label="Ver fincas en mora"
                alertCount={5}
                showWarningIcon={true}
                onActionClick={() => console.log('Mora clicked')}
              />
              
              <DomainActionButton 
                actionType="risk-assessment" 
                label="Ver fincas de alto riesgo"
                alertCount={12}
                showWarningIcon={true}
                onActionClick={() => console.log('Risk clicked')}
              />
              
              <DomainActionButton 
                actionType="carbon-emission" 
                label="Ver fincas con alta emisión"
                alertCount={8}
                onActionClick={() => console.log('Emission clicked')}
              />
              
              <DomainActionButton 
                actionType="deforestation-alert" 
                label="Ver fincas con deforestación"
                alertCount={3}
                onActionClick={() => console.log('Deforest clicked')}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              All Variants:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="default" 
                label="Default Action"
                alertCount={1}
              />
              
              <DomainActionButton 
                actionType="hydric-deficit" 
                label="Hydric (Blue)"
                alertCount={7}
              />
              
              <DomainActionButton 
                actionType="risk-assessment" 
                label="Risk (Red)"
                alertCount={15}
                showWarningIcon={true}
              />
              
              <DomainActionButton 
                actionType="carbon-emission" 
                label="Emission (Gray)"
                alertCount={4}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Without Counter Badge:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="hydric-deficit" 
                label="Ver fincas con déficit hídrico"
                onActionClick={() => console.log('No badge clicked')}
              />
              
              <DomainActionButton 
                actionType="risk-assessment" 
                label="Ver fincas de alto riesgo"
                showWarningIcon={true}
                onActionClick={() => console.log('No badge clicked')}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Custom Colors:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="custom"
                label="Custom Purple"
                alertCount={6}
                customStyling={{
                  backgroundColor: 'rgb(243, 232, 255)',
                  borderColor: 'rgb(221, 214, 254)',
                  textColor: 'rgb(109, 40, 217)',
                  hoverBackground: 'rgb(221, 214, 254)',
                  alertBadgeBackground: 'rgb(109, 40, 217)',
                }}
              />
              
              <DomainActionButton 
                actionType="custom"
                label="Custom Green"
                alertCount={9}
                customStyling={{
                  backgroundColor: 'rgb(240, 253, 244)',
                  borderColor: 'rgb(187, 247, 208)',
                  textColor: 'rgb(22, 163, 74)',
                  hoverBackground: 'rgb(187, 247, 208)',
                  alertBadgeBackground: 'rgb(22, 163, 74)',
                }}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              States:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="hydric-deficit" 
                label="Normal State"
                alertCount={3}
              />
              
              <DomainActionButton 
                actionType="risk-assessment" 
                label="Disabled State"
                alertCount={8}
                showWarningIcon={true}
                isDisabled={true}
              />
              
              <DomainActionButton 
                actionType="default" 
                label="Not Full Width"
                alertCount={2}
                useFullWidth={false}
              />
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Large Count Numbers:
            </Typography>
            <Stack spacing={2}>
              <DomainActionButton 
                actionType="hydric-deficit" 
                label="Many Items"
                alertCount={999}
              />
              
              <DomainActionButton 
                actionType="risk-assessment" 
                label="Very Large Count"
                alertCount={15847}
                showWarningIcon={true}
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Action Button replica exactly the design patterns from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Width: 100% by default, border-radius: 8px
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Badge: border-radius: 10px, padding: 1px 6px, font-weight: 700
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Hover: Changes to border color background
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Icon: Warning icon for risk/mora variants
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
