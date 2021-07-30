const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function