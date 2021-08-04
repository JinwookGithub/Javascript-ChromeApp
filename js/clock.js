const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date(); // 매번 객체를 생성
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// setTimeout(sayHello, 5000); // 5초뒤에 1번 실행
getClock(); // 1번은 실행. 없으면 1초뒤에 나타남
setInterval(getClock, 1000); // 그다음 1초마다 실행