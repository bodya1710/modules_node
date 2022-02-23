const users = require("../db/users");

function checkEmail(users, parametersUsers) {
    const copeEmail = users.filter(userEmail=>{
        return userEmail.email === parametersUsers.email;
    })
    return copeEmail;
};

class loginController{

    renderLogin(req,res){
        res.render('login');
    };
    postNewUser(req,res){
        const newuser = req.body;
        if (checkEmail(users,req.body).length) {
        res.redirect('/error');
        }else{
        users.push({...newuser ,id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
        };
    };
};

module.exports = new loginController();