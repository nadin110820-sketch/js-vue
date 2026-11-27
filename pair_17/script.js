let form = document.querySelector('#register-form');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');
let terms = document.querySelector('#terms');
let result = document.querySelector('#result');
function showError(input, errorId, message){
    input.classList.remove('valid');
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
    document.querySelector(errorId).textContent = message;
    return false;
}
function showSuccess(input, errorId){
    input.classList.remove('invalid');
    input.classList.add('valid');
    input.setAttribute('aria-invalid', 'false');
    document.querySelector(errorId).textContent = '';
    return false
}
function validateName(){
    if(userName.value.trim.length < 2) {
        return showError(userName, '#userName-error', 'not less than 2')
    }
    return showSuccess(userName)
}
function validateEmail(){
    if(email.value.trim() === ''){
        return showError(email, '#email-error', "Konkretna")
    }
}
function validatePassword(){
    if(password.value.trim() === '' || password.value.trim().length < 8){
        return showError(password, '#password-error', 'not less than 8')
    }
    return showSuccess((password))
}
function validateConfirmPassword(){
    if(confirmPassword.value.trim() === '' || confirmPassword.value !== password.value){
        return showError(confirmPassword, '#confirm-error')
    }
    return showSuccess(confirmPassword)
}
form.addEventListener('submit')