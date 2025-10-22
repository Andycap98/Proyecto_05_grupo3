import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import EstudiantesForm from './assets/components/Formulario/EstudiantesForm'
import AtraparEstrellas from './assets/components/AtraparEstrellas/AtraparEstrellas'


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
      <AtraparEstrellas/>
    </Container>
  )
}

export default App
