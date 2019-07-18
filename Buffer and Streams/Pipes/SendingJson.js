//Sending plain text to client/browser
var http = require('http')


http.createServer((req, res)=>{
    console.log('Request was made to url ' + req.url)
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    var obj = {
        name: 'Aman',
        Age: 22,
        job: 'Python Developer'
    }
    res.end(JSON.stringify(obj))

}).listen(3000)