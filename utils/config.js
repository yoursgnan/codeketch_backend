const logger = require('../utils/logger')
const fs = require('fs')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: true,
            ca: fs.readFileSync('./ca.pem').toString(),
        }
    },
    
})

sequelize.authenticate()
.then(() => {
    logger.info('Connected to database successfully')
})
.catch(err => {
    console.log(`Connecting to host ${process.env.DATABASE_HOST}`)
    logger.info(`Failed to connect the database ${process.env.DATABASE}`)
});

module.exports = sequelize
