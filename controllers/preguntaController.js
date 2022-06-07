import Pregunta from "../models/Pregunta.js"
import Tema from "../models/Tema.js"

const agregarPregunta = async (req, res) => {
    const { tema } = req.body

    if (tema.match(/^[0-9a-fA-F]{24}$/)) {
        const existeTema = await Tema.findById(tema)
        if(existeTema === null){
            const error = new Error("Tema no existe")
            return res.status(404).json({msg: error.message})
        } 
      } else {
        const error = new Error("El tema no es valido")
        return res.status(404).json({msg: error.message})
      }

      try {
          const preguntaAlmacenada = await Pregunta.create(req.body)
          res.json(preguntaAlmacenada)
      } catch (error) {
          console.log(error)
      }


}

const obtenerPregunta = async (req, res) => {
    
    const {id} = req.params
    const pregunta = await Pregunta.findById(id.trim())
    //return res.json(pregunta)

   
        if(pregunta === null){
            const error = new Error("Pregunta no encontrada")
            return res.status(404).json({msg: error.message})
        } else if (pregunta) {
            res.json(pregunta)
        } else {
            const error = new Error("Id no valida")
            return res.status(404).json({msg: error.message})
        }
     
        // NOTA: Cuando la ID no tiene el mismo formato el servidor crashea.
        // SOLUCION PENDIENTE

}

const actualizarPregunta = async (req, res) => {}

const eliminarPregunta = async (req, res) => {}

const estadoTarea = async (req, res) => {}

export {
    agregarPregunta,
    obtenerPregunta,
    actualizarPregunta,
    eliminarPregunta,
    estadoTarea
}