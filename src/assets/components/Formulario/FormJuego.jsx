import { useState, useEffect, useCallback } from "react";
//import { ModificarJuego } from "./ModificarJuegos";
//import { BuscarJuego } from "./BuscarJuego";

function FormJuegos() {
    const [juegos, setJuegos] = useState([]);

    const [formulario, setFormulario] = useState({
        id: '',
        nombre: '',
        precio: '',
        tipo: '',
        estado: true,
        modificado: true,
    });

    // tal vez llamar a la BD para cargar los juegos ya almacenados 
    useEffect(() => {
        console.log(juegos)
    }, [juegos]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value,
        })
    };

    const agregarJuego = (e) => {
        e.preventDefault()
        const nuevoJuego = {
            ...formulario,
            id: Date.now(),
            nombre: formulario.nombre,
            precio: parseFloat(formulario.precio),
            tipo: formulario.tipo,
        }
        setJuegos([...juegos, nuevoJuego]);
        setFormulario({
            id: '',
            nombre: '',
            precio: '',
            tipo: '',
            estado: true,
            modificado: true,
        })
    };

    const agregar_modificado = (juego_modificado) => {
        const nuevo_arreglo = juegos.map((juego) => {
            if (juego.id === juego_modificado.id) {
                return juego_modificado;
            }
            return juego;
        }
        )
        setJuegos(nuevo_arreglo);
    };

    const modificar = useCallback((juego) => {
        setJuegos(prevJuegos => prevJuegos.map(a =>
            a.id === juego.id ? { ...a, modificado: !a.modificado } : a
        ));
    }, []);

    /*** const modificar = useCallback ((prod) => {
    setProductos(productos.map(a =>
    a.id === prod.id ? { ...a, modificado: !a.modificado } : a
    ));
    },[productos]);*/

    return (
        <>
            <form onSubmit={agregarJuego}>
                <input type="text" name="nombre"
                    placeholder="Nombre" value={formulario.nombre} onChange={handleChange} requiered />
                <input type="text" name="precio"
                    placeholder="Precio Unitario" value={formulario.precio} onChange={handleChange} requiered />
                <input type="text" name="tipo"
                    placeholder="Tipo" value={formulario.tipo} onChange={handleChange} requiered />

                <button type="submit">Agregar Juego</button>
            </form>

            {juegos.length > 0 && <h2> Lista de Juegos</h2>}
            <ul>
                {juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.modificado === false ? (
                            <ModificarJuego juego={juego} funcion_modificar={agregar_modificado}></ModificarJuego>
                        ) : (
                            <div>
                                ID: {juego.id}
                                Nombre: {juego.nombre}
                                Precio: ${juego.precio}
                                Tipo: {juego.tipo}
                            </div>
                        )}

                        <button onClick={() => modificar(juego)}> Modificar </button>
                    </li>
                ))}
            </ul>
            {/*<BuscarJuego juego={juegos} > Texto </BuscarJuego>*/}       </>
    )
}


export default FormJuegos;