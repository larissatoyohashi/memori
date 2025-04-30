import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Localidades = connection.define('Localidades',{
    id_checkpoint:{
        type: Sequelize.INTEGER,
        allowNull: false, 
    },
    id_modelagem:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    local_model_checkpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});
Localidades.sync({forse:false});
export default Localidades;