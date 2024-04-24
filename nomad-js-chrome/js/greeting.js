const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const resetBtn = document.querySelector("#reset-btn");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
};

const paintGreetings = () => {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Good Morning ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);

    resetBtn.classList.remove(HIDDEN_CLASS);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings(savedUsername);
};