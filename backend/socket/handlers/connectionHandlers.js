import { deleteRoom } from "../../controllers/roomController.js"

export const registerConnectionHandlers = socket => {
  socket.on("on_connect", msg => {
    console.log("Message de connexion:",msg)
  })

  socket.on("disconnect", async () => {
    console.log("User disconnected:", socket.id)
    const userId = "retrieve-user-id-based-on-socket.id"
    await deleteRoom(userId)
  })
}