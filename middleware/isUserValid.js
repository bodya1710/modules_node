function isUserValid(req, res, next) {

    try{
        const {firstName, lastName, email, password, age, city} = req.body;
        if (!firstName || !lastName || !email || !password || !age || !city){
            throw new Error ('login or password is not provided!');
        };
        if (password.length < 6){
            throw new Error('Not valid password');
        };
        next();

    }catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    };
};

module.exports = isUserValid;
