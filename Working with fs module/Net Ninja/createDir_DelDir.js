const fs = require('fs')

fs.mkdir('stuff', ()=>{
    fs.readFile('temp.txt', 'utf8', (err, data)=>{
        fs.writeFile('./stuff/copyOfTemp.txt', data, (err)=>{
            if (err) console.error(err)
            console.log('Copied Successfully!!')
        })
    })
})