const isAdmin = localStorage.getItem("@VAT:admin")

if (isAdmin !== "true") {
    window.location.href = '../home/home.html';
}

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

const apenasVoluntarios = voluntarios.filter(voluntario => voluntario.email !== 'admin@projetovat.com.br')

const ongs = JSON.parse(localStorage.getItem('@VAT:ongs')) ?? []

const valorDoacoes = JSON.parse(localStorage.getItem('@VAT:doacoes_recebidas')) ?? []

const valorTotalDoacoes = valorDoacoes.reduce((acc, doacao) => acc + doacao.valorTotal, 0)

const numDoacoes = valorDoacoes.reduce((acc, doacao) => acc + doacao.doacoes.length, 0)

document.getElementById('quantidade_voluntarios').textContent = voluntarios ? apenasVoluntarios.length : 0

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

document.getElementById('tbody-voluntarios').innerHTML = apenasVoluntarios.map((voluntario, index) => {
    return `<tr>
                <td>${index + 1}</td>
                <td>${voluntario.nome}</td>
                <td>${voluntario.email}</td>
                <td>${voluntario.telefone}</td>
            </tr>`
}).join('')





// const ctx = document.getElementById('pieChart').getContext('2d');

// const data = {
//     labels: ['Voluntários', 'ONGs', 'Doações'],
//     datasets: [{
//         data: [voluntarios.length, ongs.length, numDoacoes],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
//     }]
// };

// const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         tooltip: {
//             callbacks: {
//                 label: function(context) {
//                     let label = context.label || '';
//                     if (label) {
//                         label += ': ';
//                     }
//                     if (context.parsed !== null) {
//                         label += context.parsed;
//                     }
//                     return label;
//                 }
//             }
//         }
//     }
// };

// new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: options
// });