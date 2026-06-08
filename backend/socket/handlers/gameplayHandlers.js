export const registerGameplayHandlers = socket => {
    socket.on("update_score_and_state", data => {
      socket.broadcast.emit("opponent_update_state", data)
    })
  }