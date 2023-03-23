const todoService = require('../services/todos.js');


async function getTodos (req,res)  {

    const getTodo = await todoService.getTodos();
    res.json(getTodo);
    console.log(req.query);
}

async function removeTodo (req, res) {
    console.log(req);
    const todoId = req.params.todoId;
    const delTodo = await todoService.deleteTodo(todoId);
    res.json(delTodo);
}

async function createTodo(req, res) {
    const createTodo = await todoService.addTodo(req.body);
    res.json(createTodo);
}

async function updateTodo (req, res) {
    const upTodo = await todoService.updateTodo("83P2", "eden amarrrr");
   res.json(upTodo);
}


module.exports = {
    getTodos,
    removeTodo,
    createTodo,
    updateTodo
};