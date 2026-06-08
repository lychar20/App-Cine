import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import { initializeSocket } from "./socket/socket.js";
import app from './app.js';



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

const server = createServer(app);
//const io = new Server(server);
const io = new SocketServer(server);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

/* io.on("connection", ()=>{
  console.log("Nouvelle connection etablie");
}) */

  const usersInRooms = {}; // Object to keep track of users in each room

  io.on("connection", (socket) => {
   console.log("Nouvelle connexion établie"); // Message de confirmation
    //console.log(`Bivenue(e) dans le grooupe`); // Message de confirmation
    initializeSocket(socket); // Initialisez vos gestionnaires de socket


    //Remplace initialisationSocket

    // userwelcome
    socket.emit("message", `Bienvenue(e) dans le groupe ${socket.id}`)
    //user join
    socket.broadcast.emit("message", `Utilisateur ${socket.id} vient de se connecter`)


     // Écoute de l'événement pour rejoindre une salle
      socket.on("joinRoom", ({ roomId, userName,  userId }) => {
      socket.join(roomId); // L'utilisateur rejoint la salle spécifiée
      console.log(`${userName} a rejoint la salle ${roomId}`); 

       // Mettre à jour le compteur d'utilisateurs
       if (!usersInRooms[roomId]) {
        usersInRooms[roomId] = 0;
    }
    usersInRooms[roomId] += 1; // Incrémente le compteur
    io.to(roomId).emit('userCountUpdated', usersInRooms[roomId]); // Émet le nombre d'utilisateurs

       // Émettre un événement à tous les utilisateurs dans la salle
       socket.to(roomId).emit("userJoined", { userName });
              // Émettre un message à l'utilisateur qui vient de se connecter
        socket.emit("message", `Vous avez rejoint la salle ${roomId}`);
    });


    socket.on("userFinished", ({ roomId, userId }) => {
      // Émettre l'événement userFinished à tous les utilisateurs dans cette salle
      socket.to(roomId).emit("userFinished", { userId });
  });


    socket.on("leaveRoom", ({ roomId, userId }) => {
      socket.leave(roomId); // L'utilisateur quitte la salle
      console.log(`${userId} a quitté la salle ${roomId}`);

      // Mettre à jour le compteur d'utilisateurs
      if (usersInRooms[roomId]) {
          usersInRooms[roomId] -= 1; // Décrémente le compteur
          io.to(roomId).emit('userCountUpdated', usersInRooms[roomId]); // Émet le nombre d'utilisateurs
      }
   });

    // user disconnected
    socket.on("disconnect", ()=> {
        socket.broadcast.emit("message", `Utilisateur ${socket.id} vient de se deconnecter`)
    })


  });

//httpServer.listen(port);

/* initializeSocket(server);

server.listen(port); */

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});