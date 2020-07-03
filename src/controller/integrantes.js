import express from "express"
import IntegranteModel from "../data/models/integrante"
const router = express.Router()
/*var express             = require('express'),
    router              = express.Router(),
    IntegranteModel     = require('../data/models/integrantes');
    CelulaModel         = require('../data/models/celulas')
*/

router.get("/load", async(req, res)=>{
    try{
        await IntegranteModel.create({nome: "Denis Freitas", email:"denis.freitas@gmail.com", sexo: "M"  });
        await IntegranteModel.create({nome: "Simone Freitas", email:"simone.cicon@gmail.com", sexo: "F"  });
        res.json(true)
    }catch(err){
         res.status(500).send(err);
    }

})

router.get("/", async(req, res) =>{
    const integrantes = await IntegranteModel.find({})
    res.json(integrantes)
})

router.get("/:id", async (req, res) =>{
    console.log("Buscando o integrante id: ", req.params.id)
    try{
        const resultado = await IntegranteModel.find({_id : 1})
        res.json(resultado)
    }catch(err){
        console.log("Erro: ", err)
        res.json(err)
    }
    
})

router.get("/celula_id/:celula_id", (req, res) =>{
    res.json("/integrantes/celula_id")
})

/*
//get all Integrantes
router.get("/", function(req, res){
    IntegranteModel.find({}, function(err, integrantes){
        if (err){
            console.log(err);
        }else{
            res.send(integrantes)
        }
    });
});

//get an specific integrante
router.get("/:id", function(req, res){
    IntegranteModel.find({_id : req.params.id}, function(err, integrante){
        if (err){
            console.log(err);
        }else{
            res.send(integrante);
        }
    });
});

//get all integrantes of a specific célula
router.get("/celula_id", function(req, res){
    CelulaModel.findById(req.params.id, function(err, celula){
        if (err){
            console.log(err);
        }else{
            res.send(celula.integrantes);
        }
    });
});
*/

export default router