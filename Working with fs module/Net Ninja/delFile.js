// You fucking bitch, I gona delete you,,,Fuck Off!!!
var fs = require('fs')

// This is Asnchronous method
fs.unlink('./temp.txt', (err)=>{
    if (err) return process.exit(1)
    console.log('Deleted successfully!!')
})
