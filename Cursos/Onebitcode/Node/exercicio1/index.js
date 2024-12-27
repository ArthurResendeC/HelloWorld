const fs = require('node:fs')
console.log('Início');

fs.readFile('file.txt', 'utf-8', (err, data) =>{
    if (err) throw err
    console.log(data);
})

console.log('fim');