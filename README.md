# get-args

[![npm](https://img.shields.io/npm/v/get-args.svg?style=flat-square)](https://www.npmjs.com/package/get-args)
[![npm](https://img.shields.io/npm/dt/get-args.svg?style=flat-square)](https://www.npmjs.com/package/get-args)
[![npm](https://img.shields.io/npm/l/get-args.svg?style=flat-square)](https://github.com/jmjuanes/get-args)

Light arguments parser for Node.js

## Installation

You can install **get-args** using [NPM](https://npmjs.com/package/get-args):

```
$ npm install --save get-args
```

## Usage

```javascript
var getArgs = require("get-args");
```

### arg = getArgs(args)

Returns an object with the result of parsing the array of arguments `args`. If no array is provided, this will parse the command line arguments passed when the Node.js process was launched, extracted from [`process.argv`](https://nodejs.org/api/process.html#process_process_argv).

The output object will have the following keys:

- `arguments`: an `array` with all the arguments that did not have an option associated with it.
- `options`: an `object` with all the single and double hyphened arguments.


```javascript
var getArgs = require("get-args");

//Parse a
console.log(getArgs(["run", "--file", "/path/to/file.txt", "-x", "5"]));
// { arguments: [ 'run' ],
//   options: { file: '/path/to/file.txt', x: '5' } }
```

## Run example

There is a script called `example.js` to test how this module works.

```bash
$ node example.js foo bar -i 5 -jkw -y 10 --message "Hello world"
{ arguments: [ 'foo', 'bar' ],
  options:
   { i: '5',
     j: true,
     k: true,
     w: true,
     y: '10',
     message: 'Hello world' } }
```

## Limitations 

- `get-args` can't parse arguments with the format `--foo=bar`. 

If you implement a solution that solves anyone of the limitations listed before, feel free to submit your PR.

## License

[MIT](LICENSE) &copy; Josemi Juanes.
