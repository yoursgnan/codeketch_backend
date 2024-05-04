
const User = require('../models/user')
const { createToken,encryptPassword, createUserName } = require('../utils/helper_functions')
const createAccountRouter = require('express').Router()

createAccountRouter.post('/',async(request,response)=>{
    const userData = request.body
    userData.password = await encryptPassword(userData.password)
    console.log('datagot',userData)
    const newUser = new User(userData)
    try {
        const createdUser = await newUser.save();
        const token = createToken(createdUser);
        response.status(200).json({ token: token });
    } catch (error) {
        response.status(500).json(error);
    }

})

module.exports = createAccountRouter