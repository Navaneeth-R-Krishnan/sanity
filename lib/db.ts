import mongoose from 'mongoose';

  const connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(process.env.MONGODB_URL)
      console.log('MongoDB connected successfully')
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error)
      process.exit(1)
    }
  };

export default connectDB;
