import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Checkpoints = connection.define('checkpoints',{
    nomeCheckpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    latitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: false, 
    },
    longitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    tituloRota:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricaoCheckpoint:{
        type: Sequelize.TEXT,
        allowNull: false,
    } 
});
Checkpoints.sync({forse:false});
export default Checkpoints;