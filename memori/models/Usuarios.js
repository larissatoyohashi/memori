import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuarios = connection.define('Usuarios',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_usuario:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
    email_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha_usuario:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    permissao:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})
Usuarios.sync({forse:false});
export default Usuarios;