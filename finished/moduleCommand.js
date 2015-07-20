var fs = require('fs');
var listDir = require('moduleDirRead')

var parseArgs = function(args) {
  console.log(listDir(args[2], args[3], printFiles));
};

function printFiles(err, data){
  if(err){
  }else{
    console.log(data)
  }
    
}

parseArgs(process.argv);