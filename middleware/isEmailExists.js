const users = require("../db/users");

function isEmailExists(req, res, next) {

    const {email, password} = req.body;

    try{
        const user = users.filter(user => {
            return user.email === email && user.password === password;
        });

        if (!user[0]){
            throw new Error ('login or password is not provided!');
        };

        next();
    }catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    };
};

module.exports = isEmailExists;

