import mongoose, { Schema } from "mongoose"

const RoomSchema = new Schema({
    category: { type: String, required: true },
    categoryId: { type: String, required: true },
    userName: { type: String, required: true },
    host: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    players: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
)

const Room = mongoose.model("Room", RoomSchema)
export default Room