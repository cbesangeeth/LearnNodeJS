const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logger', (data) => {
    console.log('App Logger:', data.message);
});

const add = (a,b)=> {
    emitter.emit('logger', {message: `a: ${a}, b: ${b}`});
    return a+b;
};

console.log(add(2,3));
console.log(add(144.3,4323));
console.log(add(223,333));
console.log(add(12,353));
