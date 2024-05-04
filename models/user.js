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
    name: {
        type: DataTypes.CHAR
    },
    email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

},{
    sequelize,
    underscored: true,
    modelName: 'users'
})

User.sync({alter:true})

module.exports = User