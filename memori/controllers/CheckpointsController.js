import express from "express"

//import Modelagens from "../models/Modelagens.js";
//import Checkpoints from "../models/Checkpoints.js";
//import Quizzes from "../models/Quizzes.js";

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
      const id = req.body.id
      const nomeCheckpoint = req.body.nomeCheckpoint
      const lagitudeCheckpoint = req.body.lagitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Checkpoint.create({
        id : id,
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
      checkpoints.destroy ({
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
      Checkpoint.findByPk(id).then(function(usuario) {
        res.render("checkpointEdit", {
          checkpoint : checkpoint
        })
      })
    })
    // Rota de alteração de rotas
    router.post("/checkpoints/update/:id", (req,res) => {
      const id = req.body.id
      const nomeCheckpoint = req.body.nomeCheckpoint
      const lagitudeCheckpoint = req.body.lagitudeCheckpoint
      const longitudeCheckpoint = req.body.longitudeCheckpoint
      const tituloRota = req.body.tituloRota
      const descricaoCheckpoint = req.body.descricaoCheckpoint
      Rota.update(
        {
          id : id,
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





    // Rota de modelagem
router.get("/modelagens", (req, res) => {
  // Coletando o parâmetrop da rota  
  res.render("modelagens", {
    // Enviando a variável produto para a página
    modelagens : modelagens,
  });
});

  // Cadastrando dados das rotas
  router.post("/modelagens/new", (req,res) => {
    const id = req.body.id
    const nomeModelagem = req.body.nomeModelagem
    const nomeCidade = req.body.nomeCidade
    const nomeCheckpoint = req.body.nomeCheckpoint
    const arquivoModelagem = req.body.arquivoModelagem
    Modelagem.create({
      id : id,
      nomeModelagem : nomeModelagem,
      nomeCidade : nomeCidade,
      nomeCheckpoint : nomeCheckpoint,
      arquivoModelagem : arquivoModelagem
    }).then(() => {
      res.redirect("/modelagens")
    })
  })
  // Excluindo dados das rotas
  router.get("/modelagens/delete/:id", (req,res) => {
    const id = req.params.id
    modelagens.destroy ({
      where: {
        id : id
      }
    }).then(() => {
      res.redirect("/modelagens")
    });
  });

  // Rotas de edição das rotas
  router.get("/modelagens/edit/:id", (req,res) => {
    const id = req.params.id
    Modelagem.findByPk(id).then(function(usuario) {
      res.render("modelagensEdit", {
        modelagem : modelagem
      })
    })
  })
  // Rota de alteração de rotas
  router.post("/modelagens/update/:id", (req,res) => {
    const id = req.body.id
    const nomeModelagem = req.body.nomeModelagem
    const nomeCidade = req.body.nomeCidade
    const nomeCheckpoint = req.body.nomeCheckpoint
    const arquivoModelagem = req.body.arquivoModelagem
    Modelagem.update(
      {
        id : id,
      nomeModelagem : nomeModelagem,
      nomeCidade : nomeCidade,
      nomeCheckpoint : nomeCheckpoint,
      arquivoModelagem : arquivoModelagem
      },
      {where: {id : id}}
    ).then(() => {
      res.redirect("/modelagens")
    })
  })



  // Rota de quizzes
router.get("/quizzes", (req, res) => {
  // Coletando o parâmetrop da rota  
  res.render("quizzes", {
    // Enviando a variável produto para a página
    quizzes : quizzes,
  });
});

  // Cadastrando dados das rotas
  router.post("/quizzes/new", (req,res) => {
    const id = req.body.id
    const pergunta = req.body.pergunta
    const alternativaA = req.body.alternativaA
    const alternativaB = req.body.alternativaB
    const alternativaC = req.body.alternativaC
    const alternativaD = req.body.alternativaD
    const alternativaE = req.body.alternativaE
    const alternativaCorreta = req.body.alternativaCorreta
    Modelagem.create({
      id : id,
      pergunta : pergunta,
      alternativaA : alternativaA,
      alternativaB : alternativaB,
      alternativaC : alternativaC,
      alternativaD : alternativaD,
      alternativaE : alternativaE,
      alternativaCorreta : alternativaCorreta
    }).then(() => {
      res.redirect("/quizzes")
    })
  })
  // Excluindo dados das rotas
  router.get("/quizzes/delete/:id", (req,res) => {
    const id = req.params.id
    quizzes.destroy ({
      where: {
        id : id
      }
    }).then(() => {
      res.redirect("/quizzes")
    });
  });

  // Rotas de edição das rotas
  router.get("/quizzes/edit/:id", (req,res) => {
    const id = req.params.id
    Quizz.findByPk(id).then(function(usuario) {
      res.render("quizzesEdit", {
        quizz : quizz
      })
    })
  })
  // Rota de alteração de rotas
  router.post("/quizzes/update/:id", (req,res) => {
    const id = req.body.id
    const pergunta = req.body.pergunta
    const alternativaA = req.body.alternativaA
    const alternativaB = req.body.alternativaB
    const alternativaC = req.body.alternativaC
    const alternativaD = req.body.alternativaD
    const alternativaE = req.body.alternativaE
    const alternativaCorreta = req.body.alternativaCorreta
    Modelagem.update(
      {
      id : id,
      pergunta : pergunta,
      alternativaA : alternativaA,
      alternativaB : alternativaB,
      alternativaC : alternativaC,
      alternativaD : alternativaD,
      alternativaE : alternativaE,
      alternativaCorreta : alternativaCorreta
      },
      {where: {id : id}}
    ).then(() => {
      res.redirect("/quizzes")
    })
  })


  // Exportando o módulo
  export default router;