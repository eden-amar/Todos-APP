
const express = require("express");
const app = express(); // express application
const cors = require('cors');
const todosRouter = require('./server/routes/todos-router');
const userRouter = require('./server/routes/authentication')

const connect = require('./server/models/db.js');


connect();
app.use(express.json());
app.use(cors())

app.use(todosRouter);
app.use(userRouter);
/*app.post("/api/todos", (res,req)=> {
    const del = deleteTodo();
    res.json(del);
}) // save new todo - create todo
app.update()
app.use(express.json()); */



app.listen( 3000,() => {console.log('application is running')})






