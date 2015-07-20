var fs = require('fs');

var parseArgs = function(args) {
  var file = fs.readFile(args[2], function(err, data) {
    console.log(data.toString().split('\n').length - 1);
  });
  
};

parseArgs(process.argv);