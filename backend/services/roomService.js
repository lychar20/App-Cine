import Room from "../models/room.js"
import mongoose from "mongoose"

export const createRoom = async ({ category, userId, userName, categoryId }) => {
  const objectId = new mongoose.Types.ObjectId(userId)

  const room = new Room({
    category: category,
    categoryId,
    userName,
    host: objectId,
    players: [objectId]
  })

  await room.save()
  return room
}

export const getActiveRooms = async () => {
  return Room.find({ isActive: true })
    .populate("host", "userName")
    .exec()
}

export const deleteRoomByUserId = async userId => {
    // Vérifiez si userId est un ObjectId valide
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }
    await Room.deleteOne({ host: userId });
};