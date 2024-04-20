const { request, response } = require('express')
const logger = require('./logger')

// logger middleware
const requestLogger = (request, response, next) => {
    logger.info('request: ',request)
    logger.info('response: ',response)
    next()
}

// when error occured response with status 400 and error message
const errorHandler = (error, request, response, next) => {
    logger.error('error occured',error)
    response.status(400).json({error: error})
    next()
}

// unknown endpoint
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const tokenExtractor = (request, response, next) => {
	const authorization = request.get('authorization')
	console.log(authorization)
	if (authorization && authorization.startsWith('Bearer ')) {
		const token = authorization.replace('Bearer ', '')
		console.log(token)
		request.token = token
	}
	next()
}

const userExtractor = async(request, response, next) => {
	console.log('token',request.token)
	if (request.token){
		const decodedUser = await jwt.verify(request.token, process.env.SECRET_KEY)
		console.log(decodedUser)
		request.user = decodedUser
	}
	next()
}

module.exports = {
    requestLogger,
    errorHandler,
    unknownEndpoint,
    userExtractor,
    tokenExtractor
}
