
// Node.js developers prefer asynchronous methods over synchronous methods as asynchronous methods never block a program during its execution, whereas the latter does. 

// Blocking the main thread is malpractice in Node.js, thus synchronous functions should only be used for debugging or when no other options are available.
var fs = require('fs'),
    path = require('path'); 
    // the ‘readline-sync’ module is used to enable user input at runtime.   
    file = path.join(__dirname, './content/first.txt');
    file2= path.join(__dirname,'/content/second.txt'); 
    file3= path.join(__dirname,'/content/result-sync.txt'); 
    con1=fs.readFileSync(file,"utf8");
    con2=fs.readFileSync(file2,"utf8");
    console.log(con1);
    console.log(con2);
    fs.writeFileSync(file3, `here is the result:${con1} and ${con2}`,{flag:'a'});
    // here flag:'a' is optional it is used if you want to append content to file

// console.log(__dirname);