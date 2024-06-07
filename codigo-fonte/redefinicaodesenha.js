const form = document.getElementById("form");
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation");

''
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () => {
  checkInputEmail();
})


function checkInputEmail() {
  const emailValue = email.value;

  if (emailValue === "") {
    errorInput(email, "O email é obrigatório.")
  } else {
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPassword() {
  const passwordValue = password.value;
  const hasUppercase = /[A-Z]/.test(passwordValue);
  const hasLowercase = /[a-z]/.test(passwordValue);
  const hasNumber = /[0-9]/.test(passwordValue);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passwordValue);

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.")
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
  } else if (!hasUppercase) {
    errorInput(password, "A senha precisa conter pelo menos uma letra maiúscula.")
  } else if (!hasLowercase) {
    errorInput(password, "A senha precisa conter pelo menos uma letra minúscula.")
  } else if (!hasNumber) {
    errorInput(password, "A senha precisa conter pelo menos um número.")
  } else if (!hasSpecialChar) {
    errorInput(password, "A senha precisa conter pelo menos um caractere especial.")
  } else {
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}


function checkInputPasswordConfirmation() {
  const passwordValue = password.value;
  const confirmationPasswordValue = passwordConfirmation.value;

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.")
  } else {
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
  }
}


function checkForm() {
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content"
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
    form.reset();
  }
}


function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"
}
