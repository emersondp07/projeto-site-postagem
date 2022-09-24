// npm init
// git init
// npm i express
// npm i -g nodemon
// npm i ejs

// recuperando o modulo de configuração do server
const app = require('./config/server');

// recuperando o modulo de base de dados
const noticias = require('./mockup');

// rota home
app.get('/', (req, res) => {
    res.render('home/index', { noticias: noticias.slice(0, 3) })
});

// rota notícias
app.get('/noticias', (req, res) => {
    // passamos atravez de um JSON todas as noticias
    res.render('news/noticias', { noticias: noticias })
});

//rota notícia
app.get('/noticia', (req, res) => {
    // recuperar atravez do método GET o ID
    const id = req.query.id

    res.render('news/noticia', { noticia: noticias[id] })
})

// rota admin
app.get('/admin', (req, res) => {
    res.render('admin/form_add_noticia')
})

app.listen(3000, () => {
    console.log('Servidor rodando com express')
});