const {Router} = require("express");
const userRouter = require("../routes/userRouter");
const loginRouter = require("../routes/loginRouter");
const signInRouter = require("../routes/signInRouter");

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);

routes.use((req,res)=>{
    res.render('error');
});

module.exports = routes;