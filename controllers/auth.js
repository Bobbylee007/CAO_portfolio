const register = (req, res) =>{
    res.send('create User')
}

const login = (req, res) =>{
    res.send('loging User')
}

module.exports = {
    register,
    login,
}