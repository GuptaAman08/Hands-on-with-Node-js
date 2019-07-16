const http = require('http')
const path = require('path')
const fs = require('fs')
const uuid = require('uuid/v1')

const downloadPage = (url='http://nodeprogram.com')=>{
    console.log('downloading ', url)
    const fetchPage = (url, callback)=>{

        http.get(url, ( response)=>{
            let buf = ''
            response.on('data', (chunk)=>{
                buf += chunk
            })

            response.on('end', ()=>{
                console.log(`Data Received ...Now Writing to file`)
                callback(null, buf)
            })

        }).on('error', (err)=>{
            console.log(`Error: ${err.message}`)
            callback(err)
        })
    }

    const folder_name = uuid()
    fs.mkdirSync(folder_name)
    fetchPage(url, (err, data)=>{
        if (err) return console.error(err)
        fs.writeFileSync(path.join(__dirname, folder_name, 'url.txt'), url)  
        fs.writeFileSync(path.join(__dirname, folder_name, 'file.html'), data)
        console.log('downloading is done in folder ', folder_name)
    })
}

downloadPage(process.argv[2])