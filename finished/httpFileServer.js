var http  = require('http');
var url   = require('url');
var fs = require('fs');

function processArgs(args) {
  http.createServer(function(request, response) {
    
    var readStream = fs.createReadStream(args[3]);
    
    readStream.on('open', function () {
      readStream.pipe(response);
    });

    readStream.on('error', function(err) {
      response.end(response);
    });

  }).listen(args[2])
}

processArgs(process.argv);

//example
// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))
