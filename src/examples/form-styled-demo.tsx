'use client';

import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Stack, 
  Box, 
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Divider,
  useTheme
} from '@mui/material';

export default function FormStyledDemo() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    desde: '2024-01-01',
    hasta: '2024-12-31',
    region: '',
    sucursal: '',
    agente: '',
    estado: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Estilos personalizados para inputs y selects
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff',
      border: '1px solid rgb(225, 232, 231)',
      borderRadius: '8px',
      padding: '6px 10px',
      color: 'rgb(15, 31, 20)',
      fontSize: 'var(--font-size-base)',
            outline: 'none',
      cursor: 'text',
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
      '& input': {
        padding: 0,
        fontSize: 'var(--font-size-base)',
                color: 'rgb(15, 31, 20)',
        '&::placeholder': {
          color: 'rgb(122, 158, 142)',
          opacity: 0.7,
        },
      },
    },
  };

  const selectSx = {
    backgroundColor: '#ffffff',
    border: '1px solid rgb(225, 232, 231)',
    borderRadius: '8px',
    padding: '6px 10px',
    color: 'rgb(15, 31, 20)',
    fontSize: 'var(--font-size-base)',
        outline: 'none',
    cursor: 'pointer',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-select': {
      padding: 0,
      fontSize: 'var(--font-size-base)',
            color: 'rgb(15, 31, 20)',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '16px',
      color: 'rgb(122, 158, 142)',
    },
  };

  const labelSx = {
    color: 'rgb(122, 158, 142)',
    fontSize: 'var(--font-size-sm)',
        fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    marginBottom: '3px',
  };

  const sectionTitleSx = {
    fontSize: 'var(--font-size-sm)',
    fontWeight: 700,
        color: 'rgb(122, 158, 142)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '8px',
  };

  const regionOptions = [
    { value: '', label: 'Todas' },
    { value: 'cajamarca', label: 'Cajamarca' },
    { value: 'libertad', label: 'La Libertad' },
    { value: 'lambayeque', label: 'Lambayeque' },
    { value: 'piura', label: 'Piura' },
  ];

  const sucursalOptions = [
    { value: '', label: 'Todas' },
    { value: 'cajamarca-cajamarca', label: 'Cajamarca, Cajamarca' },
    { value: 'chiclayo-lambayeque', label: 'Chiclayo, Lambayeque' },
    { value: 'piura-piura', label: 'Piura, Piura' },
    { value: 'trujillo-libertad', label: 'Trujillo, La Libertad' },
  ];

  const estadoOptions = [
    { value: '', label: 'Todos' },
    { value: 'aprobado', label: 'Aprobado' },
    { value: 'pendiente', label: 'Pendiente' },
  ];

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Styled Form Components (using MUI components)
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Complete Form (from your example using MUI components):
            </Typography>
            <Box sx={{ 
              border: `1px solid rgba(0,0,0,0.12)`, 
              borderRadius: 2, 
              height: 500,
              overflow: 'hidden'
            }}>
              <Box
                sx={{
                  flex: '1 1 0%',
                  overflowY: 'auto',
                  padding: '20px 20px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {/* Período Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Typography sx={sectionTitleSx}>Período</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <Typography sx={labelSx}>Desde</Typography>
                      <TextField
                        type="date"
                        value={formData.desde}
                        onChange={(e) => handleInputChange('desde', e.target.value)}
                        sx={inputSx}
                        fullWidth
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <Typography sx={labelSx}>Hasta</Typography>
                      <TextField
                        type="date"
                        value={formData.hasta}
                        onChange={(e) => handleInputChange('hasta', e.target.value)}
                        sx={inputSx}
                        fullWidth
                      />
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ height: '1px', background: 'rgb(225, 232, 231)' }} />

                {/* Territorio Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Typography sx={sectionTitleSx}>Territorio</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <Typography sx={labelSx}>Región</Typography>
                      <FormControl fullWidth>
                        <Select
                          value={formData.region}
                          onChange={(e) => handleInputChange('region', e.target.value)}
                          displayEmpty
                          sx={selectSx}
                        >
                          {regionOptions.map((option) => (
                            <MenuItem 
                              key={option.value} 
                              value={option.value}
                              sx={{
                                fontSize: 'var(--font-size-base)',
                                                                color: 'rgb(15, 31, 20)',
                              }}
                            >
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <Typography sx={labelSx}>Sucursal</Typography>
                      <FormControl fullWidth>
                        <Select
                          value={formData.sucursal}
                          onChange={(e) => handleInputChange('sucursal', e.target.value)}
                          displayEmpty
                          sx={selectSx}
                        >
                          {sucursalOptions.map((option) => (
                            <MenuItem 
                              key={option.value} 
                              value={option.value}
                              sx={{
                                fontSize: 'var(--font-size-base)',
                                                                color: 'rgb(15, 31, 20)',
                              }}
                            >
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ height: '1px', background: 'rgb(225, 232, 231)' }} />

                {/* Agente Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Typography sx={sectionTitleSx}>Agente</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <Typography sx={labelSx}>Nombre</Typography>
                    <TextField
                      placeholder="Nombre del agente"
                      value={formData.agente}
                      onChange={(e) => handleInputChange('agente', e.target.value)}
                      sx={inputSx}
                      fullWidth
                    />
                  </Box>
                </Box>

                <Divider sx={{ height: '1px', background: 'rgb(225, 232, 231)' }} />

                {/* Estado Solicitud Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Typography sx={sectionTitleSx}>Estado Solicitud</Typography>
                  <FormControl fullWidth>
                    <Select
                      value={formData.estado}
                      onChange={(e) => handleInputChange('estado', e.target.value)}
                      displayEmpty
                      sx={selectSx}
                    >
                      {estadoOptions.map((option) => (
                        <MenuItem 
                          key={option.value} 
                          value={option.value}
                          sx={{
                            fontSize: 'var(--font-size-base)',
                                                        color: 'rgb(15, 31, 20)',
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Divider sx={{ height: '1px', background: 'rgb(225, 232, 231)' }} />

                {/* Tablero Section */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Typography sx={sectionTitleSx}>Tablero</Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      background: 'transparent',
                      border: `1px solid rgba(22, 163, 74)`,
                      borderRadius: '8px',
                      padding: '9px 0',
                      cursor: 'pointer',
                      color: 'rgb(22, 163, 74)',
                      fontSize: 'var(--font-size-md)',
                                            fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': {
                        background: 'rgba(22, 163, 74, 0.04)',
                        borderColor: 'rgb(22, 163, 74)',
                      },
                    }}
                  >
                    Configurar Tablero
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Reusable Styles for MUI Components:
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Input Styles (sx prop):
              </Typography>
              <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                <pre style={{ fontSize: '12px', overflow: 'auto' }}>
{`const inputSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.background.paper,
    border: \`1px solid \${theme.palette.divider}\`,
    borderRadius: '8px',
    padding: '6px 10px',
    fontSize: 'var(--font-size-base)',
        '& fieldset': { border: 'none' },
    '& input': { padding: 0 },
  },
};

<TextField sx={inputSx} />`}
                </pre>
              </Box>

              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Select Styles (sx prop):
              </Typography>
              <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                <pre style={{ fontSize: '12px', overflow: 'auto' }}>
{`const selectSx = {
  backgroundColor: theme.palette.background.paper,
  border: \`1px solid \${theme.palette.divider}\`,
  borderRadius: '8px',
  fontSize: 'var(--font-size-base)',
  '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
};

<Select sx={selectSx} />`}
                </pre>
              </Box>

              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Label Styles:
              </Typography>
              <Box sx={{ p: 2, bgcolor: '#ffffff', borderRadius: 1 }}>
                <pre style={{ fontSize: '12px', overflow: 'auto' }}>
{`const labelSx = {
  color: 'rgb(122, 158, 142)',
  fontSize: 'var(--font-size-sm)',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

<Typography sx={labelSx}>Label</Typography>`}
                </pre>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Using native MUI components with custom styles
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • TextField, Select, FormControl from MUI
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Custom sx props override default MUI styles
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Reusable style objects for consistency
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Theme integration for colors and typography
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
