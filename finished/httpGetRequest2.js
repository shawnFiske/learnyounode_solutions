var http = require('http');
var bl = require('bl')


function runGetRequest(url) {

  var req = http.get(url[2], function(response) {
    
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) { 
      console.log(data.toString().length);
      console.log(data.toString());
    }));

    response.on('data', function(data) {
      //console.log(data);
    });

    response.on('end', function() {
      //console.log(res_data);
    });

  });

  req.on('error', function(e) {
    //console.log("Got error: " + e.message);
  });
}

runGetRequest(process.argv);

//example
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })
