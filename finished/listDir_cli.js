var readFileMod = require('./readDirModule');

var parseArgs = function(args) {
  var dir = args[2];
  var extension = args[3];

  readFileMod(dir, extension, listFiles)
}


function listFiles(err, list) {
  if(err !== null) {
    console.log('Error reading directory or files')
  }else{
    for(var i = 0; i < list.length; i++){
      console.log(list[i]);
    }
  }
}


parseArgs(process.argv);

//example
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }

