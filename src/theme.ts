import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      light: 'rgba(33, 150, 243, 0.04)',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    h6: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '175%',
      letterSpacing: '0.15px',
    },
    button: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.4px',
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      letterSpacing: '0.4px',
    },
  },
});

export default theme;
