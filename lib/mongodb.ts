import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URI as string;

if (!MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

export async function connection() {
  if (mongoose.connection?.readyState >= 1) {
    return mongoose.connection; 
  }

  try {
    await mongoose.connect(MONGO_URI, {
      dbName: "tending-system",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Database connection failed");
  }
}
