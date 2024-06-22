document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario_contato");
    const nome = document.getElementById("Enviar");
    const telefone = document.getElementById("phone");
    const email = document.getElementById("form_email");
    const cidade = document.getElementById("form_cidade");
    const mensagem = document.getElementById("seu_texto");

    form.addEventListener("submit", function(event) {
        if (!nome.value.trim() || !telefone.value.trim() || !email.value.trim() || !cidade.value.trim() || !mensagem.value.trim()) {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        }
    });
});
