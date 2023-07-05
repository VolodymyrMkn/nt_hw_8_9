document.addEventListener('DOMContentLoaded', function (){
    let form = document.querySelector('.password-form')
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        passwordsVerification()
    })
})

function showPassword(inputNumber) {
    let passwordInput = document.getElementById("password" + inputNumber);
    let passwordIcon = document.getElementById("passwordIcon"+ inputNumber);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.className = "fas fa-eye-slash icon-password";
    } else {
        passwordInput.type = "password";
        passwordIcon.className = "fas fa-eye icon-password";
    }
}

function passwordsVerification() {
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (password1 === password2) {
        alert("You are welcome");
    } else {
        alert("The passwords don't match");
    }
}