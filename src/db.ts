import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const uri = process.env.MONGO_URL || "Error"
console.log("a",uri)
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

export default mongoose;
