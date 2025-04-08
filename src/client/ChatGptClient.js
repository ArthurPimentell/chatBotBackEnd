import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

export default async function buscarResposta(pergunta){
    const APIKEY = process.env.chaveAI
    const DATA = {
        "contents": [
            {
            "parts":[{"text": `${pergunta}`}]
            }
        ]
        
    }
    const HEADER = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${APIKEY}`
    }

    return await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.chaveAI}`, DATA, HEADER)
    .then(response => {
        const resposta = response.data.candidates[0].content.parts[0].text;
        return resposta;
    })
    .catch(error =>{
        console.error('Erro ao fazer a requisição', error)
    })
};
