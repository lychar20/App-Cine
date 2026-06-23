//const mongoose = require('mongoose');

import mongoose from 'mongoose';

const scoreSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  roomId: { type: String, default: null },
}, { timestamps: true });


//module.exports = mongoose.model('Score', scoreSchema);

export default mongoose.model('Score', scoreSchema);