//Sending plain text to client/browser

var http = require('http')
var fs = require('fs')
var path  = require('path')

http.createServer((req, res)=>{
    console.log('Request was made to url ' + req.url)
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    var myReadStream = fs.createReadStream(path.join(__dirname, '../temp.txt'), 'utf8')
    //Since the res object is of type writable stream
    myReadStream.pipe(res)

}).listen(3000)