# get-args

[![npm](https://img.shields.io/npm/v/get-args.svg?style=flat-square)](https://www.npmjs.com/package/get-args)
[![npm](https://img.shields.io/npm/dt/get-args.svg?style=flat-square)](https://www.npmjs.com/package/get-args)

Ridiculous simple way to get the arguments in a Node.js CLI tool

## Installation

You can install **get-args** using [NPM](https://npmjs.com/package/get-args):

```
npm install get-args
```

## Usage

### getArgs()

The script will return an object with the following values:

- `command`: a `string` with the command executed.
- `arguments`: an `array` with all the arguments provided.
- `options`: an `object` with all the options provided.

## Example

```javascript
//If we run
// node myfile.js run /path/to/my/file.txt --option1 action1 --option2 action2 --optionBoolean1 --optionBoolean2

//Import get-args
var getArgs = function('get-args');

//Get the arguments
var args = getArgs();

//args will be:
// {
//    command: 'run',
//    arguments: [ '/path/to/my/file.txt' ],
//    options: { option1: 'action1', option2: 'action2', optionBoolean1: true, optionBoolean2: true }
// }

```

## License

[MIT](LICENSE) &copy; Josemi Juanes.
