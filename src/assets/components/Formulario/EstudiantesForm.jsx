import { useState, useEffect, useCallback } from "react";
//import { ModificarJuego } from "./ModificarJuegos";
//import { BuscarJuego } from "./BuscarJuego";

function EstudiantesForm() {
    const [estudiantes, setEstudiantes] = useState([]);

    const [formulario, setFormulario] = useState({
        id: '',
        nombre: '',
        apellido: '',
        edad: '',
        estado: true,
        modificado: true,
    });

    // tal vez llamar a la BD para cargar los juegos ya almacenados 
    useEffect(() => {
        console.log(estudiantes)
    }, [estudiantes]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value,
        })
    };

    const agregarEstudiante = (e) => {
        e.preventDefault()
        const nuevoEstudiante = {
            ...formulario,
            id: Date.now(),
            nombre: formulario.nombre,
            apellido: formulario.apellido,
            edad: formulario.edad,
        }
        setEstudiantes([...estudiantes, nuevoEstudiante]);
        setFormulario({
            id: '',
            nombre: '',
            apellido: '',
            edad: '',
            estado: true,
            modificado: true,
        })
    };

    /***const agregar_modificado = (juego_modificado) => {
        const nuevo_arreglo = juegos.map((juego) => {
            if (juego.id === juego_modificado.id) {
                return juego_modificado;
            }
            return juego;
        }
        )
        setJuegos(nuevo_arreglo);
    };*/

    /***const modificar = useCallback((juego) => {
        setJuegos(prevJuegos => prevJuegos.map(a =>
            a.id === juego.id ? { ...a, modificado: !a.modificado } : a
        ));
    }, []);*/


    return (
        <div className="container mt-4">
            <div className="card shadow mb-5 mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0"> Agregar Nuevo Estudiante</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={agregarEstudiante}>
                        <div className="mb-3">
                            <label htmlFor="nombreInput" className="form-label">Nombre</label>
                            <input
                                id="nombreInput"
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="apellidoInput" className="form-label">Apellido</label>
                            <input
                                id="apellidoInput"
                                type="text"
                                name="apellido"
                                placeholder="Apellido"
                                value={formulario.apellido}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="edadInput" className="form-label">Edad</label>
                            <input
                                id="edadInput"
                                type="number"
                                name="edad"
                                placeholder="Edad"
                                value={formulario.edad}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 mt-2">
                            Agregar Estudiante
                        </button>
                    </form>
                </div>
            </div>

            {estudiantes.length > 0 && <h2 className="mb-4 text-center">📚 Lista de Estudiantes</h2>}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {estudiantes.map(estudiante => (
                    <div key={estudiante.id} className="col">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">

                                {estudiante.modificado === false ? (
                                    <ModificarJuego juego={estudiante} funcion_modificar={agregar_modificado}></ModificarJuego>
                                ) : (
                                    <div>
                                        <h5 className="card-title text-primary">
                                            {estudiante.nombre} {estudiante.apellido}
                                        </h5>
                                        <h6 className="card-subtitle mb-2 text-muted">ID: {estudiante.id}</h6>
                                        <p className="card-text mb-1">
                                            **Edad:** {estudiante.edad} años
                                        </p>
                                        <hr />
                                        <button
                                            onClick={() => modificar(estudiante)}
                                            className="btn btn-sm btn-outline-warning w-100"
                                        >
                                            Modificar
                                        </button>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*<BuscarEstudiantes juego={estudiantes} > Texto </BuscarEstudiantes>*/}
        </div>
    )
};


export default EstudiantesForm;