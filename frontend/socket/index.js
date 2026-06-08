import { io } from "socket.io-client"; 

const serverEndpoint = "http://192.168.1.17:3000"; // ou l'URL de votre serveur
const socket = io(serverEndpoint); // Connectez-vous au serveur

// Écoutez les événements de connexion
/* socket.on("connect", () => {
  console.log("Connecté au serveur Socket.IO"); // Message de confirmation
}); */

socket.on("message", (message) => console.log(message));



export { socket };



  

