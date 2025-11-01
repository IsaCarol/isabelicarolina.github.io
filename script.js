// Exemplo simples de JavaScript para interatividade futura.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfólio carregado com sucesso!");

    // Você pode adicionar código aqui, por exemplo:
    // 1. Um evento de scroll para mudar o menu de navegação
    // 2. Um modal para exibir detalhes dos projetos
    
    // Exemplo de uma simples saudação
    const horaAtual = new Date().getHours();
    let saudacao;
    if (horaAtual < 12) {
        saudacao = "Bom dia!";
    } else if (horaAtual < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    // Você pode exibir essa saudação em um elemento específico do HTML
    // document.getElementById('saudacao-texto').textContent = saudacao;
});
