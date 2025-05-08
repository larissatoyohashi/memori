import express from "express";
import Usuarios from "../models/Usuarios.js";

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE USUÁRIOS
router.get("/usuarios", (req, res) => {
  Usuarios.findAll().then((usuarios) => {
    res.render("usuarios", {
      // Enviando a variável produto para a página
      usuarios: usuarios,
    });
  });
});

// Cadastrando dados das rotas
router.post("/usuarios/new", (req, res) => {
  const id = req.params.id; // 👈 Isso estava faltando
  const nome = req.body.nome;
  const nomeUsuario = req.body.nomeUsuario;
  const emailUsuario = req.body.emailUsuario;
  const senhaUsuario = req.body.senhaUsuario;
  const permissao = req.body.permissao;
  Usuarios.create({
    id : id,
    nome: nome,
    nomeUsuario: nomeUsuario,
    emailUsuario: emailUsuario,
    senhaUsuario: senhaUsuario,
    permissao: permissao,
  }).then(() => {
    res.redirect("/usuarios");
  });
});
// Excluindo dados das rotas
router.get("/usuarios/delete/:id", (req, res) => {
  const id = req.params.id;
  Usuarios.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/usuarios");
  });
});

// Rotas de edição das rotas
router.get("/usuarios/edit/:id", (req, res) => {
  const id = req.params.id;
  Usuarios.findByPk(id).then(function (usuario) {
    res.render("usuariosEdit", {
      usuario: usuario,
    });
  });
});
// Rota de alteração de rotas
router.post("/usuarios/update/:id", (req, res) => {
  const id = req.params.id; 
  const nome = req.body.nome;
  const nomeUsuario = req.body.nomeUsuario;
  const emailUsuario = req.body.emailUsuario;
  const senhaUsuario = req.body.senhaUsuario;
  const permissao = req.body.permissao;
  Usuarios.update(
    {
      id : id,
      nome: nome,
      nomeUsuario: nomeUsuario,
      emailUsuario: emailUsuario,
      senhaUsuario: senhaUsuario,
      permissao: permissao,
    },
    { where: { id: id } }
  ).then(() => {
    res.redirect("/usuarios");
  });
});

// Exportando o módulo ProdutosController.js
export default router;
