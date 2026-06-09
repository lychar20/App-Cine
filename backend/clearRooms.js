import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

await mongoose.connect(process.env.SECRET_DB);
const result = await mongoose.connection.collection('rooms').deleteMany({});
console.log('Rooms supprimées:', result.deletedCount);
await mongoose.disconnect();
process.exit(0);
