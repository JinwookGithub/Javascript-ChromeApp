const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked sexy-font"
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function