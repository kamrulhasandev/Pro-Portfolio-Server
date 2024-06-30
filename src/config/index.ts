import dotenv from "dotenv";
import path from "path";

const envPath =
  process.env.NODE_ENV === "production"
    ? path.join(process.cwd(), ".env.prod")
    : path.join(process.cwd(), ".env");

dotenv.config({ path: envPath });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  pass_key: process.env.PASS_KEY,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expiration: process.env.EXPIRES_IN,
};
