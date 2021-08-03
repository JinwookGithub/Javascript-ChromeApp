// const loginForm = document.querySelector("#login-form");
// const loginInput = loginform.querySelector("input"); // loginForm의 타입이 HTML Element 이므로 loginForm에서도 querySelector 사용가능
// const loginButton = loginform.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);