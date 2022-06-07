import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import temaRoutes from "./routes/temaRoutes.js"
import preguntaRoutes from "./routes/preguntaRoutes.js"
import cors from 'cors'

const app = express()
app.use(express.json())

dotenv.config()

conectarDB()

// Configurar CORS


app.use(cors())

// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/temas', temaRoutes)
app.use('/api/preguntas', preguntaRoutes)

const PORT = process.env.PORT || 4000

console.log("iniciando index.js")

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
