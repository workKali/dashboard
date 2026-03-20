'use client';

import { Card, CardContent, Typography, Stack, Box } from '@mui/material';
import StatCard from '../components/stat-card';

export default function StatCardDemo() {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Stat Card Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stat Cards from full_dashboard.txt:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Total fincas"
                  value={50}
                  unit="fincas"
                  variant="success"
                />
                
                <StatCard 
                  label="Hectáreas"
                  value={1250}
                  unit="ha"
                  variant="primary"
                />
                
                <StatCard 
                  label="Ganadería"
                  value={850}
                  unit="ha"
                  color="rgb(22, 163, 74)"
                />
                
                <StatCard 
                  label="Cultivos"
                  value={400}
                  unit="ha"
                  variant="warning"
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              All Variants:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Primary"
                  value={1234}
                  variant="primary"
                />
                
                <StatCard 
                  label="Secondary"
                  value={567}
                  variant="secondary"
                />
                
                <StatCard 
                  label="Success"
                  value={890}
                  variant="success"
                />
              </Box>
              
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Warning"
                  value={234}
                  variant="warning"
                />
                
                <StatCard 
                  label="Info"
                  value={456}
                  variant="info"
                />
                
                <StatCard 
                  label="Error"
                  value={78}
                  variant="error"
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Custom Colors:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Purple"
                  value={42}
                  color="rgb(124, 58, 237)"
                />
                
                <StatCard 
                  label="Pink"
                  value={128}
                  color="rgb(236, 72, 153)"
                />
                
                <StatCard 
                  label="Indigo"
                  value={256}
                  color="rgb(99, 102, 241)"
                />
                
                <StatCard 
                  label="Teal"
                  value={512}
                  color="rgb(20, 184, 166)"
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Different Formats:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Large Number"
                  value={1234567}
                  unit="users"
                  variant="primary"
                />
                
                <StatCard 
                  label="Decimal"
                  value={89.5}
                  unit="%"
                  variant="success"
                />
                
                <StatCard 
                  label="Currency"
                  value="$2.5M"
                  variant="secondary"
                />
                
                <StatCard 
                  label="No Unit"
                  value={98}
                  variant="info"
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              No Formatting:
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <StatCard 
                  label="Raw Number"
                  value={1234567}
                  unit="items"
                  formatValue={false}
                  variant="primary"
                />
                
                <StatCard 
                  label="String Value"
                  value="N/A"
                  variant="secondary"
                />
                
                <StatCard 
                  label="Custom Text"
                  value="Active"
                  unit="status"
                  variant="success"
                />
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Stat Card replica exactly the design from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Border radius: 12px, padding: 12px 14px
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Label: 10px, uppercase, letter-spacing 0.08em, weight 500
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Value: 22px, weight 700, baseline alignment with unit
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Unit: 11px, weight 300, color text.secondary
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Shadow: 0 1px 4px rgba(15,31,20,0.04)
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
