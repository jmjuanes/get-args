//Import lib
var getArgs = require('./index.js');

//Create the options
var opt = {};

//Add the text argument
opt.args = 'node testfile.js command argument1 argument2 --option1 value1 --option2 value2 --booleanOption';

//Add for node
opt.node = true;

//Get arguments
console.log(getArgs(opt));

//Will print:
// {
//  command: 'command',
//  arguments: [ 'argument1', 'argument2' ],
//  options: { option1: 'value1', option2: 'value2', booleanOption: true }
// }
