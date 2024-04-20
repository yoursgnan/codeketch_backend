require('dotenv').config()

const app = require('./app')
const logger = require('./utils/logger')

app.listen(process.env.PORT || 3001,()=>{
    logger.info(`Server running on port ${process.env.PORT}`)
})