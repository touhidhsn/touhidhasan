'use client';

import {
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", cursive',
  },
  palette: {
    mode: 'dark',
  },
});

const Providers = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <body>{children}</body>
    </ThemeProvider>
  );
};

export default Providers;
