//gosto de fazer comentarios sobre o que aprendi.

//pegar o input do form
const formInfo = document.getElementById('form');
const taskInput = document.getElementById('todo-input');
const taskOutput = document.querySelector(".taskContainer");
const text = document.getElementById('text');

const saveTodo = (text, done = 0, save = 1) => {
    // temos save igual a 1 pois so salva uma tarefa por vez
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

    //local storange
    if (done){
        todo.classList.add("done")
    }

    if(save){
        saveTodoLocalStorange({text, done})
    }
    
    if(save == false){
        todoText.classList.add("done")
    }

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

        const index = parentElement.dataset.index;
        //dataset.index armazena o indice desse todo salvo
        removeTodoLS(index);
    }

})

//criaçao uma funçao para pegar os todos na ls
const getTodoLS = ()=>{
    const todos = JSON.parse(localStorage.getItem("todos")) || [] 
    //usamos json parse pois se nao os item vem em texto (json)

    return todos;
    //se nao vier nada, retorna um array vazio
}

const saveTodoLocalStorange = (todo) => {
    //1 pegar os todos da ls 
    //2 salvar estes dados em um array
    //3 salvar tudo na ls

    const todos = getTodoLS()

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos)); //convertando em json
    // get = pegar set= salvar
}

//acessando as tarefas ao entrar no site futuramente
const loadTodos = () => {
    const todos = getTodoLS();
    todos.forEach(todo => {
        saveTodo(todo.text, todo.done, false);
        // chama a funçao saveTodo para criar a estrutura html e adiçao de classes a estas, temos um false como ultimo argumento para nao salvar novamente a tarefa que ja esta salva.
    });
};


//funçao de remoçao do todo na ls
const removeTodoLS = (todoText) =>{
    const todos = getTodoLS();
    
    //removendo por indice pois é unico para cada todo, alem de que a operaçao por indice é mais rapida do que filtrar todo um array
    
    todos.splice(todoText, 1);
    // remove o elemento do array a partir do índice especifico salvo acima, o segundo argumento indica que apenas um elemento será removido nessa funçao.
    
    localStorage.setItem("todos", JSON.stringify(todos)); 
}
loadTodos();