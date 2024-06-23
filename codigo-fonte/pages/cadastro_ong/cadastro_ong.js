function cadastrar() {

  if (CNPJ.value == "" || CNPJ.value.length !== 14 || /^(\d)\1+$/.test(CNPJ.value)) {
    alert("Preencha o CNPJ corretamente!");
    CNPJ.focus();
    return;
  }

  if (Email.value == "") {
    alert("Preencha o Email!");
    return;
  }

  if (RazãoSocial.value === "" || /\d/.test(RazãoSocial.value)) {
    alert("Preencha a Razão Social corretamente!");
    return;
  }
  if (DtCriação.value === "") {
    alert("Preencha a Data de Criação!");
    return;
  }
  if (NomeFantasia.value === "" || NomeFantasia.value.length < 3) {
    alert("Preencha o Nome Fantasia corretamente!");
    return;
  }
  if (TelCelular.value === "" || TelCelular.value.length < 11) {
    alert("Preencha o Tel Celular corretamente!")
    return;
  }
  if (TelFixo.value === "" || TelFixo.value.length < 10) {
    alert("Preencha o Tel Fixo corretamente");
    return;
  }
  if (Senha.value === "" || Senha.value.length < 6) {
    alert("Preencha a Senha corretamente!");
    return;
  }

  let ongs = JSON.parse(localStorage.getItem('@VAT:ongs')) ?? []

  console.log({
    cnpj: CNPJ.value,
    email: Email.value,
    razaoSocial: RazãoSocial.value,
    dataCriacao: DtCriação.value,
    nomeFantasia: NomeFantasia.value,
    telefoneCelular: TelCelular.value,
    telefoneFixo: TelFixo.value,
    senha: Senha.value,
    inscricaoMunicipal: InscMunicipal.value,
    cpf: CPF.value,
    nomeResponsavel: nameRSP.value,
  })

  ongs.push({
    cnpj: CNPJ.value,
    email: Email.value,
    razaoSocial: RazãoSocial.value,
    dataCriacao: DtCriação.value,
    nomeFantasia: NomeFantasia.value,
    telefoneCelular: TelCelular.value,
    telefoneFixo: TelFixo.value,
    senha: Senha.value,
    inscricaoMunicipal: InscMunicipal.value,
    cpf: CPF.value,
    nomeResponsavel: nameRSP.value,
  })

  
  localStorage.setItem("@VAT:ongs", JSON.stringify(ongs))


  alert("Instituição cadastrada com sucesso!");
}

function redirecionarInicio() {
  window.location.href = "../cadastro_voluntario/cadastro_voluntario.html";
}


