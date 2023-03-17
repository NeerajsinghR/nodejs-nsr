const fs = require('fs');
const readline = require('readline');

const writeToFile = (name) => {
    fs.writeFile('greeting.txt',`Hello, ${name}!`, err => {
        if(err){
            console.log("error in writing file");
        }
    });
}

const rl = readline.createInterface({ 
    input : process.stdin,
    output :process.stdout
 });

 rl.question('What is your town? ', (name) => {
    console.log('hi '+name);
    writeToFile(name);
    rl.close();
});
