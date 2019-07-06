const fs = require('fs')

// data = "Success is bound to come if u are giving your 100 per."
// fs.writeFile('temp.txt', data, (err)=>{
//     if (err) return console.error(err)
//     console.log('Written Successfully')
// })

//Append data to an existing file 
fs.appendFile('temp.txt', '\n Appended data ', (err)=>{
    if (err) return console.error(err)
    console.log('Appended Successfully')
})