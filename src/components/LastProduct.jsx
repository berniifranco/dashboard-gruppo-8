import React, {useState, useEffect} from 'react';

function LastProduct () {
    const [vehiculos, setVehiculos] = useState([]);
    useEffect(() => {
        fetch('https://grupo-8-rentatruck-lakc.onrender.com/api/products')
            .then(resultado => {return resultado.json()})
            .then(vehiculoss => {
                let camionId = [];
                vehiculoss.map((camion) => {
                    return camionId.push(camion.id)
                })
                let ultimoId = Math.max(...camionId);
                let ultimoVehiculo = vehiculoss.filter((camion) => {return camion.id === ultimoId});
                setVehiculos(ultimoVehiculo);
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo vehículo creado</h6>
                </div>
                <div className="card-body">
                    {vehiculos.length === 0 && <p>Cargando...</p>}
                    {vehiculos.map((vehiculo, i) => {
                        return (
                            <div key={i}>
                                <h4>{vehiculo.marcas.nombre} {vehiculo.modelo}</h4>
                                <h5>Patente: {vehiculo.patente.toUpperCase()}</h5>
                                <h5>Fecha de creación: {Date(Date.parse(vehiculo.fecha_creacion))}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LastProduct;