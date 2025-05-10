import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Rotas = connection.define('Rotas',{
    tituloRota:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cidadeLocalizada:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    longitudeRota:{
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
Rotas.sync({force:true});
export default Rotas;