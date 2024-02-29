// CommonJS,every file is module(by default)
// Modules -Encapsulated Code (only share minimum)
const names=require('./names');
// const names=require('./names.js');
const sayHi=require('./utils');

const data=require('./alternative-flavor')
// console.log(data)

require('./add')
// this will call and invoke addval function present in add.js 

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

