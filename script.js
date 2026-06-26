
// ==========================================================================
// 1. LÓGICA DE ALTERNÂNCIA DE TEMA (CLARO / ESCURO)
// ==========================================================================

const botaoTema = document.getElementById('toggleTema');

// Verifica se o usuário já tinha uma preferência salva no navegador antes
const temaSalvo = localStorage.getItem('modoEscuro');

// Se a preferência salva for 'ativo', já inicia a página no modo escuro
if (temaSalvo === 'ativo') {
    document.body.classList.add('dark-mode');
    if (botaoTema) botaoTema.textContent = "☀️ Claro";
}

// Ouvinte de clique para o botão de alternar tema
if (botaoTema) {
    botaoTema.addEventListener('click', function() {
        // Alterna a classe 'dark-mode' no elemento <body>
        document.body.classList.toggle('dark-mode');
        
        // Verifica se o modo escuro está ativo após o clique para atualizar o botão e salvar
        if (document.body.classList.contains('dark-mode')) {
            botaoTema.textContent = "☀️ Claro";
            localStorage.setItem('modoEscuro', 'ativo'); // Salva a escolha do usuário
        } else {
            botaoTema.textContent = "🌙 Escuro";
            localStorage.setItem('modoEscuro', 'inativo'); // Salva a escolha do usuário
        }
    });
}


// ==========================================================================
// 2. VALIDAÇÃO DO FORMULÁRIO DE CONTATO (Apenas se o formulário existir na página)
// ==========================================================================

const formulario = document.getElementById('formContato');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        // Impede o recarregamento da página nativo do formulário
        evento.preventDefault();

        // Captura os valores inseridos limpando espaços extras
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validação 1: Verifica campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return; 
        }

        // Validação 2: Formato do e-mail usando Expressão Regular (Regex)
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert("Insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
            return; 
        }

        // Simulação de envio bem-sucedido
        alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

        // Limpa os campos do formulário
        formulario.reset();
    });
}