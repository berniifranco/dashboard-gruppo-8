import React, {useState, useEffect} from 'react';

function Categories () {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        fetch('https://grupo-8-rentatruck-lakc.onrender.com/api/categoriasVehiculo')
            .then(resultado => {return resultado.json()})
            .then(categorias => {
                setCategorias(categorias)
            })
            .catch(err => console.log(err))
    }, []);
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categorías</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                    {categorias.length === 0 && 'Cargando...'}
                        {categorias.map((categoria, i) => {
                            return (
                                <div className="col-lg-6 mb-4" key={i}>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">
                                            {categoria.nombre} - Cantidad: {categoria.vehiculo.length}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;