const sequelize = require('../utils/config')

const {Model, DataTypes} = require('sequelize')

class Workspace extends Model {}

Workspace.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
    },
    title: {
        type: DataTypes.CHAR,
        allowNull: false,
    },
    description: {
        type: DataTypes.CHAR,
    }
},{
    sequelize,
    underscored: true,
    modelName: 'workspaces'
})

Workspace.sync({alter:true})

module.exports = Workspace