// const loginForm = document.querySelector("#login-form");
// const loginInput = loginform.querySelector("input"); // loginForm의 타입이 HTML Element 이므로 loginForm에서도 querySelector 사용가능
// const loginButton = loginform.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.dir(loginInput.value); // document의 value에 입력 값 있음
}
loginButton.addEventListener("click", onLoginBtnClick)