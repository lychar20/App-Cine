const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  //userId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true},
}, { timestamps: true });


module.exports = mongoose.model('Score', scoreSchema);