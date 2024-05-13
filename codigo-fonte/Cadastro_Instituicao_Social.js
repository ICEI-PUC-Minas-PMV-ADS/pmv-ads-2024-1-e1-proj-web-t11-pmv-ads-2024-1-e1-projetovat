const form = document.querySelector("#form")
const cnpjInput = document.querySelector("#CNPJ");
const emailInput = document.querySelector("#Email");
const razaosocialInput = document.querySelector("#RazãoSocial");
const dateInput = document.querySelector("#DtCriação");
const nomefantasiaInput = document.querySelector("#NomeFantasia");
const generoInput = document.querySelector("#Gênero");
const celularInput = document.querySelector("#TelCelular");
const passwordInput = document.querySelector("#Senha");

  
form.addEventListener("submit", (event) => {
    event.preventDefault();
    //Verifica se o nome esta vazio
    if (cnpjInput.value === "" ) {
      alert ("Preencha o campo CNPJ");
      return;
    }
    if (emailInput.value === "" ) {
      alert ("Preencha o campo de Email");
      return;
    }
    if (razaosocialInput.value === "" ) {
      alert ("Preencha o campo Razão Social");
      return;
    }
    if (dateInput.value === "" ) {
      alert ("Preencha o campo Data de Criação");
      return;
    }
    if (nomefantasiaInput.value === "" ) {
      alert ("Preencha o campo Nome Fantasia");
      return;
    }
    if (generoInput.value === "" ) {
      alert ("Preencha o campo Gênero");
      return;
    }
    if (celularInput.value === "" ) {
      alert ("Preencha o campo Tel Celular");
      return;
    }
    if (passwordInput.value === "" ) {
      alert ("Preencha o campo Senha");
      return;
    }
     form.submit();
  });
