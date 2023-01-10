import React, {useState, useEffect} from 'react';

function AmmountInProducts () {

    const [marcas, setMarcas] = useState([]);
    useEffect(() => {
        fetch('https://grupo-8-rentatruck-lakc.onrender.com/api/marcasCantidad')
            .then(resultado => {return resultado.json()})
            .then(marcas => {
                setMarcas(marcas);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="col-md-4 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad de Marcas </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{marcas.length === 0 && 'Cargando...'}{marcas}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AmmountInProducts;