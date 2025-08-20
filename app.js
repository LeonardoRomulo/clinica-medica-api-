import express from 'express';
import cors from 'cors';
import { retornaListaMedica } from './service/service.js';

const app = express();
app.use(cors());

app.get('/medicos', async (req, res)  => {
    let listaMedica;
    listaMedica = await retornaListaMedica();
    res.json(listaMedica);
})


app.listen (9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
})