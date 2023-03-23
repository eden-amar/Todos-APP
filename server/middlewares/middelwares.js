const userService = require("../services/users");

async function verifyUser(req, res, next) {
    const userId = req.headers['userId'];
    if (!userId) {
        res.status(401);
        return;
    }
    const user = await userService.getUser(userId);
    if (user) {
        req.user = user;
        next();
    } else {
        res.status(401).end(); // close response
        return;
    }

}

module.exports = {
    verifyUser
}