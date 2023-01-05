import React, {useState, useEffect} from 'react';

function ProductList () {
    const [vehiculos, setVehiculos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3005/api/products')
            .then(resultado => {return resultado.json()})
            .then(vehiculoss => {
                setVehiculos(vehiculoss)
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Listado de vehículos</h6>
                </div>
                <div className="card-body">
                    {vehiculos.length === 0 && <p>Cargando...</p>}
                    {vehiculos.map((vehiculo, i) => {
                        return (
                            <div key={i}>
                                <ul>
                                    <li>{vehiculo.marcas.nombre} {vehiculo.modelo}</li>
                                    <ul>
                                        <li>Patente: {vehiculo.patente.toUpperCase()}</li>
                                        <li>Precio/Km: $ {vehiculo.precio_km}</li>
                                        <li>Tipo de mercadería: {vehiculo.tipo_mercaderia.nombre}</li>
                                    </ul>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductList;