const logger = require('../utils/logger')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
})

sequelize.authenticate()
.then(() => {
    logger.info('Connected to database successfully')
})
.catch(err => {
    logger.info('Failed to connect the database')
});

module.exports = sequelize