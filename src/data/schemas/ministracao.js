import mongoose from "mongoose"
const MinistracaoSchema = new mongoose.Schema({
  titulo: String,
  preletor: String,
  ministerio: String,
  urlVideo: String,
  urlAudio: String,
  texto: String,
  dataCriacao: {type: Date, default: Date.now},
  dataPublicacao: Date
})
export default MinistracaoSchema
