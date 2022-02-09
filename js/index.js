let emailValue;
let passwordValue;

let emailElem = document.getElementById('email');
emailElem.addEventListener('change', function(event) {
    emailValue = event.target.value;
});

let passwordElem = document.getElementById('password');
passwordElem.addEventListener('change', function(event) {
    passwordValue = event.target.value;
});

function onClickBtnEntry() {  
    console.log("Email: " + emailValue);
    console.log("Password: " + passwordValue);
}

let btnShowPasswordElem = document.getElementById('btn-show-password');

function onClickBtnShowPass() {
   
    if (passwordElem.getAttribute('type') === 'password') {

        passwordElem.setAttribute('type', 'text');
      
        btnShowPasswordElem.innerText = "Ocultar contraseña";
    } else {
  
        passwordElem.setAttribute('type', 'password');

        btnShowPasswordElem.innerText = "Mostrar contraseña";
    }
}