// Desenvolvido por Emerson

// manipular nosso menu de navegação
const url_atual = window.location.pathname

if(url_atual == '/') {
    document.getElementById('menuHome').className = 'nav-link text-whit active'
} else if(url_atual == '/noticias') {
    document.getElementById('menuNoticias').className = 'nav-link text-whit active'
} else if(url_atual == '/admin') {
    document.getElementById('menuAdmin').className = 'nav-link text-whit active'
}