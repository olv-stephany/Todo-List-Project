//pegar o input do form
const formInfo = document.getElementById('form');
const taskInput = document.getElementById('todo-input');
const taskOutput = document.querySelector(".taskContainer");
const text = document.getElementById('text');

const saveTodo = (text) => {
    //criaçao da div geral
    const todo = document.createElement("div")
    todo.classList.add("tasks")
    //aqui foi criado o elemento div e adicionado a ele a classe tasks, onde ao disparar essa funçao quando clicamos no botao la em baixo vai criar outro item na lista de tasks

    const boxText = document.createElement("span")
    boxText.classList.add("box-text")
    todo.appendChild(boxText);

    const todoText = document.createElement("p")
    //aqui o valor que foi armazenado em text agora foi adicionado ao todoText
    todoText.innerText = text;
    //adiçao do todoText no novo elemento criado todo(div)
    boxText.appendChild(todoText)

    const doneButton = document.createElement("button")
    doneButton.classList.add("btn-style2")
    doneButton.classList.add("task-complete")
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    boxText.appendChild(doneButton);

    const removeButton = document.createElement("button")
    removeButton.classList.add("btn-style2")
    removeButton.classList.add("delete-button")
    removeButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    boxText.appendChild(removeButton);

    taskOutput.appendChild(todo);
    taskInput.value = "";
    taskInput.focus();
}

formInfo.addEventListener("submit", (e) => {
    e.preventDefault();

    //armazenando a task
    let task = taskInput.value;

    if (task) {
        //verificando se o usuario nao salvou uma task sem titulo
        //save todo
        saveTodo(task);
    }
});

document.addEventListener("click", (e) => {
    const clickElement = e.target;
    const parentElement = clickElement.closest("div");
    //selecionando a div mais proxima do clickelement

    if (clickElement.classList.contains("task-complete")) {
        parentElement.classList.toggle("done");
        //o toggle vai adicionar ou retirar ao ser clicado
    }

    //botao de remoçao
    if (clickElement.classList.contains("delete-button")) {
        parentElement.remove();
        //removendo a div principal de tasks
    }

})
