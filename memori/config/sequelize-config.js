import Sequelize from "sequelize";

const connection = new Sequelize({  // Objeto que vai ser a instância da classe Sequelize 

    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    // Comente a linha abaixo na primeira execução do projeto
    // database: 'memori',
    timezone: "-03:00"
});

export default connection;
