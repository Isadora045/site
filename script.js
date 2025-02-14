document.addEventListener("DOMContentLoaded", function() {
    // Carregar estatísticas
    const statsList = document.getElementById('stats-list');
    const statistics = [
        "Mais de 7 milhões de pessoas morrem anualmente devido à poluição do ar.",
        "As cidades com maior poluição do ar estão em países em desenvolvimento.",
        "O transporte é responsável por cerca de 14% das emissões globais de gases de efeito estufa.",
        "A poluição do ar pode reduzir a expectativa de vida em até 3 anos.",
        "Cerca de 90% da população mundial respira ar poluído."
    ];

    statistics.forEach(stat => {
        const li = document.createElement('li');
        li.textContent = stat;
        statsList.appendChild(li);
    });

    // Gerenciar envio do formulário
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aqui você pode adicionar lógica para enviar os dados para um servidor
        // Por enquanto, apenas exibimos uma mensagem de sucesso
        const responseDiv = document.getElementById('form-response');
        responseDiv.textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
        contactForm.reset(); // Limpa o formulário
    });
});