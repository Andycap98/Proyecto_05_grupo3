import { Container } from "react-bootstrap";
import FormJuego from "./assets/components/Formulario/FormJuego";
import AtraparEstrellas from "./assets/components/AtraparEstrellas/AtraparEstrellas";

function App() {
  return (
    <Container fluid>
      <FormJuego />

      <AtraparEstrellas />

    </Container>
  );
}

export default App;