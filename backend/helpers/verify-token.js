const jwt = require('jsonwebtoken')
const getToken = require('./get-token')


//middleware to validade token
const checkToken = (req, res, next) => {

    if(!req.headers.autorization) {
        return res.status(401).json({message: 'Acesso Negado.'})
    }

    const token = getToken(req)
    console.log(token)

    if(!token) {
        return res.status(401).json({message: 'Acesso Negado.'})
    }
    try {
        const verified = jwt.verify(token, 'nossosecret')
        req.user = verified
        next()
    } catch (error) {
        return res.status(400).json({message: 'Token inválido.'})        
    }
}

module.exports = checkToken