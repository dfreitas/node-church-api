import express from "express"
import MinistracaoController from "./controller/ministracao"
import IntegranteController from "./controller/integrante"

const router = express.Router()
router.get("/ministracoes", MinistracaoController.index)
router.get("/integrantes", IntegranteController.index)
router.get("/integrantes/:id", IntegranteController.findById)
router.get("/integrantes/celula_id/:id", IntegranteController.findByCelulaId)

export default router