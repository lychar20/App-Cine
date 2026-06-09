/*import { Server as HttpServer } from "http";
import { Socket, Server as SocketServer, Namespace } from "socket.io";
import { registerConnectionHandlers } from "./handlers/connectionHandlers";
import { registerGameplayHandlers } from "./handlers/gameplayHandlers";
import { registerQuestionHandlers } from "./handlers/questionHandlers";
import { registerRoomHandlers } from "./handlers/roomHandlers";
import { registerUserHandlers } from "./handlers/userHandlers";

export const initializeSocket = (server: HttpServer) => {
  const io = new SocketServer(server, {
    cors: {
      origin: "*",
    },
  });

  const socketNamespace: Namespace = io.of("/socket");

  socketNamespace.on("connection", (socket: Socket) => {
    console.log("A user connected to socket🔌:", socket.id);

    registerConnectionHandlers(socket);
    registerGameplayHandlers(socket);
    registerQuestionHandlers(socket);
    registerRoomHandlers(socket);
    registerUserHandlers(socket);
  });
}; */


//const SocketServer = await import("socket.io").then(module => module.Server);
import { registerConnectionHandlers } from "./handlers/connectionHandlers.js";
import { registerGameplayHandlers } from "./handlers/gameplayHandlers.js";
import { registerQuestionHandlers } from "./handlers/questionHandlers.js";
import { registerRoomHandlers } from "./handlers/roomHandlers.js";
import { registerUserHandlers } from "./handlers/userHandlers.js";

export const initializeSocket = socket => {
    registerConnectionHandlers(socket)
    registerGameplayHandlers(socket)
    registerQuestionHandlers(socket)
    registerRoomHandlers(socket)
    registerUserHandlers(socket)
}