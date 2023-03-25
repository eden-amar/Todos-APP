const addButton = document.querySelector('button');
const addTask = document.querySelector('.task-input');
const addUser = document.querySelector('.user-input');
const tbody = document.querySelector('tbody');


addButton.addEventListener('click', newTask);
async function newTask(event) {
    await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ task: addTask.value, user: addUser.value})
    });
}


async function getTodos() {
    const response = await fetch(`http://localhost:3000/api/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const todos = await response.json();
    return todos;
}

async function showTodos() {
    let dataList = await getTodos();
    //return each object
    let table = document.querySelector('table');
    dataList.forEach((todo) => {
        let tr = createRow(todo);
        table.append(tr);
    });
}

function createRow(todoObject) {
    let tr = document.createElement('tr');
    for (const key in todoObject) {

        let td = document.createElement('td');
        td.textContent = todoObject[key];
        tr.append(td);

    }

    let tdCheckBox = document.createElement('td');
    let CheckBox = document.createElement('input');
    CheckBox.type = 'checkbox';

    let tdIcon = document.createElement('td');
    let icon = document.createElement('img');
    icon.src = './img/delete.png';
    icon.classList.add('trash-button');

    tdCheckBox.append(CheckBox);
    tdIcon.append(icon);

    tr.append(tdCheckBox, tdIcon);


    icon.addEventListener('click', () => {
        fetch(`http://localhost:3000/api/todos/${todoObject.id}`, {
            method: 'DELETE'
        })
    });

    return tr;


}

showTodos();



// let remoteData = fetch('http://localhost:3000/api/todos') //http://localhost:3000/api/todos - cros
// remoteData
//     .then(response => { // wait on fetch() promise
//         console.log(response);
//         return response.json();
//     })
//     .then(todoData => { // wait on Json() Promise
//         console.log(todoData);
//         buildTableBody(remoteData);
//     });