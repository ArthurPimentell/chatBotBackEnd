import express from 'express';
import buscarResposta from './../client/ChatGptClient.js'
import cors from 'cors';


const APP = express();

APP.use(cors())

const PORT = 3000;


const PATH = "/chatBot";

APP.get(`${PATH}`, (req, res) =>{
    
    return res.status(200).send();
});


APP.use(express.json());

APP.post(`${PATH}`,async (req,res) => {

    const PERGUNTA = req.body.pergunta;

    const RESPOSTA = await buscarResposta(PERGUNTA);
    console.log(RESPOSTA)

    return res.status(200).json({
        resposta: `${RESPOSTA}`
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