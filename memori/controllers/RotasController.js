import express from "express";
const router = express.Router();

// Importante Model de Cadastrar Rotas
//import CadastrarRotas from "../models/CadastrarRotas.js";


//ROTA DE PRODUTOS
router.get("/rotas", (req, res) => {
    // Coletando o parâmetrop da rota
  
  // ARRAY COM LISTA DE PRODUTOS
  
  
    res.render("rotas", {
      // Enviando a variável produto para a página
      rotas : rotas,
    });
  });
  

  // Exportando o módulo ProdutosController.js
  export default router;