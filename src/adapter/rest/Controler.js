import express from 'express';

const APP = express();

const PORT = 3000;


const PATH = "/chatBot";

APP.get(`${PATH}`, (req, res) =>{
    
    return res.status(200).send();
});


APP.use(express.json());

APP.post(`${PATH}`,(req,res) =>{

    const PERGUNTA = req.body.pergunta;
    //FAZER OPERAÇÕES

    return res.status(200).json({
        resposta: `A PERGUNTA FOI ${PERGUNTA}`
    });

});

APP.put(`${PATH}`,(req,res) => {
    const ID = req.body.id;

    console.log(ID);
    

    res.status(200).json({
        resposta: `O valor do id ${ID}`
    });
});

APP.delete(`${PATH}`,(req,res)=>{

    const ID = req.query.id;

    console.log(ID);
    return res.status(200).json({
        resposta: `O ID Deletado foi: ${ID}`
    });

});

const CONTROLER = {
    app: APP,
    port: PORT
}

export default CONTROLER;