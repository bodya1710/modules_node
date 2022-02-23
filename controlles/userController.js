const users = require("../db/users");

function findUser(users, id) {
    const user = users.filter(user =>{
        return user.id === (id - 1);
    });
    return user;
};

function filterUsers(users, parametersUsers) {
    const {age, city} = parametersUsers;
    let newUsers = [];
    if (age && city){
        newUsers = users.filter(user =>{
            return user.age === age && user.city === city;
        });
    }else if (age){
        newUsers = users.filter(user =>{
            return user.age === age;
        });
    }else if (city){
        newUsers = users.filter(user =>{
            return user.city === city;
        });
    };
    return newUsers;
};

class UserController{
    renderUsers(req,res){
        const newUsers = filterUsers(users, req.query);
        if (newUsers.length){
            const users = newUsers;
            res.render('users', {users});
        }else {
            res.render('users', {users});
        };
    };
    getUserById(req,res){
        const {id} = req.params;
        const user = findUser(users, id)[0];
        if (!user){
            res.render('error');
        }else {
            res.render('user', {user});
        };
    };
};

module.exports = new UserController();