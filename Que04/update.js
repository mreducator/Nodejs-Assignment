const fs = require('fs');

// Additional data to append
const additionalData = `
Advantages of Node.js:
1. **High Performance**: Node.js uses the V8 engine, which compiles JavaScript to native machine code, resulting in fast execution.

2. **Scalability**: Node.js is designed to handle a large number of simultaneous connections with minimal overhead, making it suitable for scalable applications.

3. **Real-time Applications**: Node.js excels in real-time applications such as chat applications and live updates, thanks to its non-blocking architecture.
`;

// Append the additional data to nodejs_architecture.txt
fs.appendFile('nodejs_architecture.txt', additionalData, (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }

    console.log('Additional data has been appended to nodejs_architecture.txt');

    // Read and print the updated file content
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        console.log('Updated content of nodejs_architecture.txt:');
        console.log(data);
    });
});
