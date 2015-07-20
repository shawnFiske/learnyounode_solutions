var net  = require('net');
var url   = require('url');
var fs = require('fs');

function onRequest(socket) {
  //"2013-07-06 17:42"
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();

  var dateFormate = year + '-' + 
                    ("0" + month).slice(-2) + '-' + 
                    ("0" + day).slice(-2) + ' ' + 
                    ("0" + hour).slice(-2) + ':' + 
                    ("0" + minute).slice(-2) + '\n';

  socket.write(dateFormate); 
  socket.end();

}

function processArgs(args) {
  net.createServer(onRequest).listen(args[2]);
}

processArgs(process.argv);

//example
 // var net = require('net')
    
 //    function zeroFill(i) {
 //      return (i < 10 ? '0' : '') + i
 //    }
    
 //    function now () {
 //      var d = new Date()
 //      return d.getFullYear() + '-'
 //        + zeroFill(d.getMonth() + 1) + '-'
 //        + zeroFill(d.getDate()) + ' '
 //        + zeroFill(d.getHours()) + ':'
 //        + zeroFill(d.getMinutes())
 //    }
    
 //    var server = net.createServer(function (socket) {
 //      socket.end(now() + '\n')
 //    })
    
 //    server.listen(Number(process.argv[2]))
