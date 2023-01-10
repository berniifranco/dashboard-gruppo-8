import React, {useState, useEffect} from 'react';

function LasUser () {
    const [usuarios, setusuario] = useState([]);
    useEffect(() => {
        fetch('https://grupo-8-rentatruck-lakc.onrender.com/api/usuarios')
            .then(resultado => {return resultado.json()})
            .then(usuarios => {
                let usuarioId = [];
                usuarios.map((usuario) => {
                    return usuarioId.push(usuario.id)
                })
                let ultimoId = Math.max(...usuarioId);
                let ultimoUsuario = usuarios.filter((usuario) => {return usuario.id === ultimoId});
                setusuario(ultimoUsuario);
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetch('https://grupo-8-rentatruck-lakc.onrender.com/api/usuarios')
            .then(resultado => {return resultado.json()})
            .then(usuarios => {
                let usuarioId = [];
                usuarios.map((usuario) => {
                    return usuarioId.push(usuario.id)
                })
                let ultimoId = Math.max(...usuarioId);
                let ultimoUsuario = usuarios.filter((usuario) => {return usuario.id === ultimoId});
                setusuario(ultimoUsuario);
            })
            .catch(err => console.log(err))
    }, [usuarios]);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Ultimo usuario creado</h6>
                </div>
                <div className="card-body">
                    {usuarios.length === 0 && <p>Cargando...</p>}
                    {usuarios.map((usuario, i) => {
                        return (
                            <div key={i}>
                                <h4>{usuario.nombre} {usuario.apellido}</h4>
                                <h5>Email: {usuario.email}</h5>
                                <h5>DNI: {usuario.dni}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LasUser;