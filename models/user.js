const sequelize = require('../utils/config')

const { Model, DataTypes } = require('sequelize')

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.CHAR,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.CHAR,
        unique: true,
    },
    password: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    firstname: {
        type: DataTypes.CHAR
    },
    lastname: {
        type: DataTypes.CHAR
    }

},{
    sequelize,
    underscored: true,
    modelName: 'users'
})

User.sync()

module.exports = User