'use client';

import { useState } from 'react';
import { Card, CardContent, Typography, Stack, Box, Alert } from '@mui/material';
import PortfolioChatInput from '../components/portfolio-chat-input';

export default function PortfolioChatInputDemo() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (value: string) => {
    setMessages(prev => [...prev, value]);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          Chat Input Component
        </Typography>
        
        <Stack spacing={3}>
          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Chat Input from full_dashboard.txt:
            </Typography>
            <Box sx={{ 
              border: `1px solid rgba(0,0,0,0.12)`, 
              borderRadius: 2, 
              height: 200,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
                {messages.length === 0 ? (
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                    Escribe una pregunta para comenzar...
                  </Typography>
                ) : (
                  <Stack spacing={1}>
                    {messages.map((message, index) => (
                      <Alert 
                        key={index} 
                        severity="info" 
                        sx={{ fontSize: '12px' }}
                      >
                        {message}
                      </Alert>
                    ))}
                  </Stack>
                )}
              </Box>
              
              <PortfolioChatInput onPortfolioQuery={handleSubmit} />
            </Box>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Variants:
            </Typography>
            <Stack spacing={2}>
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Default with border top:
                </Typography>
                <PortfolioChatInput 
                  placeholder="Pregunta sobre la cartera..."
                  onPortfolioQuery={(value) => console.log('Default:', value)}
                />
              </Box>
              
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Without border top:
                </Typography>
                <PortfolioChatInput 
                  placeholder="Escribe tu mensaje..."
                  showTopBorder={false}
                  onPortfolioQuery={(value) => console.log('No border:', value)}
                />
              </Box>
              
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Not full width:
                </Typography>
                <Box sx={{ width: '50%' }}>
                  <PortfolioChatInput 
                    placeholder="Input más pequeño..."
                    useFullWidth={false}
                    onPortfolioQuery={(value) => console.log('Small:', value)}
                  />
                </Box>
              </Box>
              
              <Box>
                <Typography variant="caption" color="text.secondary">
                  Disabled state:
                </Typography>
                <PortfolioChatInput 
                  placeholder="Input deshabilitado..."
                  isInputDisabled={true}
                  onPortfolioQuery={(value) => console.log('Disabled:', value)}
                />
              </Box>
            </Stack>
          </Box>

          <Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Custom Examples:
            </Typography>
            <Stack spacing={2}>
              <PortfolioChatInput 
                placeholder="Buscar clientes..."
                onPortfolioQuery={(value) => console.log('Search:', value)}
              />
              
              <PortfolioChatInput 
                placeholder="Escribe tu consulta..."
                onPortfolioQuery={(value) => console.log('Query:', value)}
              />
              
              <PortfolioChatInput 
                placeholder="Enviar mensaje al equipo..."
                onPortfolioQuery={(value) => console.log('Message:', value)}
              />
            </Stack>
          </Box>

          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default', borderRadius: 1 }}>
            <Typography variant="caption" color="text.secondary">
              Chat Input replica exactly the design from full_dashboard.txt
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography variant="caption" color="text.secondary">
                • Container: padding 8px 12px 12px, border-top optional
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Input wrapper: gap 6px, border-radius 8px, padding 4px 6px 4px 10px
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Input field: flex 1, font-size 11px, Poppins family
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Send button: border-radius 6px, padding 4px 10px, font-weight 700
              </Typography>
            </Box>
            <Box sx={{ mt: 0.5 }}>
              <Typography variant="caption" color="text.secondary">
                • Features: Enter key submit, isInputDisabled state, empty validation
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
