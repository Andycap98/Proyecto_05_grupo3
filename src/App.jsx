import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [puntaje, setPuntaje] = useState(0);
  const [posicionEstrella, setPosicionEstrella] = useState({ y: 0, x: 0 });
  const [visible, setVisible] = useState(false);
  const [juegoActivo,setJuegoActivo]=useState (true);
  // Agregar mÃ¡s estados (por ejemplo: mensaje de victoria o estado del juego)
  const [mensaje,setMensaje]=useState ("");
  // FunciÃ³n que genera una posiciÃ³n aleatoria para la estrella
  const posicionAlAzar = () => {
    // Ayuda: usar Math.random() * 80 + 10 para y y x

  };

  // Efecto que controla la apariciÃ³n/desapariciÃ³n de la estrella
  useEffect(() => {
    // TODO: crear un intervalo que muestre la estrella cada cierto tiempo
    

  }, []);

  // funciÃ³n para cuando el jugador atrapa una estrella (incrementar puntaje y ocultar estrella)
  const agarrarEstrella = () => {
    // setPuntaje(puntae + 1);
    // setVisible(false);
  };

  // Efecto que controla si el jugador gana
  useEffect(() => {
    if (puntaje >= 10) {
      setJuegoActivo(false);
      setMensaje("ðŸŒŸ Â¡Ganaste! ðŸŒŸ");
    }
  }, [puntaje]);

  // Reiniciar el juego
  const reiniciarJuego = () => {
    setPuntaje(0);
    setMensaje("");
    setJuegoActivo(true);
    setVisible(false);
  };

  return (
    <div className="contenedor-juego">
      <h1>ðŸŽ® Atrapa las Estrellas ðŸŽ® </h1>
      <p>Puntaje: {puntaje}</p>

      {mensaje && <h2>{mensaje}</h2>}

      {visible && juegoActivo && (
        <div
          className="estrella"
          style={{
            top: `${posicionEstrella.y}%`,
            left: `${posicionEstrella.x}%`,
          }}
          onClick={agarrarEstrella}
        >
          â­
        </div>
      )}

      {/* TODO: agregar un botÃ³n para reiniciar el juego */}
    </div>
  );
}