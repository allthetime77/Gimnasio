import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"

function Seleccionados() {
    const [listaItems, setListaItems] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        try {
            const datosEmpleados = JSON.parse(sessionStorage.getItem("empleados"))
            setListaItems(datosEmpleados)
            console.log(datosEmpleados)
        } catch (error) {
            console.log(error)
        }

    }
    const calcularFecha = (fecha) => {
        const hoy = new Date()
        const fechaCont = new Date(fecha)
        let formatoFecha = hoy.getFullYear() - fechaCont.getFullYear()
        const mes = hoy.getMonth() - fechaCont.getMonth()
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaCont.getDate())) {
            formatoFecha--
        }
        return formatoFecha
    }


    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre Completo</th>
                        <th className="text-end">Cargo</th>
                        <th className="text-end">Direccion</th>
                        <th className="text-end">Telefono</th>
                        <th className="text-end">Tiempo en la Empresa</th>
                        <th className="text-end">Edad</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems !== null
                        ? listaItems.map(item =>
                            <tr key={item.idempleado}>
                                <td>
                                    <img style={{width:'120px'}} src={ApiWebURL+"fotos/"+item.foto} alt="" />
                                </td>
                                <td className="text-end">{item.tratamiento+" "+item.nombres+" "+item.apellidos}</td>
                                <td className="text-end">{item.cargo}</td>
                                <td className="text-end">{item.pais+", "+item.ciudad+", "+item.direccion}</td>
                                <td className="text-end">{item.telefono}</td>
                                <td className="text-end">{calcularFecha(item.fechacontratacion)} años</td>
                                <td className="text-end">{calcularFecha(item.fechanacimiento)} años</td>
                                <td className="text-center"><i className="bi bi-x-lg icono-eliminar" title="Eliminar"
                                    onClick={() => eliminarItem(item)}></i></td>
                            </tr>
                        )
                        : <div className="alert alert-warning" role="alert">
                            No ha seleccionado empleados
                        </div>
                    }
                </tbody>
            </table>
        )
    }

    const eliminarItem = (item) => {
        let empleadosMenos = listaItems.filter(itemCart => itemCart.idempleado !== item.idempleado)
        setListaItems(empleadosMenos)
        sessionStorage.setItem("empleados", JSON.stringify(directoresMenos))
    }

    const vaciar = () => {
        setListaItems([])
        sessionStorage.removeItem("empleados")
    }

    return (
        <section className='padded'>
            <div className="container">
                <h2>Seleccion Directores</h2>
                {dibujarTabla()}
                <button className="btn btn-danger"
                    onClick={() => vaciar()}>Vaciar</button>
            </div>
        </section>
    )
}

export default Seleccionados