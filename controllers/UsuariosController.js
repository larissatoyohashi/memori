import express from "express"

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE PRODUTOS
router.get("/usuarios", (req, res) => {
    // Coletando o parâmetrop da rota
  
  // ARRAY COM LISTA DE PRODUTOS
  
    const usuarios = [
        {nome:"Celular Motorola E22", preco: 1200, categoria:"Eletroportáteis"},
        {nome:"Tablet Samsung", preco: 900, categoria:"Eletrônicos"},
        {nome:"Notebook Lenovo", preco: 3200, categoria:"Computadores"},
        {nome:"Fone Bluetooth", preco: 150, categoria:"Periféricos"},
    ];
  
  
    res.render("usuarios", {
      // Enviando a variável produto para a página
      usuarios : usuarios,
    });
  });
  

  // Exportando o módulo ProdutosController.js
  export default router;