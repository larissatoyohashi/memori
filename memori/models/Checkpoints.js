import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Checkpoints = connection.define('checkpoints',{
    nomeCheckpoint:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    latitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: true, 
    },
    longitudeCheckpoint:{
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    tituloRota:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    descricaoCheckpoint:{
        type: Sequelize.TEXT,
        allowNull: true,
    },
    imagemCheckpoint:{
        type: Sequelize.STRING,
        allowNull: true,
    }
});
Checkpoints.sync({force:true});
export default Checkpoints;