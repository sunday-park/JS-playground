const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");


let toDos = [];
const TODOS_KEY = "todos";

const todoHandler = {
    saveToDo: () => {
        localStorage.setItem("todos", JSON.stringify(toDos));
    },
    deleteToDo: (event) => {
        const li = event.currentTarget.parentElement;
        console.log(toDos);
        console.log(li.id);
        toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id) )
        console.log(toDos);

        // localStorage.removeItem();
        li.remove();
        todoHandler.saveToDo()
    },

    paintToDo: (newTodo) => {
        const li = document.createElement("li");
        li.id = newTodo.id;
        const span = document.createElement("span");
        span.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText = "X";
    
        button.addEventListener('click', todoHandler.deleteToDo);
    
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    },

    handleToDoSubmit: (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value ="";
        const newTodoObj = {
            id: Date.now(), 
            text: newTodo,
        };
        toDos.push(newTodoObj);
        todoHandler.paintToDo(newTodoObj);
        todoHandler.saveToDo(newTodoObj);
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
