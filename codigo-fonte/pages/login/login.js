document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Tentativa de login:', username, password);

    let voluntarios = JSON.parse(localStorage.getItem('@VAT:voluntarios'))

    console.log(voluntarios)
  
    if (!voluntarios) {
      voluntarios = []
    }

    const voluntario = voluntarios.find(acharVoluntario => acharVoluntario.email === username && acharVoluntario.senha === password)

    let ongs = JSON.parse(localStorage.getItem('@VAT:ongs'))

    console.log(ongs)
  
    if (!ongs) {
      ongs = []
    }

    const ong = ongs.find(acharOng => acharOng.email === username && acharOng.senha === password)

    if (voluntario || ong) {
        if (username === "admin@projetovat.com.br") {
            localStorage.setItem("@VAT:admin", "true")
        }

        localStorage.setItem("@VAT:usuario", JSON.stringify({username, login:true}))

        alert('Login bem-sucedido!');

        window.location.href = '../home/home.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    console.log('Verificação de login:', storedUsername, storedPassword);

    if (storedUsername && storedPassword) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('usernameDisplay').innerText = storedUsername;
    }
});



function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'login.html';
}