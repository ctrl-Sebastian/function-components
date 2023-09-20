import './App.css';
import { Container, Typography } from '@mui/material';
import FormSignUp from './components/FormSignUp';

function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant='h3' align='center'>Formulario</Typography>
      <FormSignUp />
    </Container>
  );
}

export default App;
