function submitDonation() {
    const form = document.getElementById('donationForm');
    const donationAmount = form.querySelector('#campo-valor').value;
    const institution = form.querySelector('#campo-instituicao').value;

    if (!donationAmount || !institution) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    localStorage.setItem('@VAT:doacao', JSON.stringify({ donationAmount, institution }));

    window.location.href= "../pagamento/pagamento.html";
}
