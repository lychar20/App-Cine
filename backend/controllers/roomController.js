import * as RoomService from "../services/roomService.js"

export const createRoom = async (req, res, next) => {
  const { category, userId, userName, categoryId  } = req.body

  try {
    const room = await RoomService.createRoom({ category, userId, userName, categoryId  })
    res.send({ status: "ok", roomId: room._id })
  } catch (error) {
    const typedError = error
    console.error(typedError)
    res.status(500).send({ status: "error", message: typedError.message })
  }
}

export const activeRooms = async (_req, res) => {
  try {
    const activeRooms = await RoomService.getActiveRooms()
    res.json({ status: "ok", rooms: activeRooms })
  } catch (error) {
    const typedError = error
    console.error(typedError)
    res.status(500).send({ status: "error", message: typedError.message })
  }
}

export const deleteRoom = async userId => {
    try {
        console.log("Trying to delete room with userId:", userId);
        await RoomService.deleteRoomByUserId(userId);
        console.log(`Room created by user ${userId} has been deleted`);
    } catch (error) {
        console.error("Error deleting room:", error);
    }
};