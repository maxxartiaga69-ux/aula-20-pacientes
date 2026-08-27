import express from 'express'
import cors from 'cors'

import { pacientes } from './db/schema.js'
import { db } from './db/index.js'
import { v4 as gerarSenha } from 'uuid'
import {corsOptions} from './corsOptions.js'


const app = express()

app.use(helmetMiddleware)
app.use(express.json())
app.use(corsOptions)

app.post('/pacientes', async (req, res) => {
    console.log(req.body)
    const novo_paciente = {
        id: gerarSenha(),
        nome: req.body.nome,
        idade: req.body.idade,
        urgencia: req.body.urgencia
    }
    await db.insert(pacientes).values(novo_paciente)
    res.status(201).json(novo_paciente)
})

app.listen(3030, () => { console.log("Servidor rodando na porta 3030") })
