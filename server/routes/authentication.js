const router = require('express').Router();
const usersController = require('../controllers/authentication-controller')

    router.post("/api/register", usersController.register);
    
    router.post("/api/login", usersController.login);

 
module.exports = router;