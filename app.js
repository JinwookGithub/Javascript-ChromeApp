const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked"); // 한번만 나오니까 변수없이 이름 바로 씀.
}

h1.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function