import { ZodError } from "zod";

const HandleZodError = (error: ZodError) => {
  let message = "";
  let errorDetails: any = {};

  error?.issues?.forEach((item) => (message += `${item?.message}. `));
  errorDetails["issues"] = error.issues.map((item) => ({
    field: item.path[1],
    message: item.message,
  }));

  return {
    message: message,
    errorDetails,
  };
};

export default HandleZodError;