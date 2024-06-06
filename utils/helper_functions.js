const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const encryptPassword = async(password) => {
    const passwordHash = await bcrypt.hash(password, 10) // 10 refers to number of rounds
    return passwordHash
}

const isPasswordSame = async(password, passwordHash) => {
    return await bcrypt.compare(password, passwordHash)
}

const createToken = (user) => {
    const user_id = {
        id: user.id,
        username: user.username,
        name: user.name,
    }
    const token = jwt.sign(user_id, process.env.SECRET_KEY)
    return token
}

const createUserName = (mail) => {
    return mail.replace('@gmail.com','')
}

const getUserFromToken = (token) => {
    const user = jwt.verify(token, process.env.SECRET_KEY)
    return user
}

module.exports = {
    encryptPassword,
    isPasswordSame,
    createToken,
    getUserFromToken,
    createUserName
}