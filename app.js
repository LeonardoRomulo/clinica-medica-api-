import express from 'express';
import cors from 'cors';
import { retornaListaMedica } from './service/service.js';

const app = express();
app.use(cors());

app.get('/medicos', async (req, res)  => {
    try {
        const listaMedica = await retornaListaMedica();
        if(!listaMedica || listaMedica.length === 0){
            return res.status(404).json({mensagem: 'Nenhum médico encontrado'});
        }
        res.json(listaMedica);
    }catch(error) {
        res.status(500).json({mensagem: 'Erro ao buscar a lista médica'});
    }

    
})

app.use((req,res) => {
    res.status(404).json({mensagem: 'Rota não encontrada'});
});

app.listen (9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});
