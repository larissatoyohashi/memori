import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const CadastrarRotas = connection.define('CadastrarRotas',{
    tituloRota:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidadeLocalizada:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    longituteRota:{
        type: Sequelize.FLOAT,
        allowNull: false, 
    },
    latitudeRota:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    imagemCapa:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricaoRota:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
CadastrarRotas.sync({forse:false});
export default CadastrarRotas;