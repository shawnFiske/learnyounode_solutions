var http = require('http');
var bl = require('bl')


function runGetRequest(url) {

  var urlList = [url[2], url[3], url[4]];
  var listData = [];

  //console.log(url);

  for(var i = 0; i < urlList.length; i++){
    requestUrlData(i, urlList[i], process);
  }

  function process(index, data) {
    listData[index] = data;

    //console.log(index, " : ",listData);

    if(listData.length >= 3 && listData[0] !== undefined){
      console.log(listData[0]);
      //console.log(" ");
      console.log(listData[1]);
      //console.log(" ");
      console.log(listData[2]);
    }
  }
  
}

function requestUrlData(index, url, callback) {
  var req = http.get(url, function(response) {
    var data = null;
    response.setEncoding('utf8');

    response.pipe(bl(function (err, data) { 
      callback(index, data.toString());
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
 //    var bl = require('bl')
 //    var results = []
 //    var count = 0
    
 //    function printResults () {
 //      for (var i = 0; i < 3; i++)
 //        console.log(results[i])
 //    }
    
 //    function httpGet (index) {
 //      http.get(process.argv[2 + index], function (response) {
 //        response.pipe(bl(function (err, data) {
 //          if (err)
 //            return console.error(err)
    
 //          results[index] = data.toString()
 //          count++
    
 //          if (count == 3)
 //            printResults()
 //        }))
 //      })
 //    }
    
 //    for (var i = 0; i < 3; i++)
 //      httpGet(i)
