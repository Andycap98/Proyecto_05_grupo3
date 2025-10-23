import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FormJuego from './assets/components/Formulario/FormJuego';

function App() {
  const [count, setCount] = useState(0)
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (estudiante) => {
    setEstudiantes([...estudiantes, estudiante])
  };

  return (
    <Container>

      <FormJuego />

      <h1> Lista de juegos </h1>

    </Container>
  )
}

export default App
