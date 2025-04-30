import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Cidades = connection.define('Cidades',{
    nome_cidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    latitude_cidade:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
    longitude_cidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado_cidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});
Cidades.sync({forse:false});
export default Cidades;