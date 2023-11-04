const Sequelize = require("sequelize");
const sequelize = require("../connection/database");

const Comments = sequelize.define('comment',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    comments:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})
module.exports = Comments;