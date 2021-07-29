const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

// console.dir(title); 

title.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave); 

