const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const websocketServer = require("websocket").server;
const httpServer = http.createServer(app);

httpServer.on('error', errorHandler);
httpServer.on('listening', () => {
  const address = httpServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

httpServer.listen(port);

//hasmap
const clients = {};


const wsServer = new websocketServer({
  "httpServer": httpServer
})
wsServer.on("request", request => {

  //connect
  const connection = request.accept(null, request.origin);
  connection.on("open", () => console.log("opened!"))
  connection.on("close", () => console.log("closed!"))
  connection.on("message", () => message => {
    const result  = JSON.parse(message.utf8Data)
    // I have received a message from the client
    console.log("RESULT", result)

  })

  //generate a new clientId
  const clientId = guid();
  clients[clientId] = {
    "connection": connection
  }

  const payLoad = {
    "method": "connect",
    "clientId": clientId
  }

  //send back the client connect
  connection.send(JSON.stringify(payLoad))

})