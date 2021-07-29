const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked");
    title.style.color = "blue";
}

// console.dir(title); 

title.addEventListener("click", handleTitleClick);

