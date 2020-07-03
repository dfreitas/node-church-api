import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose"
import Routes from "./routes"

// conexão com o banco de dados
mongoose.connect(process.env.DATABASE_URL || "mongodb://localhost:27017/church", {useNewUrlParser: true, useUnifiedTopology: true});

// Express Server
const server = express()
server.use(cors())
server.disable("x-powered-by")

// Definição das rotas
//server.use("/integrantes", IntegrantesController)
//server.use("/ministracoes", MinistracaoController)
server.use("/api", Routes);

server.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port: ${process.env.PORT || 3001}`)
})
