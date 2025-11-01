/* RESET BÁSICO E VARIÁVEIS */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Faz o scroll ser suave, como no Iuricode */
    scroll-behavior: smooth;
}

:root {
    /* Cores do Dark Mode */
    --cor-fundo: #0c0c0c;       /* Preto muito escuro */
    --cor-texto-claro: #f0f0f0; /* Branco sujo */
    --cor-destaque: #007bff;    /* Azul para links/destaques - você pode trocar por um verde-limão ou outra cor vibrante */
    --cor-secundaria: #888;     /* Cinza suave para parágrafos */
    --cor-linha: #222;          /* Linhas separadoras */
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.7;
    background-color: var(--cor-fundo);
    color: var(--cor-texto-claro);
}

/* UTILITÁRIOS */
.container {
    max-width: 900px; /* Mais estreito para focar no conteúdo, como o dele */
    margin: 0 auto;
    padding: 0 20px;
}

.secao {
    padding: 80px 0;
    border-bottom: 1px solid var(--cor-linha);
}

.secao:last-child {
    border-bottom: none;
}

/* CABEÇALHO/INTRODUÇÃO (O "HERO" vira a primeira seção) */
.hero {
    padding-top: 150px;
    padding-bottom: 80px;
    min-height: 100vh; /* Ocupa a altura total da tela */
    display: flex;
    align-items: center; /* Centraliza verticalmente o conteúdo */
}

.hero h1 {
    font-size: 4em;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 1.1;
}

.hero p {
    font-size: 1.5em;
    color: var(--cor-secundaria);
    margin-bottom: 30px;
    max-width: 600px;
}

/* BOTÕES / LINKS */
.link-padrao {
    color: var(--cor-destaque);
    text-decoration: none;
    font-weight: 600;
    padding-bottom: 2px;
    border-bottom: 2px solid var(--cor-destaque);
    transition: color 0.3s, border-color 0.3s;
}

.link-padrao:hover {
    color: var(--cor-texto-claro);
    border-bottom-color: var(--cor-texto-claro);
}

/* SEÇÃO DE PROJETOS */
.lista-projetos {
    list-style: none;
    text-align: left;
}

.lista-projetos li {
    margin-bottom: 40px;
}

.lista-projetos h4 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 5px;
}

.lista-projetos .detalhes {
    font-size: 1em;
    color: var(--cor-secundaria);
}

.lista-projetos a {
    display: block;
    font-size: 0.9em;
    margin-top: 5px;
    color: var(--cor-destaque);
}

/* SEÇÃO CONTATO/FOOTER */
footer {
    padding: 40px 0;
    text-align: left;
    font-size: 1.2em;
}

footer a {
    color: var(--cor-destaque);
    text-decoration: none;
    margin-right: 15px;
}

/* Responsividade Básica */
@media (max-width: 768px) {
    .hero {
        padding-top: 80px;
    }
    .hero h1 {
        font-size: 2.5em;
    }
    .hero p {
        font-size: 1.2em;
    }
    .lista-projetos h4 {
        font-size: 1.5em;
    }
}
