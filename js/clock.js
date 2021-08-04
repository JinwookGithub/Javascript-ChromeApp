const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 매번 객체를 생성
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}

// setTimeout(sayHello, 5000); // 5초뒤에 1번 실행
getClock(); // 1번은 실행. 없으면 1초뒤에 나타남
setInterval(getClock, 1000); // 그다음 1초마다 실행