const WebSocketServer = require('ws').Server;
//const WebSocket = require('ws');
var wss = new WebSocketServer({ port: 1128});
var wsc;
var setup = false;
console.log("running");

wss.on('connection', function(ws) 
{
  wsc = ws;
  var client;
  ws.on('message', function(msg)
  {
    console.log('Message received = ' + msg);
    setup = true;
  });
});;

setInterval(transmit, 1000);

function transmit()
{
  if(setup)
  wsc.send('transmitting back');
}


/*ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});*/
