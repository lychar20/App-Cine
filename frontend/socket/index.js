import { io } from "socket.io-client";
import { API_URL } from '../config.js';

const serverEndpoint = API_URL;
const socket = io(serverEndpoint); // Connectez-vous au serveur

// Écoutez les événements de connexion
/* socket.on("connect", () => {
  console.log("Connecté au serveur Socket.IO"); // Message de confirmation
}); */

socket.on("message", (message) => console.log(message));



export { socket };



  

