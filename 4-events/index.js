const EventEmitter = require('events');
const emitter = new EventEmitter();

// emitter,on() is alias for emitter.addListener()
emitter.on('log', (arg) => {
    console.log('Logger:', arg);
});

emitter.emit('log',{ id: 27, custom: 'hello arg!'});