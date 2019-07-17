const events = require('events')

// You need to use EventEmitter class object in order to create your own custom events
var MyEmitter = new events.EventEmitter()

MyEmitter.on('myevent', (mssg1, mssg2)=>{
    console.log(`${mssg1} ${mssg2}`)
})

MyEmitter.emit('myevent', "Event emitted", "Succesfully!!!")