const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const handler = () => {
    console.log('Event handler has been called!');
};
eventEmitter.on('testEvent', handler);
console.log('Calling the event for the first time:');
eventEmitter.emit('testEvent');
eventEmitter.off('testEvent', handler);

// Call the event again
console.log('Calling the event after removing the handler:');
eventEmitter.emit('testEvent');
