import {
  CssBaseline,
  Switch,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import './App.css';

import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [colorMode, setColorMode] = useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: '"Fira Code", cursive',
    },
    palette: {
      mode: colorMode ? 'dark' : 'light',
    },
  });

  const handleChange = () => {
    colorMode === true ? setColorMode(false) : setColorMode(true);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography>
          <CssBaseline />
          <h1>Hello World</h1>
          <Button>Click Here Honey</Button>
          <Switch
            checked={colorMode}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Typography>
      </ThemeProvider>
    </>
  );
}

export default App;
