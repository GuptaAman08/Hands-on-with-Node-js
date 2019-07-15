const http = require('http')
const port = 3000

http.createServer((request, response)=>{
    console.log(request.headers)
    console.log(request.url)
    console.log(request.statusCode)
    if( request.method == 'POST'){
        let buf = ''
        request.on('data', (chunk)=>{
            buf += chunk
        })
        request.on('end', ()=>{
            console.log(`Data is : ${buf}`)
            response.end('Request Accepted \n')
        })
    }else{
        response.writeHead(200, {
            'Content-Type' : 'text/plain'
        })
        response.write('Hello Aman')
        response.end(' World\n')
    }
}).listen(port)