import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando um Model (tabela do banco)
const Logins = connection.define('logins', {
    // Colunas da tabela
    email_login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

Logins.sync({forse: false})
export default Logins;