import { Router } from "express"
import * as roomController from "../controllers/roomController.js"

const router = Router()

router.post("/rooms", roomController.createRoom)
router.get("/active", roomController.activeRooms)
router.delete("/rooms/all", roomController.deleteAllRooms)

export default router