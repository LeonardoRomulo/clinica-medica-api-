import pool from "../db/conexao";

async function executaQuery(conexao, query) {
    const resultado_query = await conexao.query(query);
    const resposta = resultado_query[0];
    return resposta;
}

export const retornaListaMedica = async () => {
    const conexao = await  pool.getConnection();

    const query = 'SELECT id, nome, telefone, email, descricao FROM listamedica';

    const listaMedica = await executaQuery(conexao,query);

    conexao.release();

    return listaMedica;
}
