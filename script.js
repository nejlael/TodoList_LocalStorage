//selectors

const newTask = document.querySelector('.newTask');
const addTask = document.querySelector('.addTask');
const taskList = document.querySelector('.taskList');

//event listener
document.addEventListener('DOMContentLoaded' , getTodo)
addTask.addEventListener('click' , addTodo);
taskList.addEventListener('click' , deletecheck);

//function

function addTodo(event){
    event.preventDefault();
        //Prevent form from submitting

    //TO DO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = newTask.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //ADD TO DO TO LOCAL STORAGE
    saveLocalTodos(newTask.value);

    //check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    taskList.appendChild(todoDiv); 
    //Clear to do input
    newTask.value = "";
}

function deletecheck(e) {
    const item = e.target;

    //DELETE THE TO DO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        console.log(todo);
    }
}


//SAVE LOCAL

function saveLocalTodos(todo){
    //je regarde si j'ai pas déjà quelque chose d'enregistré
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
     }   
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));   
}

function getTodo(){
    let todos;
     
     if(localStorage.getItem('todos') === null){
         todos = [];
      }   
     else{
         todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(function(todo){
            //TO DO DIV
            const todoDiv = document.createElement('div');
            todoDiv.classList.add("todo");

            //create LI
            const newTodo = document.createElement('li');
            newTodo.innerText = todo;
            newTodo.classList.add('todo-item');
            todoDiv.appendChild(newTodo);

            //check mark button
            const completeButton = document.createElement('button');
            completeButton.innerHTML = '<i class="fas fa-check"></i>';
            completeButton.classList.add('complete-btn')
            todoDiv.appendChild(completeButton);

            //check trash button
            const trashButton = document.createElement('button');
            trashButton.innerHTML = '<i class="fas fa-trash"></i>';
            trashButton.classList.add('trash-btn');
            todoDiv.appendChild(trashButton);

            //APPEND TO LIST
            taskList.appendChild(todoDiv); 
            //Clear to do input
            newTask.value = "";


        });
    }
}