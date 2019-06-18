const jwt = require('jsonwebtoken');

// ================================
// Verificar token
// ================================

//next = continuar con nuestro programa
let verificaToken = (req, res, next) => {

    let token = req.get('token'); //con req.get obtengo los headers.

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
}

// ================================
// Verificar ADMIN_ROLE
// ================================

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === "ADMIN_ROLE") {
        next();
    } else {
        res.json({
            ok: false,
            err: {
                message: 'Usuario no es Administrador'
            }
        });
    }

}


module.exports = { verificaToken, verificaAdminRole }