const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function savetoDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteTodo(event){
    // console.dir(event.target); // target : HTML element clicked
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""; // 엔터칠때 사라지게
    toDos.push(newTodo);
    paintToDo(newTodo);
    savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);