// Takes data from readStream and pipe it to writeStream
var fs = require('fs')
var path  = require('path')

var myReadStream = fs.createReadStream(path.join(__dirname, '../temp.txt'), 'utf8')
var myWriteStream = fs.createWriteStream(path.join(__dirname, './usingPipe.txt'))

myReadStream.pipe(myWriteStream)