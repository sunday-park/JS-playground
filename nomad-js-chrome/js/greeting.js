const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const resetBtn = document.querySelector("#reset-btn");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const greetingHandler = {
    onLoginSubmit: (event) => {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASS);
        localStorage.setItem(USERNAME_KEY, loginInput.value);
        paintGreetings();
    },
    paintGreetings: () => {
        const username = localStorage.getItem(USERNAME_KEY);
        greeting.innerText = `Good Morning ${username}`;
        greeting.classList.remove(HIDDEN_CLASS);
    },
}

const savedName = localStorage.getItem(USERNAME_KEY);
if (savedName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", greetingHandler.onLoginSubmit)
} else {
    greetingHandler.paintGreetings(savedName);
};