function cadastrar() {

  if (Nome.value === "" || Nome.value.length < 8) {
    alert("Preencha seu nome completo!");
    Nome.focus();
    return;
  }

  if (Email.value == "") {
    alert("Preencha o Email!");
    return;
  }

  if (TelCelular.value === "" || TelCelular.value.length < 11) {
    alert("Preencha o Tel Celular !");
    return;
  }

  if (Senha.value === "" || Senha.value.length < 6) {
    alert("Preencha a Senha corretamente!");
    return;
  }

  console.log(confirmaSenha, Senha)

  if (confirmaSenha.value !== Senha.value) {
    alert("As senhas não são iguais.");
    return;
  }

  console.log({ Nome: Nome.value, TelCelular: TelCelular.value, Email: Email.value, Senha: Senha.value, confirmaSenha: confirmaSenha.value })

  let voluntarios = JSON.parse(localStorage.getItem('@VAT:voluntarios'))

  console.log(voluntarios)

  if (!voluntarios) {
    voluntarios = []
  }

  voluntarios.push({
    nome: Nome.value,
    telefone: TelCelular.value,
    email: Email.value,
    senha: Senha.value,
  })

  localStorage.setItem("@VAT:voluntarios", JSON.stringify(voluntarios))

  alert("Cadastro realizado com sucesso!");

}

