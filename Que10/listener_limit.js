const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`Current maximum number of listeners: ${currentMaxListeners}`);
eventEmitter.setMaxListeners(51);
const newMaxListeners = eventEmitter.getMaxListeners();
console.log(`New maximum number of listeners: ${newMaxListeners}`);
for (let i = 0; i < 51; i++) {
    eventEmitter.on('testEvent', () => {
        console.log(`Listener ${i + 1} called.`);
    });
}
console.log('Emitting testEvent with 51 listeners:');
eventEmitter.emit('testEvent');
