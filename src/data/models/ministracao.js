import mongoose from "mongoose"
import MinistracaoSchema from "../schemas/ministracao"
const MinistracaoModel = mongoose.model("Ministracao", MinistracaoSchema)
export default MinistracaoModel