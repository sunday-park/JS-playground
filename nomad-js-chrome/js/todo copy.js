const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
    const li = event.currentTarget.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    // `<li>${newTodo}</li>`
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "―";

    button.addEventListener('click', deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;


    paintToDo(newTodo);
    toDoInput.value ="";
}

toDoForm.addEventListener('submit', handleToDoSubmit)