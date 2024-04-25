const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");


let toDos = [];
const TODOS_KEY = "todos";


const todoHandler = {
    deleteToDo: (event) => {
        const li = event.currentTarget.parentElement;
        li.remove();
    },

    paintToDo: (newTodo) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = newTodo;
        const button = document.createElement("button");
        button.innerText = "―";
    
        button.addEventListener('click', todoHandler.deleteToDo);
    
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    },

    saveToDo: () => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    },

    handleToDoSubmit: (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value ="";
        toDos.push(newTodo);
        todoHandler.paintToDo(newTodo);
        todoHandler.saveToDo();
    },
}

toDoForm.addEventListener('submit', todoHandler.handleToDoSubmit)
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    console.log(parsedTodos);
    parsedTodos.forEach((todo) => 
        todoHandler.paintToDo(todo)
    );
}
