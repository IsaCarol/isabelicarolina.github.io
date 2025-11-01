document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.getElementById('theme-switcher');
    const body = document.body;

    // 1. Verificar a preferência do usuário (salva no localStorage)
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        switcher.innerHTML = '🌙'; // Altera o ícone para Lua (Dark Mode)
    } else {
        // Padrão é Dark Mode
        switcher.innerHTML = '☀️'; // Altera o ícone para Sol (Light Mode)
    }

    // 2. Adicionar o evento de clique ao botão
    switcher.addEventListener('click', () => {
        // Alternar a classe light-mode no body
        body.classList.toggle('light-mode');

        // 3. Salvar e atualizar o ícone
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            switcher.innerHTML = '🌙'; // Modo Light ativo, mostrar ícone da Lua
        } else {
            localStorage.setItem('theme', 'dark');
            switcher.innerHTML = '☀️'; // Modo Dark ativo, mostrar ícone do Sol
        }
    });
});
