import mongoose from "mongoose";
import logger from "../utils/logger";

const cached = { isConnected: 0 };
const MAX_RETRIES = 5;

async function connectDb(retries = MAX_RETRIES) {
  if (cached.isConnected) {
    logger.info("✅ Already connected to the database.");
    return;
  }

  if (mongoose.connections.length > 0) {
    cached.isConnected = mongoose.connections[0].readyState;
    if (cached.isConnected === 1) {
      logger.info("✅ Reusing existing database connection.");
      return;
    }
    await mongoose.disconnect();
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: process.env.NODE_ENV !== "production",
    });

    cached.isConnected = db.connections[0].readyState;
    logger.info("✅ New database connection established.");

    // MongoDB connection events
    mongoose.connection.on("connected", () => {
      logger.info("✅ MongoDB connected successfully.");
    });

    mongoose.connection.on("error", (err) => {
      logger.error(`❌ MongoDB connection error: ${err.message}`);
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn("🚫 MongoDB disconnected.");
    });

    mongoose.connection.on("reconnected", () => {
      logger.info("🔄 MongoDB reconnected.");
    });

  } catch (err) {
    logger.error(`❌ MongoDB connection failed: ${err.message}`);
    if (retries > 0) {
      logger.warn(`🔁 Retrying to connect... (${MAX_RETRIES - retries + 1})`);
      await new Promise((res) => setTimeout(res, 2000)); // wait 2s
      return connectDb(retries - 1);
    } else {
      logger.error("🚫 All MongoDB connection retries failed.");
      throw err;
    }
  }
}

async function disconnectDb() {
  if (cached.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      cached.isConnected = 0;
      logger.info("🚫 Disconnected from the database.");
    } else {
      logger.info("⚠️ Skipping disconnect in development.");
    }
  }
}

const db = { connectDb, disconnectDb };
export default db;
