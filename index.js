// npm init
// git init
// npm i express
// npm i -g nodemon
// npm i ejs
// npm i pg
// npm i express-session

// recuperando o modulo de configuração do server
const app = require('./config/server');

// recuperando o modulo de base de dados
const noticias = require('./mockup');

// recuperando o modulo de conexão com o Postgre
const db = require('./config/dbConnection')

// rota home
app.get('/', (req, res) => {
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3', (error, result) => {
        res.render('home/index', { noticias: result.rows })
    })
});

// rota notícias
app.get('/noticias', (req, res) => {
    db.query('SELECT * FROM noticias ORDER BY id_noticia DESC', (error, result) => {
        // passamos atravez de um JSON todas as noticias
        res.render('news/noticias', { noticias: result.rows })
    })
});

//rota notícia
app.get('/noticia', (req, res) => {
    // recuperar atravez do método GET o ID
    const id = req.query.id
    
    db.query('SELECT * FROM noticias WHERE id_noticia = $1', [id], (error, result) => {
        res.render('news/noticia', { noticia: result.rows[0] })
    })
})

// rota de autenticação
app.post('/admin/autenticar', (req, res) => {
    const { usuario, senha  } = req.body;

    if(usuario == 'root' && senha == 'edp100996') {
        req.session.autorizado = true
    }

    res.redirect('/admin')
})

// rota sair da área autenticada
app.get('/admin/sair', (req, res) => {
    req.session.destroy( error => {/*{console.log(erro)*/})
    res.redirect('/admin')
})

// rota admin
app.get('/admin', (req, res) => {
    const autorizado = req.session.autorizado
    if(req.session.autorizado == true){
    res.render('admin/form_add_noticia', { autorizado: autorizado })
    } else {
        res.render('admin/login')
    }
})

// rota salvar noticia
app.post('/admin/salvar-noticia', (req, res) => {
    const { titulo, conteudo } = req.body

    // console.log(titulo, conteudo)

    db.query('INSERT INTO noticias(titulo, conteudo) VALUES($1, $2)', [titulo, conteudo], (error, result) => {
        // redireciona para outra rota e remove as informações do corpo da requisição
        res.redirect('/noticias')
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor rodando com express')
});