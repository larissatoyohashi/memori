import express from "express"
import Modelagens from "../models/Modelagens.js";


// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

    // Rota de modelagem
    router.get("/modelagens", (req, res) => {
        Modelagens.findAll().then((modelagens) => {
          res.render("modelagens", {
            // Enviando a variável produto para a página
            modelagens : modelagens,
          });
        });
      });
  
    // Cadastrando dados das rotas
    router.post("/modelagens/new", (req,res) => {
      const id = req.body.id
      const nomeModelagens = req.body.nomeModelagens
      const nomeCidade = req.body.nomeCidade
      const nomeCheckpoint = req.body.nomeCheckpoint
      const arquivoModelagens = req.body.arquivoModelagens
      Modelagens.create({
        id : id,
        nomeModelagens : nomeModelagens,
        nomeCidade : nomeCidade,
        nomeCheckpoint : nomeCheckpoint,
        arquivoModelagens : arquivoModelagens
      }).then(() => {
        res.redirect("/modelagens")
      })
    })
    // Excluindo dados das rotas
    router.get("/modelagens/delete/:id", (req,res) => {
      const id = req.params.id;
      Modelagens.destroy ({
        where: {
          id : id,
        }
      }).then(() => {
        res.redirect("/modelagens");
      });
    });
  
    // Rotas de edição das rotas
    router.get("/modelagens/edit/:id", (req,res) => {
      const id = req.params.id;
      Modelagens.findByPk(id).then(function(modelagens) {
        res.render("modelagensEdit", {
          modelagens : modelagens,
        });
      });
    });
    // Rota de alteração de rotas
    router.post("/modelagens/update/:id", (req,res) => {
      const id = req.body.id
      const nomeModelagens = req.body.nomeModelagens
      const nomeCidade = req.body.nomeCidade
      const nomeCheckpoint = req.body.nomeCheckpoint
      const arquivoModelagens = req.body.arquivoModelagens
      Modelagens.update(
        {
        id : id,
        nomeModelagens : nomeModelagens,
        nomeCidade : nomeCidade,
        nomeCheckpoint : nomeCheckpoint,
        arquivoModelagens : arquivoModelagens
        },
        {where: {id : id}}
      ).then(() => {
        res.redirect("/modelagens")
      });
    });

    
  // Exportando o módulo
  export default router;