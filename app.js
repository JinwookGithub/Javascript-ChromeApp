const hello1s = document.getElementsByClassName("hello1"); // class name으로 element 찾음
console.log(hello1s); // array로 전달됨

const hello2s = document.getElementsByTagName("h1"); // tag이름으로 찾음
console.log(hello2s); // 여전히 array 형태. hello2.title 이런형태로 사용불가(배열이니까)

const title2 = document.querySelector(".hello2 h1"); // CSS 형태로 선택가능(CSS selector). .hello h1 -> hello class안의 h1을 찾음
console.log(title2); // <h1> Grab me! </h1> 가 출력됨. 1개의 element를 출력해줌. 각 element 선택가능
title2.innerText = "hello"; // 하나씩 선택하면 이렇게 사용가능.

const title1 = document.querySelector(".hello1 h1"); // CSS 형태로 선택가능(CSS selector). .hello h1 -> hello class안의 h1을 찾을
console.log(title1); // <h1>Grab me 1!</h1> 출력. 첫번째 것만 가져옴.(blueprint 설명에도 나와있음)

const title1_1 = document.querySelector("#hello1 h1"); // id로 찾을때는 이렇게 사용(#사용. CSS selector 이므로)
console.log(title1_1);

const titleAll = document.querySelectorAll(".hello1 h1"); // 전체다 선택하고싶을때
console.log(titleAll); // array로  retrun 됨


