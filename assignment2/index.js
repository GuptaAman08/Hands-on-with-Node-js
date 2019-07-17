const csvFilePath = 'customer-data.csv'
const fs = require('fs')
const csv = require('csvtojson')

csv()
    .fromFile(csvFilePath)
    .then((jsonobj)=>{
        fs.writeFile('customer-data.json', JSON.stringify(jsonobj, null, 2), (err)=>{
            if (err) return process.exit(1)
            console.log('Done')
            process.exit(0)
        })
    })