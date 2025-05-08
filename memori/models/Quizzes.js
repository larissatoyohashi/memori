import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Quizzes = connection.define('Quizzes',{
    pergunta:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    alternativaA:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
    alternativaB:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    alternativaC:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    alternativaD:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    alternativaE:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    alternativaCorreta: {
        type: Sequelize.STRING,
        allowNull: false,
        }
})
Quizzes.sync({forse:false});
export default Quizzes;