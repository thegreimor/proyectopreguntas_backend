import  express  from "express";
const router = express.Router()

import {
    obtenerTemas,
    nuevoTema,
    obtenerTema,
    editarTema,
    eliminarTema,
    obtenerPreguntas
} from '../controllers/temaController.js'
import checkAuth from "../middleware/checkAuth.js"


router.route('/')
.get(checkAuth, obtenerTemas)
.post(checkAuth, nuevoTema)

router.route('/:id')
.get(checkAuth, obtenerTema)
.put(checkAuth, editarTema)
.delete(checkAuth, eliminarTema)

router.get('/tareas/:id', checkAuth, obtenerPreguntas)

export default router