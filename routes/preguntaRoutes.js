import express from "express"
const router = express.Router()

import {
    agregarPregunta,
    obtenerPregunta,
    actualizarPregunta,
    eliminarPregunta,
    estadoTarea
} from "../controllers/preguntaController.js"
import checkAuth from "../middleware/checkAuth.js"

router.post("/", checkAuth, agregarPregunta)

router.route("/:id")
.get(checkAuth, obtenerPregunta)
.put(checkAuth, actualizarPregunta)
.delete(checkAuth, eliminarPregunta)

router.post("/estado/:id", checkAuth, estadoTarea)

export default router