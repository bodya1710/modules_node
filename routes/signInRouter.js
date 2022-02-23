const {Router} = require("express");
const users = require("../db/users");
const signInController = require("../controlles/signInController");
const signInMiddleware = require("../middleware/isEmailExists");

const signInRouter = Router();

signInRouter.get('/', signInController.renderSingIn);
signInRouter.post('/', signInMiddleware, signInController.signInUser);

module.exports = signInRouter;




