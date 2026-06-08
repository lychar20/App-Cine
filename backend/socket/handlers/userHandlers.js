import User from "../../models/user.js"

export const registerUserHandlers = socket => {
  socket.on("join_room", data => {
    socket.broadcast.emit("opponent_joined", data)
  })

  socket.on("user_inactive", async data => {
    const { roomId, userId } = data

    try {
      await User.findByIdAndDelete(userId)
      console.log(`Deleted User: ${userId}`)
      socket.broadcast.emit("room_removed", { roomId })
      console.log(`Room ${roomId} removed by user ${userId}`)
    } catch (err) {
      console.error("Error deleting user:", err)
    }
  })
}