//pegar o input do form
const formInfo = document.getElementById('form');
const taskInput = document.getElementById('todo-input');
const taskOutput = document.querySelector(".tasks");
const text = document.getElementById('text');
const taskComplete = document.getElementById('task-complete');
const taskDelete = document.getElementById('delete-button');

const saveTodo = (text) => {
    //criaçao da div geral
    const todo = document.createElement("div")
    todo.classList.add("tasks")
    //aqui foi criado o elemento div e adicionado a ele a classe tasks, onde ao disparar essa funçao quando clicamos no botao la em baixo vai criar outro item na lista de tasks

    const boxText = document.createElement("span")
    boxText.classList.add("box-text")
    todo.appendChild(boxText)

    const todoText = document.createElement("p")
    //aqui o valor que foi armazenado em text agora foi adicionado ao todoText
    todoText.innerText = text;
    //adiçao do todoText no novo elemento criado todo(div)
    boxText.appendChild(todoText)
    console.log(todo)
    
    const doneButton = document.createElement("button")
    doneButton.classList.add("btn-style2")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    boxText.appendChild(doneButton)

    const removeButton = document.createElement("button")
    removeButton.classList.add("btn-style2")
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    boxText.appendChild(removeButton)

    taskOutput.appendChild(todo);
    taskInput.value ="";
    taskInput.focus();
}

formInfo.addEventListener('submit', (e) => {
    e.preventDefault();

    //armazenando a task
    let task = taskInput.value;
    
    if(task){
        //verificando se o usuario nao salvou uma task sem titulo
        //save todo
        saveTodo(task)
    }
});

