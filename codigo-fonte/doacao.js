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

    // Here you can add any further actions such as sending the data to a server
}
