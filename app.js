const EventEmitter = require('events'); // class
const emitter = new EventEmitter();

//Register a listener - needs to be before raising an event
emitter.on('messageLogged', function(){
    console.log('Listener called');
})


//Raise an event, needs a listener
emitter.emit('messageLogged');




//-------------------------------------------------------------------------------------------------------------------

/* const fs = require('fs');

const files = fs.readdirSync ('./');
console.log(files);

fs.readdir('./', function(err, files){
if (err) console.log('Error', err);
else console.log('Result ', files);
}); */

//-----------------------------------------------------------------------------------------------------------------------

/* const path = require('path'); //assumes it is existing module

var pathObj = path.parse(__filename);
console.log(pathObj);

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

console.log('total memory: ' + totalMem)
console.log('free memory: ' + freeMem) */
