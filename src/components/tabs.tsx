'use client';

import { Tabs as MuiTabs, Tab as MuiTab, useTheme } from '@mui/material';

interface TabItem {
  id: string;
  label: string;
  disabled?: boolean;
}

interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  fullWidth?: boolean;
}

export default function Tabs({ 
  tabs, 
  activeTab, 
  onTabChange, 
  fullWidth = true 
}: TabsProps) {
  const theme = useTheme();

  return (
    <MuiTabs
      value={activeTab}
      onChange={(e, newValue) => onTabChange(newValue)}
      variant="scrollable"
      scrollButtons={false}
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        overflowX: 'auto',
        flex: fullWidth ? '1 1 0%' : 'unset',
        minWidth: 0,
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari, Edge
        },
        '& .MuiTabs-indicator': {
          display: 'none', // Hide default indicator
        },
        '& .MuiTabs-flexContainer': {
          alignItems: 'stretch',
        },
      }}
    >
      {tabs.map((tab) => (
        <MuiTab
          key={tab.id}
          value={tab.id}
          label={tab.label}
          disabled={tab.disabled}
          sx={{
            padding: '0 16px',
            borderTop: 'none',
            borderRight: 'none',
            borderBottom: `2px solid ${tab.id === activeTab ? '#16a34a' : 'transparent'}`,
            borderLeft: 'none',
            borderImage: 'initial',
            cursor: tab.disabled ? 'not-allowed' : 'pointer',
            background: 'transparent',
            color: tab.id === activeTab ? '#16a34a' : 'rgb(15, 31, 20)',
            fontSize: '10px',
                        fontWeight: tab.id === activeTab ? 600 : 400,
            whiteSpace: 'nowrap',
            transition: 'color 0.15s',
            position: 'relative',
            flexShrink: 0,
            opacity: tab.disabled ? 0.5 : 1,
            textTransform: 'none', // Override MUI default uppercase
            minHeight: 'auto', // Override MUI default min height
            '&:hover': {
              color: tab.disabled 
                ? 'rgb(122, 158, 142)' 
                : tab.id === activeTab 
                  ? '#166534' 
                  : 'rgb(15, 31, 20)',
            },
            '&.Mui-selected': {
              color: '#16a34a',
            },
            '&.Mui-disabled': {
              opacity: 0.5,
              cursor: 'not-allowed',
            },
          }}
        />
      ))}
    </MuiTabs>
  );
}
