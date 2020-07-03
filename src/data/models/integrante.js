import mongoose from "mongoose"
import IntegranteSchema from "../schemas/integrante"
const Integrante = mongoose.model('Integrante', IntegranteSchema)
export default Integrante