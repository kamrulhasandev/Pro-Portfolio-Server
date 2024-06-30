import jwt from "jsonwebtoken";
import ApiError from "../errors/AppError";
import config from "../../config";

const auth = (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ApiError(401, "Access denied. No token provided.");
    }

    jwt.verify(token, config.jwt_secret as string, (err: any, decoded: any) => {
      if (err) {
        throw new ApiError(401, "Invalid token.");
      } else {
        req.user = decoded; 
        next();
      }
    });
  } catch (error: any) {
    if (error instanceof ApiError) {
      next(error); 
    } else {
      next(new ApiError(500, "Internal server error", error));
    }
  }
};

export default auth;
