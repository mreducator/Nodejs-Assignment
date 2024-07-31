const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const handleSubscribe = () => {
    console.log('A user has subscribed!');
};

// Register the 'subscribe' event with the handler
eventEmitter.on('subscribe', handleSubscribe);

// Simulate a user subscription by emitting the 'subscribe' event
eventEmitter.emit('subscribe');
