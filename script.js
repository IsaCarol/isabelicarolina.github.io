document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('theme-switcher');
    const body = document.body;

    if (!switcher) return; 

    // Ícones do Font Awesome
    const sunIcon = '<i class="fas fa-sun"></i>';
    const moonIcon = '<i class="fas fa-moon"></i>';

    // 1. Carregar a preferência do usuário
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        switcher.innerHTML = moonIcon; // Se está claro, mostra a lua
    } else {
        // Padrão é Dark Mode
        switcher.innerHTML = sunIcon; // Se está escuro, mostra o sol
    }

    // 2. Adicionar o evento de clique
    switcher.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            switcher.innerHTML = moonIcon; 
        } else {
            localStorage.setItem('theme', 'dark');
            switcher.innerHTML = sunIcon; 
        }
    });
});
