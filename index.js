//Save an option
let saveOption = function(obj, key, value) {
    if(typeof obj[key] === "undefined") {
        obj[key] = value;
    }
    else {
        //Check if the current option is not an array
        if(Array.isArray(obj[key]) === false) {
            obj[key] = [obj[key]];
        }
        obj[key].push(value);
    }
};

//Get the CLI arguments
module.exports = function (args) {
    if (typeof args === "undefined" || Array.isArray(args) === false) {
        //Get the arguments passed to the node CLI
        args = process.argv.slice(2);
    }
    let out = {arguments: [], options: {}};
    //Parse all arguments
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];

        //Check if argument does not start with a single hyphen
        if (arg.substring(0, 1) !== "-") {
            //Save to the non hyphenated arguments list
            out.arguments.push(arg);
        }

        //Check for a double hyphenated argument
        else if(arg.indexOf("--") === 0) {
            let key = arg.substring(2);
            let value = true;
            if(i + 1 < args.length) {
                if(args[i + 1].charAt(0) !== "-") {
                    value = args[i + 1];
                    i = i + 1;
                }
            }
            //Save this option
            saveOption(out.options, key, value);
        }

        //Check for a single  hyphenated argument
        else if(arg.indexOf("-") === 0) {
            let keys = arg.substring(1).split("");
            for(let j = 0; j < keys.length; j++) {
                let key = keys[j];
                let value = true;
                //Check for the last character
                if(j === keys.length - 1) {
                    if(i + 1 < args.length) {
                        if(args[i + 1].charAt(0) !== "-") {
                            value = args[i + 1];
                            i = i + 1;
                        }
                    }
                }
                //Save this option
                saveOption(out.options, key, value);
            }
        }
    }
    return out;
};
