const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


const btnLogin = document.querySelector("#btn-login");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const users = [
  {
    email: "admin@hotmail.com",
    password: "1234",
    balance: 150
  },
  {
    email: "mali@hotmail.com",
    password: "5678",
    balance: 75
  },
  {
    email: "gera@hotmail.com",
    password: "2468",
    balance: 50
  },
  {
    email: "maui@hotmail.com",
    password: "2468",
    balance: 30
  }
];

btnLogin.addEventListener("click", function (event) {
  event.preventDefault(); 

  let email = emailInput.value;
  let password = passwordInput.value;

  let loggedUser = users.find((user) => user.email === email && user.password === password);

  if (loggedUser) {

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    window.location.href ="../PaginaSegundaria/Principal.html";

  } else {
    alert("Error de inicio de sesión. Por favor, inténtalo de nuevo.");
  }
});