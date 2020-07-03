import MinistracaoModel from "../data/models/ministracao"

export default{
  
  async index(req, res) {
   try{
          res.json(await MinistracaoModel.find())
      }catch(err){
            res.status(500).send(err)
      }
    }

  }

