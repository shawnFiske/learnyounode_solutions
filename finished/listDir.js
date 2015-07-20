// Usage /////////////////////////////////////////////////////
//  listDir <path> <ext>
//  listDir ./ js
//////////////////////////////////////////////////////////////
var fs = require('fs');

var parseArgs = function(args) {
  fs.readdir(args[2], function(err, files) {

    for(var i = 0; i < files.length; i++){
      if(files[i].split('.')[1] === args[3]) {
        console.log(files[i]);
      }
    }
    //console.log(data.toString().split('\n').length - 1);
  });
  
};

parseArgs(process.argv);

/* suggested 
 var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })
*/