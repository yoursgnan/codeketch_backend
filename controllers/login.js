const { isPasswordSame, createToken } = require('../utils/helper_functions')

const User = require('../models/user')
const logger = require('../utils/logger')

const middleware = require('../utils/middleware')

const loginRouter = require('express').Router()

loginRouter.post('/',async(request,response)=>{
    const user = request.body 
    logger.info(user)
    try{
        let user_rec = null
        if('email' in user){
            user_rec = await User.findOne({
                where:{
                    email: user.email
                }
            })
        }
        else if('username' in user){
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
                response.status(200).json({token:token})
            }
            else{
                response.status(400).json({'message': 'Incorrect password'})
            }
        }
        else{
            response.status(404).json({'message': `Couldn't find account, please create new account if you are new`})
        }
    }
    catch(error){
        logger.error('error occured',error)
        response.status(400).json({error: error})
    }
    
})

loginRouter.get('/',async(request,response)=>{
    if(request.user){
        const user = await User.findByPk(request.user.id)
        user.password = null
        console.log('user found',user)
        response.status(200).json(user)
    }
    else{
        response.status(400).json({message:'User not signed in'})
    }
    
})

module.exports = loginRouter