const {Router} = require("express");
const UserController = require("../controlles/userController");
const userRouter = Router();


userRouter.get('/', UserController.renderUsers);

userRouter.get('/:id', UserController.getUserById);

module.exports = userRouter;

