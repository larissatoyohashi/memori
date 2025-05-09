import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Modelagens = connection.define('Modelagens',{
    nomeModelagens:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomeCidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nomeCheckpoint:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    arquivoModelagens:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
});
Modelagens.sync({ force: true });
export default Modelagens;