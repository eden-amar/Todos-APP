const mongoose = require('mongoose');

const ObjectId = mongoose.ObjectId;
const TodoSchema = new mongoose.Schema({
    task: String,
    user: String
})

const Todo = mongoose.model('Todo' , TodoSchema);

module.exports = Todo;