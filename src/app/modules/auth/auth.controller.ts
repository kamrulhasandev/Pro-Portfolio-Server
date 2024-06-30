import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req: any, res: any) => {
  const result = await AuthService.login(req.body.passKey);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Access Grunted",
    data: result,
  });
});

export const AuthController = {
  login,
};
