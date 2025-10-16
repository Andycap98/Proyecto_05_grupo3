import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import EstudiantesForm from './assets/components/Formulario/EstudiantesForm'


function App() {
  const [count, setCount] = useState(0)
  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (estudiante) => {
  setEstudiantes([...estudiantes, estudiante])
  };

  return (
    <Container>
      <h1>Formulario de Estudiantes</h1>
      <EstudiantesForm/>
    </Container>
  )
}

export default App
