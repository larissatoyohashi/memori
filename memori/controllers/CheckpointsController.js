import express from "express"
import Checkpoints from "../models/Checkpoints.js";


// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE PRODUTOS
router.get("/checkpoints", (req, res) => {
  Checkpoints.findAll().then((checkpoints) => {
    res.render("checkpoints", {
      // Enviando a variável produto para a página
      checkpoints : checkpoints,
    });
  });
});

    // Cadastrando dados das rotas
    router.post("/checkpoints/new", (req,res) => {
      const nomeCheckpoint = req.body.nomeCheckpoint
      const latitudeCheckpoint = req.body.latitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Checkpoints.create({
        nomeCheckpoint : nomeCheckpoint,
        latitudeCheckpoint : latitudeCheckpoint,
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
      Checkpoints.destroy ({
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
      Checkpoints.findByPk(id).then(function(checkpoint) {
        res.render("checkpointsEdit", {
          checkpoint : checkpoint
        })
      })
    })
    // Rota de alteração de rotas
    router.post("/checkpoints/update/:id", (req,res) => {
      const id = req.params.id
      const nomeCheckpoint = req.body.nomeCheckpoint
      const latitudeCheckpoint = req.body.latitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Checkpoints.update(
        {
          id : id,
          nomeCheckpoint : nomeCheckpoint,
          latitudeCheckpoint : latitudeCheckpoint,
          longitudeCheckpoint : longitudeCheckpoint,
          tituloRota : tituloRota,
          descricaoCheckpoint : descricaoCheckpoint
        },
        {where: {id : id}}
      ).then(() => {
        res.redirect("/checkpoints")
      })
    })

  // Exportando o módulo
  export default router;