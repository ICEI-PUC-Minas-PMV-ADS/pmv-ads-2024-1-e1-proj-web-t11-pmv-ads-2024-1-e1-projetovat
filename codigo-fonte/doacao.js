function submitDonation() {
    const form = document.getElementById('donationForm');
    const donationAmount = form.querySelector('#campo-valor').value;
    const institution = form.querySelector('#campo-instituicao').value;

    if (!donationAmount || !institution) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    console.log({ donationAmount, institution });

    alert(`Doação confirmada!\nValor: R$${donationAmount}\nInstituição: ${institution}`);

    // Redireciona para a página de pagamento
    window.location.href = "pagamentodoacao.html";
}
document.addEventListener("DOMContentLoaded", function() {
    const instagramIcon = document.getElementById("instagram-icon");
    
    if (instagramIcon) {
        instagramIcon.addEventListener("click", function() {
            window.open("https://www.instagram.com/projetovat/", "_blank");
        });
    }
});
