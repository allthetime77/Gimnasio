import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Paises() {
    const [listaPaises, setListaPaises] = useState([]);

    const [codpais, setCodpais] = useState("")
    const [pais, setPais] = useState("")
    const [capital, setCapital] = useState("")
    const [area, setArea] = useState("")
    const [poblacion, setPoblacion] = useState("")
    const [continente, setContinente] = useState("")


    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "paises.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListaPaises(data);
            });
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código de Pais</th>
                        <th>Continente</th>
                        <th>Pais</th>
                        <th>Capital</th>
                        <th>Poblacion</th>
                        <th>Area</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises.map(item =>
                        <tr key={item.idpais}>
                            <td>{item.codpais}</td>
                            <td>{item.continente}</td>
                            <td>{item.pais}</td>
                            <td>{item.capital}</td>
                            <td>{item.poblacion}</td>
                            <td>{item.area}</td>
                            <td><i className="bi bi-pencil" title="Editar"></i></td>
                            <td><i className="bi bi-x-lg" title="Eliminar"></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    };

    const dibujarInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title fs-5" id="exampleModalLabel">Nuevo Pais</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(event) => insertPais(event)}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Codigo del Pais"
                                        required minLength="2" maxLength="15"
                                        value={codpais} onChange={(event) => setCodpais(event.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" placeholder="Area"
                                        required minLength="1" maxLength="20"
                                        value={area} onChange={(event) => setArea(event.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Continente"
                                        required minLength="1" maxLength="20"
                                        value={continente} onChange={(event) => setContinente(event.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Capital"
                                        required minLength="1" maxLength="20"
                                        value={capital} onChange={(event) => setCapital(event.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Pais"
                                        required minLength="1" maxLength="20"
                                        value={pais} onChange={(event) => setPais(event.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <input type="number" className="form-control" placeholder="Poblacion"
                                        required minLength="1" maxLength="20"
                                        value={poblacion} onChange={(event) => setPoblacion(event.target.value)}/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    const insertPais = (event) => {
        event.preventDefault()
        
        const rutaServicio = ApiWebURL + "paisesinsert.php"

        let formData = new FormData()
        formData.append("area", area)
        formData.append("capital", capital)
        formData.append("codpais", codpais)
        formData.append("continente", continente)
        formData.append("pais", pais)
        formData.append("poblacion", poblacion)

        fetch(rutaServicio, {
            method: "POST",
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data)
                leerServicio()
                setArea("")
                setCapital("")
                setCodpais("")
                setPais("")
                setPoblacion("")
                setContinente("")
                document.querySelector("#insertModal .btn-close").click()
            })
    }

    return (
        <section id='paises' className='padded'>
            <div className="container">
                <h2>Paises</h2>
                <div className="mb-3">
                    <button className="btn btn-primary"
                        data-bs-toggle="modal" data-bs-target="#insertModal">Nuevo Pais</button>
                </div>
                {dibujarTabla()}
                {dibujarInsertModal()}
            </div>
        </section>
    );
}

export default Paises;
