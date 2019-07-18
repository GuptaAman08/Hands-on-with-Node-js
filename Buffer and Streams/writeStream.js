// Reading a file from a stream 
var fs = require('fs')
var path = require('path')

var myReadStream = fs.createReadStream(path.join(__dirname, 'temp.txt'), 'utf8')
var myWriteStream = fs.createWriteStream(path.join(__dirname, 'writeMe.txt'))

myReadStream.on('data', (chunk)=>{
    console.log('New Chunk Received')
    myWriteStream.write(chunk)
    
})