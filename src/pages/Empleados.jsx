import { useEffect, useState } from "react"
import { ApiWebURL, agregarEmpleado } from "../utils"

function Empleados() {

    const [listaEmpleados, setListaEmpleados] = useState([])
    const [seleccion, setSeleccion] = useState({})


    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "empleados.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaEmpleados(data)
            })
    }

    const dibujarVistaRapidaModal = () => {
        console.log(seleccion)
        return (
            <div className="modal fade" id="vistaRapidaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id="exampleModalLabel">{seleccion.nombres+" "+seleccion.apellidos}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={seleccion.foto === null
                                        ? nofoto
                                        : ApiWebURL + "fotos/" +seleccion.foto}
                                        className="img-fluid" alt={seleccion.nombres} />
                                </div>
                                <div className="col">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Nombre Completo</th>
                                                <td>{seleccion.nombres+" "+ seleccion.apellidos}</td>
                                            </tr>
                                            <tr>
                                                <th>Cargo</th>
                                                <td>{seleccion.cargo}</td>
                                            </tr>
                                            <tr>
                                                <th>Pais</th>
                                                <td>{seleccion.pais}</td>
                                            </tr>
                                            <tr>
                                                <th>Ciudad</th>
                                                <td>{seleccion.ciudad}</td>
                                            </tr>
                                            <tr>
                                                <th>Codigo Postal</th>
                                                <td>{seleccion.codigopostal}</td>
                                            </tr>
                                            <tr>
                                                <th>Direccion</th>
                                                <td>{seleccion.direccion}</td>
                                            </tr>
                                            <tr>
                                                <th>Telefono</th>
                                                <td>{seleccion.telefono}</td>
                                            </tr>
                                            <tr>
                                                <th>Fecha de nacimiento</th>
                                                <td>{seleccion.fechanacimiento}</td>
                                            </tr>
                                            <tr>
                                                <th>Fecha contratacion</th>
                                                <td>{seleccion.fechacontratacion}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => {
                                    agregarEmpleado(seleccion)
                                }}
                            >Agregar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4">

            {listaEmpleados.map(item =>
                <div onClick={() => setSeleccion(item)}
                data-bs-toggle="modal" data-bs-target="#vistaRapidaModal" className="col"  key={item.idempleado}>
                    <div className="card">
                        <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt={item.nombres} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                            <p className="card-text">{item.cargo}</p>
                        </div>
                    </div>
                </div>
            )}

            </div>
        )
    }

    return (
        <section id='empleados' className='padded'>
            <div className="container">
                <h2>Empleados</h2>
                {dibujarCuadricula()}
                {dibujarVistaRapidaModal()}
            </div>
        </section>
    )
}

export default Empleados