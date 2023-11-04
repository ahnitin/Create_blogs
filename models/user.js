const Sequelize = require("sequelize");
const sequelize = require("../connection/database");

const User = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
module.exports = User;