const login_in_btn = document.querySelector('#login-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click",()=>{
    container.classList.add('sign-up-mode')
});
login_in_btn.addEventListener("click",()=>{
    container.classList.remove('sign-up-mode')
});