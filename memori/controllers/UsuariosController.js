import express from "express"

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//import Usuarios from "../models/Usuarios.js";

//ROTA DE PRODUTOS
router.get("/usuarios", (req, res) => {
    // Coletando o parâmetrop da rota  
    res.render("usuarios", {
      // Enviando a variável produto para a página
      usuarios : usuarios,
    });
  });

  // Cadastrando dados das rotas
  router.post("/usuarios/new", (req,res) => {
    const nome = req.body.nome
    const nomeUsuario = req.body.nomeUsuario
    const emailUsuario = req.body.emailUsuario
    const senhaUsuario = req.body.senhaUsuario
    const permissao = req.body.permissao
    Rota.create({
      nome : nome,
      nomeUsuario : nomeUsuario,
      emailUsuario : emailUsuario,
      senhaUsuario : senhaUsuario,
      permissao : permissao
    }).then(() => {
      res.redirect("/usuarios")
    })
  })
  // Excluindo dados das rotas
  router.get("/usuarios/delete/:id", (req,res) => {
    const id = req.params.id
    rotas.destroy ({
      where: {
        id : id
      }
    }).then(() => {
      res.redirect("/usuarios")
    });
  });

  // Rotas de edição das rotas
  router.get("/usuarios/edit/:id", (req,res) => {
    const id = req.params.id
    Rota.findByPk(id).then(function(usuario) {
      res.render("usuarioEdit", {
        usuario : usuario
      })
    })
  })
  // Rota de alteração de rotas
  router.post("/rotas/update/:id", (req,res) => {
    const nome = req.body.nome
    const nomeUsuario = req.body.nomeUsuario
    const emailUsuario = req.body.emailUsuario
    const senhaUsuario = req.body.senhaUsuario
    const permissao = req.body.permissao
    Rota.update(
      {
        nome : nome,
      nomeUsuario : nomeUsuario,
      emailUsuario : emailUsuario,
      senhaUsuario : senhaUsuario,
      permissao : permissao
      },
      {where: {id : id}}
    ).then(() => {
      res.redirect("/usuarios")
    })
  })
  

  // Exportando o módulo ProdutosController.js
  export default router;