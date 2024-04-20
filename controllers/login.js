const { isPasswordSame, createToken } = require('../utils/helper_functions')

const User = require('../models/user')
const logger = require('../utils/logger')

const loginRouter = require('express').Router()

loginRouter.post('/',async(request,response)=>{
    const user = request.body 
    logger.info(user)
    try{
        let user_rec = null
        if(user.email){
            user_rec = await User.findOne({
                where:{
                    email: user.email
                }
            })
        }
        else if(user.username){
            user_rec = await User.findOne({
                where:{
                    username: user.username
                }
            })
        }

        logger.info('user record',user_rec)

        if(user_rec){
            if(isPasswordSame(user_rec.dataValues.password,user.password)){
                const token = createToken(user_rec)
                response.status(400).json({token:token})
            }
            else{
                response.status(400).json({'message': 'Incorrect password'})
            }
        }
        else{
            response.status(404).json({'message': `No account exists with email: ${email}`})
        }
    }
    catch(error){
        logger.error('error occured',error)
        response.status(400).json({error: error})
    }
    
})

module.exports = loginRouter