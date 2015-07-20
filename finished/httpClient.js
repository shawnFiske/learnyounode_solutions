var http  = require('http');
var url   = require('url');
var fs = require('fs');

function onRequest(request, response) {

  if(response !== 'error') {
    var pathname = url.parse(request.url).pathname;
    var method = url.parse(request.method).path;
    console.log(pathname, method);
    
    if(pathname === '/') {

    //   response.writeHead(200);
    //   response.end("hello world\n");

    //   response.on("data", function (data) {
    //     //process.stdout.write(d);
    //   });

    }
  }else{
    console.log('ERROR');
  }
};

http.createServer(onRequest).listen(8000);

