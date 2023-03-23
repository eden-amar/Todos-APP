
const {readFile, writeFile} = require('fs/promises'); // return the text

const path = require("path");

async function getUsers() {
    const value = JSON.parse(
        await readFile(path.resolve(__dirname, "../data/user-data.json"))
    );
      return value;
}

async function getUser(userId) { // one user
    const user = await getUsers().find(user => user.id === userId);
    return user;
}

async function setUser(user){ // set the text to the new todos
    const value = JSON.stringify(user);
    await writeFile(path.resolve(__dirname, "../data/user-data.json"), value);
}

async function register({ id, email, userName, password}){
    const currentUser = await getUsers();
    currentUser.push({
    id:btoa(Math.random()),
    email,
    userName,
    password
    });
    await setUser(currentUser);

    return {id, email, userName, password};
}

async function login(loginUser){
    const userData = await getUsers();
    const matchUser = userData.find((user) => user.userName === loginUser.userName &&
                                               user.password === loginUser.password);
    console.log('user:', matchUser);

    id(matchUser){
        alert('its you');
        window.open('../todos/index.html')

    }
    return matchUser;
}

module.exports = {
login,
register,
getUsers,
getUser
}