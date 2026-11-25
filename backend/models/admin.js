import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const adminSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  entity: { type: String, required: true },
});

adminSchema.plugin(uniqueValidator);

export default mongoose.model('Admin', adminSchema);
