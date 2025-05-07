// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import RotasController from "./controllers/RotasController.js";
import UsuariosController from "./controllers/UsuariosController.js";
import EstatisticasController from "./controllers/EstatisticasController.js";
import CheckpointsController from "./controllers/CheckpointsController.js";

import connection from "./config/sequelize-config.js";

import CadastrarRotas from "./models/CadastrarRotas.js";
import Checkpoints from "./models/Checkpoints.js";
import Modelagens from "./models/Modelagens.js";
import Quizzes from "./models/Quizzes.js";
import Usuarios from "./models/Usuarios.js";

connection.authenticate().then(() =>{
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((erro) => {
  console.log(erro);
});

connection.query(`Create database if not exists memori;`). then (() => {
  console.log("O banco de dados está criado!");
}).catch((error) => {
  console.log(error);  
});

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", UsuariosController);
app.use("/", RotasController);
app.use("/", EstatisticasController);
app.use("/", CheckpointsController);

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
