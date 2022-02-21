const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {
        firstName: 'Petro',
        lastName: 'Pupcin',
        email: 'pupcin@gmail.com',
        password: '12345',
        age: '34',
        city: 'Lviv',
        id:0
    },
    {
        firstName: 'Stepan',
        lastName: 'Vasia',
        email: 'vasia@gmail.com',
        password: '12345',
        age: '44',
        city: 'Lviv',
        id:1
    },
    {
        firstName: 'Ivan',
        lastName: 'Hopkin',
        email: 'hopcin@gmail.com',
        password: '12345',
        age: '14',
        city: 'Lviv',
        id:2
    },
];

function checkEmail(users, parametersUsers) {
    const copeEmail = users.filter(userEmail=>{
        return userEmail.email === parametersUsers.email;
    })
    return copeEmail;
}

function filterUsers(users, parametersUsers) {
    const {age, city} = parametersUsers;
    let newUsers = [];
    if (age && city){
        newUsers = users.filter(user =>{
            return user.age === age && user.city === city;
        })
    }else if (age){
            newUsers = users.filter(user =>{
                return user.age === age;
            })
    }else if (city){
        newUsers = users.filter(user =>{
            return user.city === city;
        })
    }
    return newUsers;
}

function signInUser(users, userInfo) {
    const {email, password} = userInfo;
    const user = users.filter(user =>{
        return user.email === email && user.password === password;
    })
    return user
}

function findUser(users, id) {
    const user = users.filter(user =>{
        return user.id === (id - 1);
    })
    return user;
}

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname,'static'));
app.get('/login', (req,res)=>{
    res.render('login');
});
app.post('/login',(req,res)=>{
    const newuser = req.body;
    if (checkEmail(users,req.body).length) {
        res.redirect('/error');
    }else{
        users.push({...newuser ,id: users.length ? users[users.length - 1].id + 1 : 1})
        res.redirect('/users');
    }
});
app.get('/users', (req,res)=>{
    const newUsers = filterUsers(users, req.query);
    if (newUsers.length){
        const users = newUsers;
        res.render('users', {users});
    }else {
        console.log(users)
        res.render('users', {users});
    }

});
app.get('/error', (req,res)=>{
    res.render('error');
});
app.get('/users/:id', (req,res)=>{
    const {id} = req.params;
    const user = findUser(users, id)[0];
    if (!user){
        res.render('userError');
    }else {
        res.render('user', {user});
    }
});
app.get('/signIn', (req,res)=>{
    res.render('signIn');
});
app.post('/signIn',(req,res)=>{
    const userInfo = req.body;
    const user = signInUser(users,userInfo)[0];
    if (!signInUser(users,user).length) {
        res.redirect('/error');
    }else{
        res.redirect(`/users/${user.id + 1}`);
    }
});
app.use((req,res)=>{
    res.render('notFound');
});
app.listen(5200,()=>{
    console.log('Server has started on PORT 5200');
});