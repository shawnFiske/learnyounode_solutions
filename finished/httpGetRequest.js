var http = require('http');

function runGetRequest(url) {
  //console.log(url)
  //var options = {
  //  host: [3],
  //  path: url[2]
  //};

  var req = http.get(url[2], function(response) {
    // handle the response
    //console.log("statusCode: ", response.statusCode);
    //console.log("headers: ", response.headers);

    //console.log(response);

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data);
      //process.stdout.write(data);
    });

    response.on('end', function() {
      //console.log(res_data);
    });

  });

  req.on('error', function(e) {
    //console.log("Got error: " + e.message);
  });
}

    // var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //   response.setEncoding('utf8')
    //   response.on('data', console.log)
    //   response.on('error', console.error)
    // })




runGetRequest(process.argv);