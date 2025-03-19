/* const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); */

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 // scoreUser : { type: Number, required: false }
});

userSchema.plugin(uniqueValidator);

//module.exports = mongoose.model('User', userSchema);

export default mongoose.model('User', userSchema);