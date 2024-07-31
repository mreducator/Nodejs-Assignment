const fs = require('fs');

// Read the content of nodejs_architecture.txt
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    // Print the content to the console
    console.log('Content of nodejs_architecture.txt:');
    console.log(data);
});
