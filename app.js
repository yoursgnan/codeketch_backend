const express = require('express')
const cors = require('cors')

const loginRouter = require('./controllers/login')
const createAccountRouter = require('./controllers/create_account')
const middleware = require('./utils/middleware')

app = express()

app.use(express.json())
app.use(middleware.requestLogger)

// cors for cross authentication: allows the request from the 
// service which is running on other port
app.use(cors())

//create account handler
app.use('/api/create_account',createAccountRouter)

// login route handler
app.use('/api/login',loginRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app