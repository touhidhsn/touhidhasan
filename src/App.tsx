import { ThemeProvider, Typography, createTheme } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", cursive',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <h1>Hello World</h1>
        <Button>Click Here Honey</Button>
      </Typography>
    </ThemeProvider>
  );
}

export default App;
