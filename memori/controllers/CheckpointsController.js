import express from "express"

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE PRODUTOS
router.get("/checkpoints", (req, res) => {
    // Coletando o parâmetrop da rota  
    res.render("checkpoints", {
      // Enviando a variável produto para a página
      checkpoints : checkpoints,
    });
  });

    // Cadastrando dados das rotas
    router.post("/checkpoints/new", (req,res) => {
      const nomeCheckpoint = req.body.nomeCheckpoint
      const lagitudeCheckpoint = req.body.lagitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Rota.create({
        nomeCheckpoint : nomeCheckpoint,
        lagitudeCheckpoint : lagitudeCheckpoint,
        longitudeCheckpoint : longitudeCheckpoint,
        tituloRota : tituloRota,
        descricaoCheckpoint : descricaoCheckpoint
      }).then(() => {
        res.redirect("/checkpoints")
      })
    })
    // Excluindo dados das rotas
    router.get("/checkpoints/delete/:id", (req,res) => {
      const id = req.params.id
      rotas.destroy ({
        where: {
          id : id
        }
      }).then(() => {
        res.redirect("/checkpoints")
      });
    });
  
    // Rotas de edição das rotas
    router.get("/checkpoints/edit/:id", (req,res) => {
      const id = req.params.id
      Rota.findByPk(id).then(function(usuario) {
        res.render("checkpointEdit", {
          checkpoint : checkpoint
        })
      })
    })
    // Rota de alteração de rotas
    router.post("/checkpoints/update/:id", (req,res) => {
      const nomeCheckpoint = req.body.nomeCheckpoint
      const lagitudeCheckpoint = req.body.lagitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Rota.update(
        {
          nomeCheckpoint : nomeCheckpoint,
          lagitudeCheckpoint : lagitudeCheckpoint,
          longitudeCheckpoint : longitudeCheckpoint,
          tituloRota : tituloRota,
          descricaoCheckpoint : descricaoCheckpoint
        },
        {where: {id : id}}
      ).then(() => {
        res.redirect("/checkpoints")
      })
    })
  

  // Exportando o módulo ProdutosController.js
  export default router;