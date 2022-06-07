import Tema from "../models/Tema.js"

const obtenerTemas = async (req, res) => {
    const temas = await Tema.find().where('creador').equals(req.usuario)

    res.json(temas)
}

const nuevoTema = async (req, res) => {
    const tema = new Tema(req.body)
    tema.creador = req.usuario._id

    try {
        const temaAlmacenado = await tema.save()
        res.json(temaAlmacenado)
    } catch (error) {
        console.log(error)
    }
}

const obtenerTema = async (req, res) => {
    const {id} = req.params

    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const tema = await Tema.findById(id)
        if(tema === null){
            const error = new Error("Tema no encontrado")
            return res.status(404).json({msg: error.message})
        } else {
            res.json(tema)
        }
      } else {
        const error = new Error("El id no es valido")
        return res.status(404).json({msg: error.message})
      }
    
    
}

const editarTema = async (req, res) => {}

const eliminarTema = async (req, res) => {}

const obtenerPreguntas = async (req, res) => {}


export {
    obtenerTemas,
    nuevoTema,
    obtenerTema,
    editarTema,
    eliminarTema,
    obtenerPreguntas
}