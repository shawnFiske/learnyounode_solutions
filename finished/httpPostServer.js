var http = require('http');
var map = require('through2-map')

function runPostRequest(args) {

  var uc = map(function(chunk){
    return chunk.toString().toUpperCase();
  });

  http.createServer(function(request, response) {
    
    if(request.method === 'POST'){
      request.pipe(uc).pipe(response);
    }

  }).listen(args[2]);
}

runPostRequest(process.argv);