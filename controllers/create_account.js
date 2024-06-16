
const User = require('../models/user')
const { createToken,encryptPassword, createUserName, sendEmail } = require('../utils/helper_functions')
const createAccountRouter = require('express').Router()

createAccountRouter.post('/',async(request,response)=>{
    const userData = request.body
    try {
        userData.password = await encryptPassword(userData.password)
        const newUser = new User(userData)
        const createdUser = await newUser.save();
        await sendEmail(createdUser.email)
        const token = await createToken(createdUser);
        response.status(200).json({ token: token });
    } catch (error) {
        response.status(500).json(error);
    }

})

module.exports = createAccountRouter