'use client';

import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Stack,
  Chip,
  Divider,
  Tooltip
} from '@mui/material';
import FilterDemo from './filter-demo';
import StatusBadgeDemo from './status-badge-demo';
import AlertCardDemo from './alert-card-demo';
import ActionButtonDemo from './action-button-demo';
import ChatInputDemo from './chat-input-demo';
import SectionBlockDemo from './section-block-demo';
import StatCardDemo from './stat-card-demo';
import TabsDemo from './tabs-demo';
import FormStyledDemo from './form-styled-demo';
import CollapseDemo from './collapse-demo';
import AgroButtonShowcase from './AgroButtonShowcase';
import GenericButtonShowcase from './generic-button-showcase';

export default function DesignShowcase() {
  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h1" gutterBottom>
        Design System Showcase
      </Typography>
      
      {/* Color Palette */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Color Palette
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Primary Colors</Typography>
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 60, height: 40, bgcolor: 'primary.50', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'primary.300', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'primary.500', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'primary.700', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'primary.900', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Secondary Colors</Typography>
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 60, height: 40, bgcolor: 'secondary.300', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'secondary.500', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'secondary.700', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Info Colors</Typography>
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 60, height: 40, bgcolor: 'info.50', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'info.300', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'info.500', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'info.700', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Semantic Colors</Typography>
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 60, height: 40, bgcolor: 'success.main', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'warning.main', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'error.main', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
                <Box sx={{ width: 60, height: 40, bgcolor: 'info.main', border: 1, borderColor: 'rgb(225, 232, 231)' }} />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Typography */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Typography
          </Typography>
          <Stack spacing={2}>
            <Typography variant="h1">Heading 1 - Dashboard Title</Typography>
            <Typography variant="h2">Heading 2 - Section Title</Typography>
            <Typography variant="h3">Heading 3 - Card Title</Typography>
            <Typography variant="body1">Body text - Regular content with normal weight and proper line height.</Typography>
            <Typography variant="body2">Body 2 text - Secondary information with smaller size.</Typography>
            <Typography variant="caption">Caption text - Small text for labels and metadata.</Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Buttons
          </Typography>
          <Stack spacing={2} direction="row" alignItems="center">
            <Button variant="contained">Contained Primary</Button>
            <Button variant="outlined">Outlined Secondary</Button>
            <Button variant="text">Text Button</Button>
            <Button variant="contained" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" color="warning">Warning</Button>
            <Button variant="contained" color="error">Error</Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Components */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Components
          </Typography>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Chips</Typography>
              <Stack direction="row" spacing={1}>
                <Chip label="Active" color="success" size="small" />
                <Chip label="Pending" color="warning" size="small" />
                <Chip label="Inactive" color="error" size="small" />
                <Chip label="Info" color="info" size="small" />
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Tooltip</Typography>
              <Stack direction="row" spacing={2}>
                <Tooltip title="This is a helpful tooltip">
                  <Button variant="outlined">Hover me</Button>
                </Tooltip>
              </Stack>
            </Box>
            
            <Divider />
            
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>Card Examples</Typography>
              <Stack direction="row" spacing={2}>
                <Card sx={{ flex: 1, p: 2 }}>
                  <Typography variant="h3" sx={{ mb: 1 }}>Statistics</Typography>
                  <Typography variant="h2" color="primary.main">1,234</Typography>
                  <Typography variant="body2" color="text.secondary">Total items</Typography>
                </Card>
                <Card sx={{ flex: 1, p: 2 }}>
                  <Typography variant="h3" sx={{ mb: 1 }}>Performance</Typography>
                  <Typography variant="h2" color="success.main">98.5%</Typography>
                  <Typography variant="body2" color="text.secondary">Efficiency rate</Typography>
                </Card>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Filter Button Component */}
      <FilterDemo />

      {/* Status Badge Component */}
      <StatusBadgeDemo />

      {/* Alert Card Component */}
      <AlertCardDemo />

      {/* Action Button Component */}
      <ActionButtonDemo />

      {/* Chat Input Component */}
      <ChatInputDemo />

      {/* Section Block Component */}
      <SectionBlockDemo />

      {/* Stat Card Component */}
      <StatCardDemo />

      {/* Tabs Component */}
      <TabsDemo />

      {/* Styled Form Components */}
      <FormStyledDemo />

      {/* Collapse Component */}
      <CollapseDemo />

      {/* Spacing & Layout */}
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Spacing & Layout
          </Typography>
          <Stack spacing={2}>
            <Box sx={{ 
              display: 'flex', 
              gap: 1, 
              p: 2, 
              bgcolor: '#ffffff', 
              borderRadius: 1 
            }}>
              <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main', borderRadius: 1 }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'secondary.main', borderRadius: 1 }} />
              <Box sx={{ width: 40, height: 40, bgcolor: 'info.main', borderRadius: 1 }} />
            </Box>
            <Typography variant="caption">
              Demonstrating consistent spacing (gap: 1) and border radius
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* AgroButtonShowcase */}
      <AgroButtonShowcase />

      {/* GenericButtonShowcase */}
      <GenericButtonShowcase />
    </Box>
  );
}
