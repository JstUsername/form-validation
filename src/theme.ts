import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      primary: string;
    };
  }

  interface ThemeOptions {
    customShadows?: {
      primary?: string;
    };
  }
}

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
  customShadows: {
    primary: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
  },
});

export default theme;
