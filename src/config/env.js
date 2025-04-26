import dotenv from "dotenv";
dotenv.config();

function mustExist(key, fallback) {
  const value = process.env[key];
  if (value === undefined || value === "") {
    if (fallback !== undefined) return fallback;
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  PORT: mustExist("PORT", "8000"),
  MONGODB_URI: mustExist("MONGODB_URI"),
  CORS_ORIGIN: mustExist("CORS_ORIGIN", "*"),

  ACCESS_TOKEN_SECRET: mustExist("ACCESS_TOKEN_SECRET"),
  ACCESS_TOKEN_EXPIRY: mustExist("ACCESS_TOKEN_EXPIRY", "1d"),
  REFRESH_TOKEN_SECRET: mustExist("REFRESH_TOKEN_SECRET"),
  REFRESH_TOKEN_EXPIRY: mustExist("REFRESH_TOKEN_EXPIRY", "10d"),

  CLOUDINARY_CLOUD_NAME: mustExist("CLOUDINARY_CLOUD_NAME"),
  CLOUDINARY_API_KEY: mustExist("CLOUDINARY_API_KEY"),
  CLOUDINARY_API_SECRET: mustExist("CLOUDINARY_API_SECRET"),
};
