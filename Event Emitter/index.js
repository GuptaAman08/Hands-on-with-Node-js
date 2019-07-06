const EventEmitter = require('events')

class Job extends EventEmitter{}

j = new Job()

j.on('finished', (cur_time)=>{
    console.log(`Am finally Done at :${cur_time}`)
})

j.emit('finished', new Date())

// remove  all observers
j.removeAllListeners()  

// Wont be executed since i had removed all listeners 
j.emit('finished', new Date())



