//Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)const onlineUsers =[{name: "Andrii", age: 22, city: "Lviv" },

const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname,'main'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.mkdir(path.join(__dirname, 'main', 'online'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.appendFile(path.join(__dirname, 'app.js'),
//     '\nconst onlineUsers =[{name: "Andrii", age: 22, city: "Lviv" },{name: "Petro", age: 25, city: "Lviv" }];',
//     (err)=>{
//         if (err){
//             console.log(err)
//             throw err
//         }
//     }
// )
// fs.appendFile(path.join(__dirname, 'app.js'),
//     '\nconst inPersonUsers =[{name: "Andrii", age: 22, city: "Lviv" },{name: "Petro", age: 25, city: "Lviv" }];',
//     (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
//     }
// )
// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), 'kkk',(err)=>{
//         if (err){
//         console.log(err)
//         throw err
//     }
// })
// const onlineUsers =[{name: "Andrii", age: 22, city: "Lviv" },{name: "Petro", age: 25, city: "Lviv" }];
// const inPersonUsers =[{name: "Vlad", age: 22, city: "Lviv" },{name: "Ivan", age: 25, city: "Lviv" }];

// for (let i = 0; i < inPersonUsers.length; i++){
//     for (const usersKey in inPersonUsers[i]) {
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),
//             `${usersKey}: ${inPersonUsers[i][usersKey]}\n`,
//             {flag:'a'},
//             (err)=>{
//                 if (err){
//                 console.log(err)
//             }
//         })
//     }
// }
// for (let i = 0; i < onlineUsers.length; i++){
//     for (const usersKey in onlineUsers[i]) {
//         fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'),
//             `${usersKey}: ${onlineUsers[i][usersKey]}\n`,
//             {flag:'a'},
//             (err)=>{
//                 if (err){
//                     console.log(err)
//                 }
//             })
//     }
// }

// fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), 'utf8', (err,data)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// })
// function changeData() {
//     fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), 'utf8', (err,data)=>{
//         if (err){
//             console.log(err)
//         }
//         fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'),`${data}`, {flag:'w'}, (err)=>{
//             if (err){
//                 console.log(err)
//             }
//         })
//     })
//
// }
// function changeData2() {
//     fs.readFile(path.join(__dirname, 'main', 'online', 'file.txt'), 'utf8', (err,data)=>{
//         if (err){
//             console.log(err)
//         }
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'),`${data}`, {flag:'w'}, (err)=>{
//             if (err){
//                 console.log(err)
//             }
//         })
//     })
//
// }
// changeData();
// changeData2();