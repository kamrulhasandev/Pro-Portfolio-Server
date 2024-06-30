import config from "../../../config";
import ApiError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { BAD_REQUEST } from "http-status";

const validatePasskey = (passkey: string) => {
  const storedPasskey = Buffer.from(config.pass_key as string);
  const inputPasskey = Buffer.from(passkey);

  if (storedPasskey.length !== inputPasskey.length) {
    throw new ApiError(BAD_REQUEST, "Passkey length mismatch");
  }

  return crypto.timingSafeEqual(storedPasskey, inputPasskey);
};

const login = async (passKey: string) => {
  try {
    const isValid = validatePasskey(passKey);

    if (!isValid) {
      throw new ApiError(BAD_REQUEST, "Invalid passkey");
    }

    const token = jwt.sign({}, config.jwt_secret as string, {
      expiresIn: config.jwt_expiration as string,
    });

    return {
      token: token,
    };
  } catch (error: any) {
    if (error instanceof ApiError) {
      throw error;
    } else if (
      error instanceof TypeError &&
      error.message.includes("timingSafeEqual")
    ) {
      throw new ApiError(BAD_REQUEST, "Invalid passkey format", error.message);
    } else {
      throw new ApiError(BAD_REQUEST, "Invalid passkey");
    }
  }
};

export const AuthService = {
  login,
};
