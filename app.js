const express = require('express')
const cors = require('cors')

const loginRouter = require('./controllers/login')
const createAccountRouter = require('./controllers/create_account')
const workspaceRouter = require('./controllers/workspace')
const middleware = require('./utils/middleware')

app = express()

app.use(express.json())
app.use(middleware.requestLogger)

// cors for cross authentication: allows the request from the 
// service which is running on other port
app.use(cors())

app.use(middleware.tokenExtractor)
app.use(middleware.userExtractor)

//create account handler
app.use('/api/create_account',createAccountRouter)

// login route handler
app.use('/api/login',loginRouter)

// workspace route handler
app.use('/api/workspace',workspaceRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app