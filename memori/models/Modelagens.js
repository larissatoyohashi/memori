import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Modelagens = connection.define('Modelagens',{
    nome_modelagem:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_cidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome_checkpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    arquivo_modelagem:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
});
Modelagens.sync({forse:false});
export default Modelagens;