'use client';

import React, { useState } from "react";
import { Box, Typography, Stack, Paper, Divider } from "@mui/material";
import AgroButton from "../components/AgroButton";

const AgroButtonShowcase: React.FC = () => {
  const [toggleMode, setToggleMode] = useState("consultas");
  const [activeTab, setActiveTab] = useState("general");

  return (
    <Box sx={{ p: 5, bgcolor: '#ffffff', minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: 'rgb(15, 31, 20)' }}>
        Agroclimatica MUI Button Showcase
      </Typography>

      <Stack spacing={4} sx={{ maxWidth: 800 }}>
        
        {/* PRIMARY & GHOST */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: 'rgb(225, 232, 231)' }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'rgb(122, 158, 142)', fontWeight: 600 }}>
            Primary & Action Buttons
          </Typography>
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <AgroButton onClick={() => console.log("Primary Clicked")}>
              Enviar Mensaje ↑
            </AgroButton>
            
            <AgroButton variant="success">
              ↗ Ficha
            </AgroButton>

            <AgroButton variant="secondary" icon="→">
              Ver ficha completa
            </AgroButton>
          </Stack>
        </Paper>

        {/* WARNING / ALERT */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: 'rgb(225, 232, 231)' }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'rgb(122, 158, 142)', fontWeight: 600 }}>
            Alert & Warning
          </Typography>
          <Stack spacing={1.5}>
            <AgroButton 
              variant="warning" 
              icon="⚠" 
              badge={15} 
              fullWidth 
              onClick={() => console.log("Warning Action")}
            >
              Ver fincas en mora
            </AgroButton>
            
            <AgroButton 
              variant="warning" 
              icon="⚠" 
              badge={8} 
              fullWidth 
              onClick={() => console.log("Risk Action")}
              title="Haz clic para ver detalles del riesgo"
            >
              Ver fincas de alto riesgo
            </AgroButton>
          </Stack>
        </Paper>

        {/* TABS & TOGGLES */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: 'rgb(225, 232, 231)' }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'rgb(122, 158, 142)', fontWeight: 600 }}>
            Tabs & Toggles
          </Typography>
          
          <Box sx={{ borderBottom: "1px solid", borderColor: 'rgb(225, 232, 231)', mb: 2.5, display: "flex" }}>
            {["general", "clima", "suelo"].map(tab => (
              <AgroButton 
                key={tab} 
                variant="tab" 
                active={activeTab === tab} 
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
              </AgroButton>
            ))}
          </Box>

          <Box sx={{ 
            display: "inline-flex", 
            bgcolor: '#ffffff', 
            border: "1px solid", 
            borderColor: 'rgb(225, 232, 231)',
            p: '3px', 
            borderRadius: 2,
            gap: '2px'
          }}>
            <AgroButton variant="toggle" active={toggleMode === "consultas"} onClick={() => setToggleMode("consultas")}>
              Consultas
            </AgroButton>
            <AgroButton variant="toggle" active={toggleMode === "monto"} onClick={() => setToggleMode("monto")}>
              Monto
            </AgroButton>
          </Box>
        </Paper>

        {/* UTILITY */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3, border: "1px solid", borderColor: 'rgb(225, 232, 231)' }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 2, color: 'rgb(122, 158, 142)', fontWeight: 600 }}>
            Utility
          </Typography>
          <Stack spacing={2} divider={<Divider />}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" sx={{ fontSize: 12 }}>Cerrar Panel Lateral</Typography>
              <AgroButton variant="close" onClick={() => console.log("Closed")} title="Cerrar x" />
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" sx={{ fontSize: 12 }}>Acción Fantasma</Typography>
              <AgroButton variant="ghost">Ghost Button</AgroButton>
            </Stack>
          </Stack>
        </Paper>

      </Stack>
    </Box>
  );
};

export default AgroButtonShowcase;
