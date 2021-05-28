const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana omnistack',
        aluno: 'Carlos Martins'
    });
});

app.listen(3333, () => {
    console.log("Rodando em http://localhost:3333");
});