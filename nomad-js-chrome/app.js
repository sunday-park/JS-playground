const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    
}

loginForm.addEventListener("submit", onLoginSubmit)