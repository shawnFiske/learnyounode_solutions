var fs = require('fs');
var path = require('path')

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    
    if(err)
      return callback(err);

    var dirList = [];
    for(var i = 0; i < files.length; i++){
      if(files[i].split('.')[1] === ext) {
        //console.log(files[i]);
        dirList.push(files[i]);
      }
    }

    //console.log(err, dir, ext, dirList);
    callback(err, dirList);
  });
}

//exports = module.exports = readDir;

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
