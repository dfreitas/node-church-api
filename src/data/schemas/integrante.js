import mongoose from "mongoose"

const IntegranteSchema = new mongoose.Schema({
        nome: String,
        email: String,
        datadeNascimento: {type: Date},
        sexo: String,
        status: Boolean
});

export default IntegranteSchema