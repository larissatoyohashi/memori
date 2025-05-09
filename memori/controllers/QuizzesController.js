import express from "express"
import Quizzes from "../models/Quizzes.js";

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

// Rota de quizzes
router.get("/quizzes", (req, res) => {
    Quizzes.findAll().then((quizzes) => {
      res.render("quizzes", {
        // Enviando a variável produto para a página
        quizzes : quizzes,
      });
    });
  });

  // Cadastrando dados das rotas
  router.post("/quizzes/new", (req,res) => {
    const id = req.body.id
    const pergunta = req.body.pergunta
    const checkpointQuizz = req.body.checkpointQuizz
    const alternativaA = req.body.alternativaA
    const alternativaB = req.body.alternativaB
    const alternativaC = req.body.alternativaC
    const alternativaD = req.body.alternativaD
    const alternativaE = req.body.alternativaE
    const alternativaCorreta = req.body.alternativaCorreta
    Quizzes.create({
      id : id,
      pergunta : pergunta,
      checkpointQuizz : checkpointQuizz,
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
    const id = req.params.id;
    Quizzes.destroy ({
      where: {
        id : id,
      },
    }).then(() => {
      res.redirect("/quizzes");
    });
  });

  // Rotas de edição das rotas
  router.get("/quizzes/edit/:id", (req,res) => {
    const id = req.params.id;
    Quizzes.findByPk(id).then(function (quizzes) {
      res.render("quizzesEdit", {
        quizzes : quizzes,
      });
    });
  });
  // Rota de alteração de rotas
  router.post("/quizzes/update/:id", (req,res) => {
    const id = req.body.id
    const pergunta = req.body.pergunta
    const checkpointQuizz = req.body.checkpointQuizz
    const alternativaA = req.body.alternativaA
    const alternativaB = req.body.alternativaB
    const alternativaC = req.body.alternativaC
    const alternativaD = req.body.alternativaD
    const alternativaE = req.body.alternativaE
    const alternativaCorreta = req.body.alternativaCorreta
    Quizzes.update(
      {
      id : id,
      pergunta : pergunta,
      checkpointQuizz : checkpointQuizz,
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