const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    } 
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function