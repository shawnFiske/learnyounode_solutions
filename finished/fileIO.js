var fs = require('fs');

var parseArgs = function(args) {
  var file = fs.readFileSync(args[2], 'utf8');
  console.log(file.split('\n').length - 1);
};

parseArgs(process.argv);