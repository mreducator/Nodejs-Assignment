const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js Architecture:
1. **Single-threaded Event Loop**: Node.js operates on a single thread using an event-driven architecture. This allows it to handle multiple connections concurrently without blocking.
2. **Non-blocking I/O**: Node.js uses asynchronous operations to perform I/O tasks, ensuring that the execution of code is not halted by file or network operations.
3. **Libuv Library**: Node.js relies on the libuv library for asynchronous I/O operations. It provides the event loop and handles thread pooling.
4. **Scalability**: The architecture supports scaling applications horizontally (across multiple servers) and vertically (within a single server) using various techniques such as clustering and load balancing.
`;

// Write the information to a new file
fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
    if (err) throw err;
    console.log('Node.js architecture information has been saved to nodejs_architecture.txt');
});
