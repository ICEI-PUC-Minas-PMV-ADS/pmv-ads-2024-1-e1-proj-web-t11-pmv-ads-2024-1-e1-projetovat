const form = document.getElementById("form");
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

// email.addEventListener("blur", () => {
//   checkInputEmail();
// })


function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    const emailError = document.getElementById('email-error')

    errorInput(emailError, "O email é obrigatório.")

    return false
  } 

  return true
}

function checkInputPassword() {
  const passwordValue = password.value;
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue);

  const passwordError = document.getElementById('senha-error')

  if (passwordValue === "") {
    errorInput(passwordError, "A senha é obrigatória.")

    return false
  } else if (passwordValue.length < 8) {
    errorInput(passwordError, "A senha precisa ter no mínimo 8 caracteres.")

    return false
  } else if (!hasUppercase) {
    errorInput(passwordError, "A senha precisa conter pelo menos uma letra maiúscula.")

    return false
  } else if (!hasLowercase) {
    errorInput(passwordError, "A senha precisa conter pelo menos uma letra minúscula.")

    return false
  } else if (!hasNumber) {
    errorInput(passwordError, "A senha precisa conter pelo menos um número.")

    return false
  } else if (!hasSpecialChar) {
    errorInput(passwordError, "A senha precisa conter pelo menos um caractere especial.")

    return false
  } 

  return true
}


function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  const confirmationPasswordError = document.getElementById('confirmacao-senha-error')

  if (confirmationPasswordValue === "") {
    errorInput(confirmationPasswordError, "A confirmação de senha é obrigatória.")

    return false
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(confirmationPasswordError, "As senhas não são iguais.")

    return false
  } 

  return true
}


function checkForm() {
  const emailError = document.getElementById('email-error')
  const passwordError = document.getElementById('senha-error')
  const confirmationPasswordError = document.getElementById('confirmacao-senha-error')

  errorInput(emailError, '')
  errorInput(passwordError, '')
  errorInput(confirmationPasswordError, '')

  const emailIsValid = checkInputEmail();
  const passwordIsValid = checkInputPassword();
  const confirmationPasswordIsValid = checkInputPasswordConfirmation();

  

  if (emailIsValid && passwordIsValid && confirmationPasswordIsValid) {
    alert("CADASTRADO COM SUCESSO!");

    form.reset();
  }
}


function errorInput(element, message) {
 
  element.innerText = message;

  element.className = "form-content error"
}