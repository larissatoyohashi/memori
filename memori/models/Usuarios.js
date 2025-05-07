import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Usuarios = connection.define('Usuarios',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomeUsuario:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
    emailUsuario:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    senhaUsuario:{
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