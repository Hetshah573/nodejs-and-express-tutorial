// Globals -No window !!

// there are some global variables available to be used in node but we cant access window object or dom in node as there is no browser

// __dirname - path to current directory
// __filename - file name
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about env where program is to be executed

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);
// we also have setinterval and settimeout methods available


setInterval(()=>{
    console.log("hello world");
},1000);


