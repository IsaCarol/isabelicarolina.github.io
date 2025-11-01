document.addEventListener('DOMContentLoaded', () => {
    // Obter elementos
    const switcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Se o botão não for encontrado, parar o script
    if (!switcher) return; 

    // 1. Carregar a preferência do usuário (salva no navegador)
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        switcher.innerHTML = '🌙'; // Se está claro, mostra a lua (para ir para o Dark)
    } else {
        // Padrão é Dark Mode
        switcher.innerHTML = '☀️'; // Se está escuro, mostra o sol (para ir para o Light)
    }

    // 2. Adicionar o evento de clique
    switcher.addEventListener('click', () => {
        // Alternar a classe 'light-mode'
        body.classList.toggle('light-mode');

        // 3. Salvar a preferência e atualizar o ícone
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            switcher.innerHTML = '🌙'; 
        } else {
            localStorage.setItem('theme', 'dark');
            switcher.innerHTML = '☀️'; 
        }
    });
});
