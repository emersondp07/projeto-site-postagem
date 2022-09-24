// npm init
// git init
// npm i express
// npm i -g nodemon
// npm i ejs

// recuperando o modulo de configuração do server
const app = require('./config/server');

// rota home
app.get('/', (req, res) => {
    res.render('home/index')
});

// rota notícias
app.get('/noticias', (req, res) => {
    res.render('news/noticias')
});

// rota admin
app.get('/admin', (req, res) => {
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
});