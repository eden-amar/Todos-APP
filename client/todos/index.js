const addButton = document.querySelector('button');
const addTask = document.querySelector('.task-input');
const addUser = document.querySelector('.user-input');
const tbody = document.querySelector('tbody');


addButton.addEventListener('click', newTask);
async function newTask(event) {
    await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ task: addTask.value, user: addUser.value })
    });




    //     let tr = document.createElement('tr');

    //     let tdId = document.createElement('td');
    //     let tdTask = document.createElement('td');
    //     let tdUser = document.createElement('td');
    //     let tdTrashIcon = document.createElement('td');
    //     let trashIcon = document.createElement('img');

    //     trashIcon.src = './img/delete.png';

    //     tdTask.textContent = addTask.value;
    //     tdUser.textContent = addUser.value;

    //     tdTrashIcon.append(trashIcon);

    //     tr.append(tdId, tdTask, tdUser, tdTrashIcon);
    //     tbody.append(tr);

    // trashIcon.addEventListener('click', () => {
    //     fetch(`http://localhost:3000/api/todos/${todoData.id}`, {
    //         method: 'DELETE'
    //     })
    // })
    // save();

}

// let trashButton = document.querySelector('.trash-button')
// trashButton.addEventListener('click', deleteTask);

// function deleteTask(todoObject) {
//     for (const key in todoObject) {

//         fetch(`http://localhost:3000/api/todos/${todoObject[key].id}`, {
//             method: 'DELETE'
//         })
//     }
// }


// function createTable(data) {

//     let td = document.createElement('td');

//     for(let i =0; i < data.length; i ++) {
//     switch (data[i]) {
//         case 'task':
//             td.textContent = todoData[i];
//             break;
//         case 'user':
//             td.textContent = todoData[i];
//             break;
//         case 'isDone':
//             let checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkbox.checked = todoData[i];
//             td.append(checkbox);

//             break;
//         case 'id':
//             td.textContent = todoData[i];
//             break;
//         case 'delete':
//             let trashIcon = document.createElement('img');
//             trashIcon.src = './img/delete.png';

//             trashIcon.addEventListener('click', () => {
//                 fetch(`http://localhost:3000/api/todos/${todoData.id}`, {
//                     method: 'DELETE'
//                 })
//             })
//             td.append(trashIcon);

//             break;
//         case 'update':
//             let updateIcon = document.createElement('img');
//             updateIcon.src = './img/update.png';

//             td.append(updateIcon);
//             break;

//         default:
//             td.textContent = todoData[i];
//             break;
//     }
// }

//     return td;
// }

// function buildTableBody(todoData) {
//     let tbody = document.querySelector('tbody');
//     let td = createTable(todoData);
//     tbody.append(td)
// }


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