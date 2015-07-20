var http = require('http');
var url = require('url')


function runPostRequest(args) {
  http.createServer(function(request, response) {
    var endPoint = url.parse(request.url).pathname;
    var time = url.parse(request.url,true).query.iso;
    var method = url.parse(request.method).path;
    //console.log(endPoint, method, time);
    
    var currentDate = new Date(time.toString());

    var jsonTimeObj = '';

    if(endPoint === '/api/parsetime') {
      jsonTimeObj = { "hour": currentDate.getHours(), "minute": currentDate.getMinutes(), "second": currentDate.getSeconds()};
    }

    if(endPoint === '/api/unixtime'){
      jsonTimeObj = { "unixtime": currentDate.getTime()};
    }

    if(response){
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.write(JSON.stringify(jsonTimeObj));
      response.end();
    } else {
      response.writeHead(404)
      response.end()
    }

  }).listen(args[2])
}

runPostRequest(process.argv);

//example
// var http = require('http')
//     var url = require('url')
    
//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }
    
//     function unixtime (time) {
//       return { unixtime : time.getTime() }
//     }
    
//     var server = http.createServer(function (req, res) {
//       var parsedUrl = url.parse(req.url, true)
//       var time = new Date(parsedUrl.query.iso)
//       var result
    
//       if (/^\/api\/parsetime/.test(req.url))
//         result = parsetime(time)
//       else if (/^\/api\/unixtime/.test(req.url))
//         result = unixtime(time)
    
//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))
