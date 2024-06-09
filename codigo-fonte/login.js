document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Tentativa de login:', username, password);

    if (username === "usuario" && password === "senha") {
        alert('Login bem-sucedido!');
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