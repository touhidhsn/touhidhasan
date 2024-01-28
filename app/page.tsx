import { Box, Button, Paper, Switch, Typography } from '@mui/material';

export default function Home() {
  return (
    <Paper>
      <Typography variant='h4' color={''}>
        Mohammad Touhid Hasan
      </Typography>
      <Button variant={'outlined'}>Hello world</Button>
      <Switch
        // checked={checked}
        // onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Paper>
  );
}
