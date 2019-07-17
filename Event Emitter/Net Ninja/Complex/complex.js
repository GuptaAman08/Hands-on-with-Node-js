/*  Util package allows us to inherit certain things from 
built-in classes/objects in nodejs and other objects as well */

var events = require('events')
var util = require('util')

// Here we try to attach custom events on person object which inherits EventEmitter class
var Person = function(name){
    this.name = name
}
// Person above is an object constructor

util.inherits(Person, events.EventEmitter);

var aman = new Person('Aman')
var aarti = new Person('Aarti')
var jon = new Person('Jon')

var people = [aman, aarti, jon]

people.forEach(function(person){
    person.on('speak', (mssg)=>{
        console.log(`${person.name}  said  ${mssg}`)
    })
})

aman.emit('speak', 'Hi Guys!!!')