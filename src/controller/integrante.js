import IntegranteModel from "../data/models/integrante"

export default{
    async index(req, res){
        res.json( await IntegranteModel.find())         
    },

    async findById(req, res){
        try{        
            res.json(await IntegranteModel.find({_id : req.params.id}))
        }catch(err){
             res.status(500).send(err)
        }
    },

    async findByCelulaId(req, res){
        res.json("Falta implementar ....")
    }
}



