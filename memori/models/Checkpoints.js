import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Checkpoints = connection.define('checkpoints',{
    nome_checkpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    latitude_checkpoint:{
        type: Sequelize.FLOAT,
        allowNull: false, 
    },
    longitude_checkpoint:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    titulo_rota:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    descricao_checkpoint:{
        type: Sequelize.TEXT,
        allowNull: false,
    } 
})
Checkpoints.sync({forse:false});
export default Checkpoints;