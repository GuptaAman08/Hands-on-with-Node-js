const fs = require('fs')
const path = require('path')

//Reading a text file using async method ....do use {encoding: 'utf8'} otherwise o/p will be in Hex format
fs.readFile(path.join(__dirname, 'simple.txt'), {encoding: 'utf8'},(err, data)=>{
    if (err) return console.error(err);
    console.log(data);
})