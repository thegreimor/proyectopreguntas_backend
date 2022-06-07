import mongoose from "mongoose";

const preguntaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true,
    },
    estado: {
        type: Boolean,
        default: false,
    },
    tema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tema",
    },
},
{
    timestamps: true
})
const Pregunta = mongoose.model("Pregunta", preguntaSchema)
export default Pregunta