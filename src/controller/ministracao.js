import MinistracaoModel from "../data/models/ministracao"

export default{
  
  async index(req, res) {
   try{
          res.json(await MinistracaoModel.find())
      }catch(err){
            res.status(500).send(err)
      }
    },

    async findById(req, res){
      res.json(await MinistracaoModel.findById(req.params.id))
    },

    async store(req, res){
      const ministracao = await MinistracaoModel.create(req.body)
      res.send(ministracao);
    },

    async update(req, res){
      const ministracao = await MinistracaoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.send(ministracao)
    },

    async remove(req, res){
      await MinistracaoModel.findByIdAndRemove(req.params.id)
      res.send();
    }

  }

