// window in Js is global in Node.Js
// console.log(global);

console.log(__dirname);
console.log(__filename);

const namesDEs = require("./exporter");
console.log(namesDEs);
// { names: [ 'sunil', 'linus', 'xtha' ],
//     ages: [ 10, 11, 12, 13 ] }

console.log(namesDEs.age);
//  [ 10, 11, 12, 13 ]

// Destructuring vai halyo yo ta
const { names, yearOld } = require("./exporter");
console.log(names, yearOld);
