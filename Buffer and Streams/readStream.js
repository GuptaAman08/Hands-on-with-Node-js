// Reading a file from a stream 
var fs = require('fs')
var path = require('path')

var myReadStream = fs.createReadStream(path.join(__dirname, 'temp.txt'), 'utf8')

myReadStream.on('data', (chunk)=>{
    console.log('New Chunk Received')
    console.log(chunk)
})