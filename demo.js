var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080); 

/*const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
myEmitter.on{'waterfall', () ==> {
  console.log('please turn off motor !');
  setTimeout{() ==>{
    console.log('please turn off motor !! fast');
  ), 3000);
  } };
  console.log{"the script is running"}
  myEmitter.emit{"watrer"};
  console,log{the script is still running}
  myEmitter.emit{"watrer"};*/
