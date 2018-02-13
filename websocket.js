const WebSocket = require('ws');

const ws = new WebSocket('ws://[2001:db8::06a3:16ff:fe5e:6b72]:1128');

console.log("Running");
ws.on('open', function open() {
  ws.send('something');
  console.log("Sending something");
});

ws.on('message', function incoming(data) {
  console.log(data);
});
