const router = require('express').Router();

const Todo = require('../models/todo.js')


const todosController = require('../controllers/todos-controllers.js')
// const {verifyUser} = require('../middlewares/middelwares')

// const taskValue = document.querySelector('.task-input');
// const userValue = document.querySelector('.user-input')

router.get("/api/todos", todosController.getTodos, async (req, res) => {
    const todo = new Todo();
    todo.task = res.json();
    todo.user = res.json();
    try {
        await todo.save();
        res.send('created!')
    } catch {
        res.send('failed!')
    }
});


router.delete('/api/todos/:todoId', todosController.removeTodo);

router.put("/api/todos/:todoId", todosController.updateTodo);

router.post("/api/todos", todosController.createTodo);


module.exports = router