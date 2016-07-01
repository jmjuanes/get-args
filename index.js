//Get the CLI arguments
module.exports = function(args)
{
  //Get the node args
  if(typeof args === 'undefined'){ var args = process.argv.slice(2); } 

  //Output arguments
  var out = { command: '', arguments: [], options: {} };

  //Read all the arguments
  for(var i = 0; i < args.length; i++)
  {
    //Get the argument
    var a = args[i];

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
    if(a === '' || a === ' '){ throw new Error('Invalid argument ' + args[i]); }

    //Check the next argument
    if(i + 1 >= args.length)
    {
      //Set the argument as true
      out.options[a] = true;
    }
    else if(args[i + 1].substring(0, 1) === '-')
    {
      //Set the argument as true
      out.options[a] = true;
    }
    else
    {
      //Set the argument as value
      out.options[a] = args[i + 1];

      //Increment the i
      i = i + 1;
    }
  }

  //Return the arguments
  return out;
};
