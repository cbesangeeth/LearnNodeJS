const fs = require('fs');

fs.writeFile('output.txt', 'hello world', (err) => {
    if (err) {
        return console.log('error creating file: ' + err)
    }
    console.log('file created successfully');
});
