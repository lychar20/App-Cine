import { Router } from "express"
import * as roomController from "../controllers/roomController.js"

const router = Router()

router.post("/rooms", roomController.createRoom)
router.get("/active", roomController.activeRooms)

export default router