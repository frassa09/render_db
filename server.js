import Fastify from 'fastify'
import { Pool } from 'pg'

const server = Fastify()
const pool = new Pool({
    host: 'dpg-d3ntiare5dus73bgj9o0-a',
    port: '5432',
    database: 'testedb_19tm',
    user: 'teste_backend',
    password: 'aFgEzIRRNTpuoXVgMf0UB5sUzIsg7GNZ',
    ssl: {
        rejectUnauthorized: false
    }
})

server.get('/criartabelausuario', async (request, reply) =>  {


    try{

        await pool.query(`CREATE TABLE USUARIO(
                ID SERIAL PRIMARY KEY,
                NOME VARCHAR(100) NOT NULL,
                SENHA VARCHAR(100) NOT NULL,
                EMAIL VARCHAR(100) NOT NULL UNIQUE
            );`)

        reply.status(200).send('Tabela criada com sucesso')
    }
    catch(e){
        reply.status(500).send(`Erro ao criar tabela usuários: ${e}`)
    }
})


server.get('/teste', (request, reply) => {

    reply.send('servidor no ar funcionando normalmente')
})





server.listen({
    port: parseInt(process.env.PORT) || 3000,
    host: '0.0.0.0'
})


