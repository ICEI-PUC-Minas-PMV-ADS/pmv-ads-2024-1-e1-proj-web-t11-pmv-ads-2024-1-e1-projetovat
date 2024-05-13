const $ = (elemento) => document.querySelector(elemento);

$("#cadastro").addEventListener("click", (ev) => {
  ev.preventDefault();
  example@domain.com : true

  @helloworld.com : false
  const email = $("#email").value;
  const senha = $("#senha").value;
  const confirmaSenha = $("#confirmasenha").value;

  const senhaConfirmada = senha === confirmaSenha;

  if (!senhaConfirmada) {
    alert("Sua confirmação de senha não confere.\nPor favor verifique.");
    return;
  }

  const tudoPreenchido =
    email.length !== 0 &&
    senhaConfirmada.length !== 0 &&
    senha.length !== 0;

  if (tudoPreenchido === false) {
    alert("Preencha todos os campos antes de enviar.");
    return;
  }
  if(new String(pfSenha.getPassword()).equals(new String(pfCSenha.getPassword()))) {
    JOptionPane.showMessageDialog(null, "Senhas conferem!");
} else {
    JOptionPane.showMessageDialog(null, "Senhas não conferem!");
}

  const usuarioCadastrado = {
    email,
    senha,
    confirmaSenha,
  };

  const string = JSON.stringify(usuarioCadastrado);
  localStorage.setItem("usuario", string);

  alert("Cadastro realizado com sucesso!");
  window.location.href = "./index.html";
  
});
