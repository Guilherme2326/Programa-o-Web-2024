// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.engine('html', bodyParser());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
// Configuração para permitir o uso de arquivos estáticos na pasta views
// app.use(express.static(__dirname + '/views'));

// Configuração para lidar com o corpo das solicitações
// app.use(bodyParser.urlencoded({ extended: true }));

// Rota para renderizar o formulário
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Rota para receber os dados do formulário e renderizar a página de dados
// app.post('/dados', (req, res) => {
//     const { nome, endereco, telefone, data } = req.body;
//     res.render('dados', { nome, endereco, telefone, data });
// });

app.post('/dados', function (req, res) {
    let dados = req.body;
    res.render('dados.html', {dados});
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
