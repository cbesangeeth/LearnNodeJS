const fs = require('fs');
const readline = require('readline');

const write = (name) => {
    fs.writeFile('names.txt', name, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('created !');
    });
}

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('what your name?', name => {
    r1.close();
    write(name);
});