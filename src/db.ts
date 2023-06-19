import mongoose from 'mongoose';

console.log("a")
const uri = "mongodb+srv://codelabuser:f2eAQZkKKlPVD6Cm@codelabs.8nvffkx.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

export default mongoose;
