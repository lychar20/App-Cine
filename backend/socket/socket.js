import { Server as SocketServer } from "socket.io"
import { registerConnectionHandlers } from "./handlers/connectionHandlers.js"
import { registerGameplayHandlers } from "./handlers/gameplayHandlers.js"
import { registerQuestionHandlers } from "./handlers/questionHandlers.js"
import { registerRoomHandlers } from "./handlers/roomHandlers.js"
import { registerUserHandlers } from "./handlers/userHandlers.js"


/* export const initializeSocket = server => {
  const io = new SocketServer(server, {
    cors: {
      origin: "*"
    }
  })

  const socketNamespace = io.of("/socket")

  socketNamespace.on("connection", socket => {
    console.log("A user connected to socket🔌:", socket.id)

    registerConnectionHandlers(socket)
    registerGameplayHandlers(socket)
    registerQuestionHandlers(socket)
    registerRoomHandlers(socket)
    registerUserHandlers(socket)
  })
} */

  export const initializeSocket = (socket) => {
    socket.on("send_answer", (data) => {
      console.log("Réponse reçue:", data);
      socket.broadcast.emit("receive_answer", data); // Diffuser la réponse aux autres clients
    });
  
/*     socket.on("send_questions", (data) => {
      console.log("Questions reçues:", data);
      socket.broadcast.emit("receive_questions", data); // Diffuser les questions
    });
  
    socket.on("give_me_questions", () => {
      // Logique pour renvoyer les questions au client
      // Assurez-vous d'avoir une variable `questions` définie et accessible ici
      socket.emit("receive_questions", questions); // Renvoyer les questions
    }); */

    registerConnectionHandlers(socket)
    registerGameplayHandlers(socket)
    registerQuestionHandlers(socket)
    registerRoomHandlers(socket)
    registerUserHandlers(socket)

  };
  