//Import lib
var getArgs = require('./index.js');

//Get arguments
console.log(getArgs('node testfile.js command argument1 argument2 --option1 value1 --option2 value2 --booleanOption', true));

//Will print:
// {
//  command: 'command',
//  arguments: [ 'argument1', 'argument2' ],
//  options: { option1: 'value1', option2: 'value2', booleanOption: true }
// }
