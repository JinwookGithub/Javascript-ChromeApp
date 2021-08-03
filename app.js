// const loginForm = document.querySelector("#login-form");
// const loginInput = loginform.querySelector("input"); // loginForm의 타입이 HTML Element 이므로 loginForm에서도 querySelector 사용가능
// const loginButton = loginform.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    // greeting.innerText = "Hello " + username;// string 연산. 아래와 동일.
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);