function checkUsuario() {
    const usuario = localStorage.getItem("@VAT:usuario")

    if (usuario) {
        localStorage.removeItem("@VAT:usuario")

        localStorage.removeItem("@VAT:admin")

        alert('Você foi desconectado!')

        window.location.href = '../pages/home/home.html';
    } else {
        window.location.href = '../pages/login/login.html';
    }
}

function checkIsAdmin() {
    console.log('checkisadmin')
    const isAdmin = localStorage.getItem("@VAT:admin")

    if (isAdmin === "true") {
        const adminMenu = document.getElementById("admin-menu")

        if (adminMenu) {
            adminMenu.style.display = "visible";
        }
    } else {

        const adminMenu = document.getElementById("admin-menu")

        if (adminMenu) {
            adminMenu.style.display = "none";
        }

    }
}

function checkLogin() {
    console.log('checklogin')
    const usuario = localStorage.getItem("@VAT:usuario")

    if (usuario) {
        document.getElementById('login-logout').innerText = 'Sair'

    } else {
        document.getElementById('login-logout').innerText = 'Login'
    }
}

function redirecionarCadastroVoluntario(){
    window.location.href = '../pages/cadastro_voluntario/cadastro_voluntario.html';
}

function redirecionarCadastroOng(){
    window.location.href = '../pages/cadastro_ong/cadastro_ong.html';
}

checkIsAdmin()

checkLogin()


