todoList = [];

function getTodo(){
    const todo = document.querySelector(".input-box");
    const date = document.querySelector(".js-date");
    const name = todo.value;
    const dueDate = date.value;
    todoList.push({
        name,
        dueDate
    });
    todo.value = "";
    displayTodo();
}

function displayTodo(){
    todoHtml = "";
    for(let i = 0; i < todoList.length; i++){
        const { name, dueDate} = todoList[i];
        html = `<div>${name}</div> <div>${dueDate}</div> <div><button class="delete-btn" onclick="todoList.splice(${i}, 1);displayTodo();">Delete</button></div>`;
        todoHtml += html;
    }
    document.querySelector(".todo-print").innerHTML = todoHtml;
}


function enterKey(event){
    if(event.key == "Enter"){
        getTodo();
    }
}