import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db';
  
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[MongoDB] Database Connected Successfully: ${conn.connection.host}`);
  } catch (error: any) {
    console.warn(`[MongoDB Warning] Could not connect to MongoDB instance: ${error.message}`);
    console.warn(`[MongoDB Warning] Operating in in-memory / static mode fallback.`);
  }
};
