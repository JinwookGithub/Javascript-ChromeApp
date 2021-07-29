const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    console.log("title was clicked");
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"; // document.body는 html의 body부분
}

function handleWindowCopy() {
    alert("copier!!");
}

function handleWindowOffline() {
    alert("SOS");
}

function handleWindowOffline() {
    alert("ALL GOOOD");
}
// console.dir(title); 

h1.addEventListener("click", handleTitleClick); // element를 가져와서 event listener 실행. 두번째 인자는 callbock function
//title.onclick = handleTitleClick; // 위와 동일. add Event listener를 쓰면 나중에 remove도 가능
h1.addEventListener("mouseenter", handleMouseEnter);
//title.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave); 

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline); // offline될때 활성화
window.addEventListener("online", handleWindowOffline); // 다시 online 될때 활성화