const {readFile, writeFile} = require('fs/promises'); // return the text

const path = require('path');

async function getTodos() {
    const value = JSON.parse(
        await readFile(path.resolve(__dirname, "../data/todos-data.json"))
    );
      return value;
}

async function setTodos(todos){ // set the text to the new todos
    const value = JSON.stringify(todos);
    await writeFile(path.resolve(__dirname, "../data/todos-data.json"), value);
}

async function addTodo({isDone, id, task, user}){
    const currentTodos = await getTodos();
    currentTodos.push({
    isDone,
    id:btoa(Math.random()),
    task,
    user,
    });
    setTodos(currentTodos)
}

async function deleteTodo(id){
    const currentTodos = await getTodos();
    const filterTodos = currentTodos.filter(todo => todo.id !== id);

    setTodos(filterTodos);
}

async function updateTodo(id, newTitle){
    const currentTodos = await getTodos();
    
    const todoUpdats = currentTodos.find(todo => todo.id === id); 
    if(todoUpdats){
        todoUpdats.task  = newTitle;
    await setTodos(currentTodos);
    }
}

/* function updateTodo2(id, updateTodo){
    const currentTodos = getTodos();
    currentTodos[id-1] = updateTodo;
    setTodos(currentTodos); 
} another option */

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}