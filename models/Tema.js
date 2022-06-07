import mongoose from 'mongoose'

const temaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        require: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    }
},{
    timestamps: true,
})

const Tema = mongoose.model('Tema', temaSchema)
export default Tema