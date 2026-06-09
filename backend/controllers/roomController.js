/* //import { Request, Response } from "express";
import * as RoomService from "../services/roomService.js";

export const createRoom = async (req, res) => {
  const { category, userId, userName } = req.body;

  try {
    const room = await RoomService.createRoom({ category, userId, userName });
    res.send({ status: "ok", roomId: room._id });
  } catch (error) {
    const typedError = error as Error;
    console.error(typedError);
    res.status(500).send({ status: "error", message: typedError.message });
  }
};

export const activeRooms = async (_req, res) => {
  try {
    const activeRooms = await RoomService.getActiveRooms();
    res.json({ status: "ok", rooms: activeRooms });
  } catch (error) {
    const typedError = error as Error;
    console.error(typedError);
    res.status(500).send({ status: "error", message: typedError.message });
  }
};

export const deleteRoom = async (userId: string) => {
  try {
    await RoomService.deleteRoomByUserId(userId);
    console.log(`Room created by user ${userId} has been deleted`);
  } catch (error) {
    console.error("Error deleting room:", error);
  }
}; */

//import { Request, Response } from "express";
import * as RoomService from "../services/roomService.js"

export const createRoom = async (req, res) => {
  const { category, categoryId, userId, userName } = req.body

  try {
    const room = await RoomService.createRoom({ category, categoryId, userId, userName })
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
    await RoomService.deleteRoomByUserId(userId)
    console.log(`Room created by user ${userId} has been deleted`)
  } catch (error) {
    console.error("Error deleting room:", error)
  }
}