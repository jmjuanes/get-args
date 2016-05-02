//Get the CLI arguments
module.exports = function(opt)
{
	//Check for string
	if(typeof opt === 'string'){ opt = { args: opt }; }
	
	//Check for undefined options
	if(typeof opt === 'undefined'){ var opt = {}; }

	//Check for custom arguments
	if(typeof opt.args === 'undefined'){ opt.args = process.argv; }

	//Check for string args
	if(typeof opt.args === 'string'){ opt.args = opt.args.split(' '); }

	//Check for node command
	if(typeof opt.node !== 'undefined' && opt.node === true)
	{
		//Check if the second command has a .js file
		if(opt.args[1].indexOf('.js') !== -1){ opt.args.splice(1, 1); }

		//Check if the first command is node
		if(opt.args[0] === 'node' || opt.args[0] === 'nodejs'){ opt.args.splice(0, 1); }
	}

	//Output arguments
	var out = { command: '', arguments: [], options: {} };

	//Read all the arguments
	for(var i = 0; i < opt.args.length; i++)
	{
		//Get the argument
		var a = opt.args[i];

		//Check if argument starts with -
		if(a.substring(0, 1) !== '-')
		{
			//Check for the command
			if(out.command === '' && a.indexOf('/') < 0)
			{
				//Save as a command
				out.command = a;
			}
			else if(out.command !== '')
			{
				//Set as a argument
				out.arguments.push(a);
			}

			//Continue with the next argument
			continue;
		}

		//Replace the -
		a = a.replace('-', '');

		//Check for ahoter -
		if(a.substring(0, 1) === '-'){ a = a.replace('-', ''); }

		//Check for invalid argument
		if(a === '' || a === ' '){ throw new Error('Invalid argument ' + opt.args[i]); }

		//Check the next argument
		if(i + 1 >= opt.args.length)
		{
			//Set the argument as true
			out.options[a] = true;
		}
		else if(opt.args[i + 1].substring(0, 1) === '-')
		{
			//Set the argument as true
			out.options[a] = true;
		}
		else
		{
			//Set the argument as value
			out.options[a] = opt.args[i + 1];

			//Increment the i
			i = i + 1;
		}
	}

	//Return the arguments
	return out;
};
