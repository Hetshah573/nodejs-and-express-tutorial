// npm -global command,comes with node
// npm --version to check version

// local dependency - use it  only in this particular project
// npm install <packagename> or npm i <packagename>

// global dependency - use it in any project
// npm install -g <packagename> 

// package.json-manifest file(stores important info about project/package)

// total 3 ways to create package.json
// manual approach(create package.json in the root ,create properties etc)
// npm init (step by step,press enter to skip)
// npm init -y(everything default)

// using the module that we downloaded thorugh npm
const a=require('lodash');
const items=[1,[2,[3,[4]]]];
const newitems=a.flattenDeep(items);
console.log(newitems);


