'use client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../theme/mui/theme';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
}
