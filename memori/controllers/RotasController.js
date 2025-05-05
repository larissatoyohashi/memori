import express from "express"

// Carregando o método do Express para gerenciamento de Rotas
const router = express.Router(); // Método para gerenciar a rota

//ROTA DE PRODUTOS
router.get("/rotas", (req, res) => {
    // Coletando o parâmetrop da rota
    res.render("rotas", {
      // Enviando a variável produto para a página
      rotas : rotas,
    });
  });

  // Cadastrando dados das rotas
  router.post("/rotas/new", (req,res) => {
    const tituloRota = req.body.tituloRota
    const cidadeLocalizada = req.body.cidadeLocalizada
    const longitudeRota = req.body.longitudeRota
    const lantitudeRota = req.body.lantitudeRota
    const imagemCapa = req.body.imagemCapa
    const descricaoRota = req.body.descricaoRota
    Rota.create({
      tituloRota : tituloRota,
      cidadeLocalizada : cidadeLocalizada,
      longitudeRota : longitudeRota,
      lantitudeRota : lantitudeRota,
      imagemCapa : imagemCapa,
      descricaoRota : descricaoRota
    }).then(() => {
      res.redirect("/rotas")
    })
  })
  // Excluindo dados das rotas
  router.get("/rotas/delete/:id", (req,res) => {
    const id = req.params.id
    rotas.destroy ({
      where: {
        id : id
      }
    }).then(() => {
      res.redirect("/rotas")
    });
  });

  // Rotas de edição das rotas
  router.get("/rotas/edit/:id", (req,res) => {
    const id = req.params.id
    Rota.findByPk(id).then(function(rota) {
      res.render("rotaEdit", {
        rota : rota
      })
    })
  })
  // Rota de alteração de rotas
  router.post("/rotas/update/:id", (req,res) => {
    const tituloRota = req.body.tituloRota
    const cidadeLocalizada = req.body.cidadeLocalizada
    const longitudeRota = req.body.longitudeRota
    const lantitudeRota = req.body.lantitudeRota
    const imagemCapa = req.body.imagemCapa
    const descricaoRota = req.body.descricaoRota
    Rota.update(
      {
        tituloRota : tituloRota,
        cidadeLocalizada : cidadeLocalizada,
        longitudeRota : longitudeRota,
        lantitudeRota : lantitudeRota,
        imagemCapa : imagemCapa,
        descricaoRota : descricaoRota
      },
      {where: {id : id}}
    ).then(() => {
      res.redirect("/rotas")
    })
  })
  
  // Exportando o módulo ProdutosController.js
  export default router;