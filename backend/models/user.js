
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  entity: { type: String, default: 'default' },
});

userSchema.plugin(uniqueValidator);


export default mongoose.model('User', userSchema);