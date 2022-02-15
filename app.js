//1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _neco
const path = require('path');
const fs = require('fs');

// fs.mkdir(path.join(__dirname, 'taskFirst'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })

// fs.writeFile(path.join(__dirname, 'taskFirst', 'fileFirstTask.txt'),'Data first task', (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.readFile(path.join(__dirname, 'taskFirst', 'fileFirstTask.txt'), 'utf-8',(err,data)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
//     console.log(data)
//     // fs.writeFile(path.join(__dirname, 'taskFirst', 'fileFirstTask_2.txt'),`${data}`, (err)=>{
//     // if (err){
//     //     console.log(err)
//     //     throw err
//     // }
// // })
// })
////////////////////////////////////////////////////////////
// fs.mkdir(path.join(__dirname, 'taskSecond'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.mkdir(path.join(__dirname, 'taskSecond', 'directory_1'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.mkdir(path.join(__dirname, 'taskSecond', 'directory_2'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.writeFile(path.join(__dirname, 'taskSecond', 'directory_1', 'file.txt'),'Data second task', (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.writeFile(path.join(__dirname, 'taskSecond', 'directory_2', 'file2.txt'),'Data second task directory_2', (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// fs.readFile(path.join(__dirname, 'taskSecond', 'directory_1', 'file.txt'), 'utf-8', (err,data)=>{
//         if (err){
//         console.log(err)
//         throw err
//     }
//     fs.writeFile(path.join(__dirname, 'taskSecond', 'directory_2', 'file.txt'),`${data}`, (err)=>{
//         if (err){
//             console.log(err)
//             throw err
//         }
//     })
//
//     fs.unlink(path.join(__dirname, 'taskSecond', 'directory_2', 'file2.txt'), (err)=>{
//     if (err){
//         console.log(err)
//         throw err
//     }
// })
// })
////////////////////////////////////////////////////////////

