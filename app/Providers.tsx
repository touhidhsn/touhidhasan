'use client';

import { ThemeProvider, Typography, createTheme } from '@mui/material';
import { NextFont } from 'next/dist/compiled/@next/font';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fontName: NextFont;
}

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", cursive',
  },
});

const Providers = ({ children, fontName }: Props) => {
  return (
    <ThemeProvider className-={fontName} theme={theme}>
      <Typography>{children}</Typography>
    </ThemeProvider>
  );
};

export default Providers;
