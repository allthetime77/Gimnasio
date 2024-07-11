import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import { Link } from "react-router-dom"

function Pedidos() {

    const [listaPedidos, setListaPedidos] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "pedidos.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaPedidos(data)
            })
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPedidos.map(item =>
                        <tr key={item.idpedido}>
                            <td>{item.idpedido}</td>
                            <td>{item.usuario}</td>
                            <td>{item.nombres}</td>
                            <td>{item.fechapedido}</td>
                            <td>S/.{item.total}</td>
                            <td>
                                <Link to={`/pedidodetalle/${item.idpedido}`}>
                                Ver mas
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    return (
        <section id='pedidos' className='padded'>
            <div className="container">
                <h2>Proveedores</h2>
                {dibujarTabla()}
            </div>
        </section>
    )
}

export default Pedidos