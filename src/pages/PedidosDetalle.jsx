import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiWebURL } from "../utils";
import nofoto from "./../assets/images/nofoto.jpg";

function PedidosDetalle() {
    const params = useParams();
    console.log(params);

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = `${ApiWebURL}pedidosdetalle.php?idpedido=${params.idpedido}`;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProductos(data);
            });
    };

    return (
        <section className='padded'>
            <div className="container">
                <h2>Detalle del Pedido</h2>
                <div className="row">
                    {productos.map(producto => (
                        <div key={producto.idproducto} className="col-md-4">
                            <div className="card mb-4">
                                <img 
                                    src={producto.imagenchica === null ? nofoto : `${ApiWebURL}/${producto.imagenchica}`} 
                                    className="card-img-top w-50 m-auto" 
                                    alt={producto.nombre} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">
                                        <strong>Detalle: </strong>{producto.detalle}<br />
                                        <strong>Precio: </strong>S/ {parseFloat(producto.precio).toFixed(2)}<br />
                                        <strong>Cantidad: </strong>{producto.cantidad}<br />
                                        <strong>Total: </strong>S/ {(parseFloat(producto.precio) * producto.cantidad).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PedidosDetalle;