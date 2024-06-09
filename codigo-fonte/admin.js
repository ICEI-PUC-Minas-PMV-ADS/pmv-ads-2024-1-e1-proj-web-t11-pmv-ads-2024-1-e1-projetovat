function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatarData(data) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return data.toLocaleDateString('pt-BR', options);
}

const voluntarios = JSON.parse(localStorage.getItem('@VAT:voluntarios')) ?? []

const ongs = JSON.parse(localStorage.getItem('@VAT:ongs')) ?? []

const doacoes = JSON.parse(localStorage.getItem('@VAT:doacoes_recebidas')) ?? []

const valorTotalDoacoes = doacoes.reduce((acc, doacao) => acc + Number(doacao.donationAmount), 0)
console.log(valorTotalDoacoes)
const numDoacoes = doacoes.length

document.getElementById('quantidade_voluntarios').textContent = voluntarios ? voluntarios.length : 0

document.getElementById('quantidade_ongs').textContent = ongs ? ongs.length : 0

document.getElementById('total_valor_doacoes').textContent = doacoes ? formatarMoeda(Number(valorTotalDoacoes)) : formatarMoeda(0)

document.getElementById('num_doacoes').textContent = numDoacoes ? numDoacoes : 0

document.getElementById('date').textContent = formatarData(new Date())

document.getElementById('tbody-ongs').innerHTML = ongs.map((ong, index) => {
    return `<tr>
                <td>${index + 1}</td>
                <td>${ong.razaoSocial}</td>
                <td>${ong.email}</td>
                <td>${ong.telefoneCelular}</td>
            </tr>`
}).join('')

document.getElementById('tbody-voluntarios').innerHTML = voluntarios.map((voluntario, index) => {
    return `<tr>
                <td>${index + 1}</td>
                <td>${voluntario.nome}</td>
                <td>${voluntario.email}</td>
                <td>${voluntario.telefone}</td>
            </tr>`
}).join('')



