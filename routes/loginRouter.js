const {Router} = require("express");
const users = require("../db/users");
const loginController = require("../controlles/loginController");
const loginMiddleware = require("../middleware/isUserValid");

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);
loginRouter.post('/', loginMiddleware, loginController.postNewUser);

module.exports = loginRouter;

