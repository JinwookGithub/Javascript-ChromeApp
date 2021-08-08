const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); 

let toDos = [];

const TODOS_KEY = "todos";

function savetoDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteTodo(event){
    // console.dir(event.target); // target : HTML element clicked
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 매 요소 검사해서 li.id가 일치하면 false 리턴되므로 해당 요소만 제외된 array 새로 생성
                                                                 // li.id는 string type이므로 parseInt없이는 항상 false(그냥 id는 number type)
    savetoDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // li에 id 할당(element간에 구분가능하도록. text가 같더라도)
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value=""; // 엔터칠때 사라지게 
    const newTodoObj = {
        text:newTodo,
        id:Date.now(), // unique 한 값 부여하기 위함
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    savetoDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){ // savedToDos !== null
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos; // 새로고침할때 restore 하기위함. 없으면 새로고침후에 덮어씀
    parsedTodos.forEach(paintToDo);
}