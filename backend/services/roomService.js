/*import Room from "../models/room";
import mongoose from "mongoose";

interface CreateRoomInput {
  category: string;
  userId: string;
  userName: string;
}

export const createRoom = async ({
  category,
  userId,
  userName,
}: CreateRoomInput) => {
  const objectId = new mongoose.Types.ObjectId(userId);

  const room = new Room({
    category: category,
    userName,
    host: objectId,
    players: [objectId],
  });

  await room.save();
  return room;
};

export const getActiveRooms = async () => {
  return Room.find({ isActive: true }).populate("host", "userName").exec();
};

export const deleteRoomByUserId = async (userId: string) => {
  await Room.deleteOne({ host: userId });
}; */


import Room from "../models/room"
import mongoose from "mongoose"

export const createRoom = async ({ category, userId, userName }) => {
  const objectId = new mongoose.Types.ObjectId(userId)

  const room = new Room({
    category: category,
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
  await Room.deleteOne({ host: userId })
}