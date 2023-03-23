const userService = require('../services/users');

async function register (req,res)  {
    const user = req.body;
    const newUser = await userService.register(user);

    if(newUser){
        res.json(newUser);
    }
    else{
        res.status(409).send('conflict');
    }
}

async function login (req, res) {
    const loginData = req.body;
    const userInfo = await userService.login(loginData);
    if(userInfo){
        res.json(userInfo);}
    // } else {
    //     res.status(401).json({message: 'Unauthorized'})
    // }
    }


async function getUsers (req,res)  {
    const users = res.body;
    res.json(await userService.getUsers(users));
}

module.exports = {
    getUsers,
    register,
    login
}

